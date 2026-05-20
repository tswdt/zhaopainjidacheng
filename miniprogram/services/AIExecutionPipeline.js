const { sceneRegistry } = require('./sceneRegistry');
const { outputSchemas, promptTemplates, schemaValidator } = require('./schemaValidator');
const { mockModelAdapter, realModelAdapter } = require('./modelAdapters');

function isArray(value) {
  return Array.isArray(value);
}

function defaultValueForField(fieldName, fieldConfig, reportType) {
  if (fieldName === 'reportType') return reportType;
  if (fieldName === 'title') return 'AI视觉报告';
  if (fieldName === 'summary') return 'AI已生成分析结果，请核对关键信息。';
  if (fieldName === 'sections') return [];
  if (fieldName === 'warnings') return [];
  if (fieldName === 'actions') return [];

  const type = fieldConfig && fieldConfig.type;
  if (type === 'array') return [];
  if (type === 'object') return {};
  if (type === 'number') return 0;
  if (type === 'boolean') return false;
  return '';
}

const AIExecutionPipeline = {
  modelAdapter: mockModelAdapter,

  setModelAdapter(adapterName) {
    if (adapterName === 'real') {
      this.modelAdapter = realModelAdapter;
      return;
    }
    this.modelAdapter = mockModelAdapter;
  },

  buildPrompt(task) {
    const scene = sceneRegistry[task.sceneId] || {};
    const reportType = task.reportType || scene.reportType || 'generalAnalysis';
    const promptTemplate = promptTemplates[reportType] || promptTemplates.generalAnalysis;
    const outputSchema = outputSchemas[reportType] || outputSchemas.generalAnalysis;

    return {
      promptKey: promptTemplate.promptKey,
      reportType,
      sceneId: task.sceneId,
      sceneName: scene.name || '',
      role: promptTemplate.role,
      task: promptTemplate.task,
      outputRules: promptTemplate.outputRules || [],
      schemaKey: promptTemplate.schemaKey || reportType,
      schema: outputSchema,
      inputFiles: task.inputFiles || [],
      routeResult: task.routeResult || null,
      selectedSceneId: task.selectedSceneId || task.sceneId,
      detectedSceneId: task.detectedSceneId || task.sceneId,
      confidence: task.confidence || 0,
      outputSchemaKey: task.outputSchemaKey || scene.outputSchemaKey || reportType,
      extractorPromptKey: task.extractorPromptKey || scene.extractorPromptKey || promptTemplate.promptKey
    };
  },

  async execute(task) {
    const promptPayload = this.buildPrompt(task);
    const adapter = this.modelAdapter || mockModelAdapter;
    let rawResponse = '';
    let resultData = null;
    let validation = { valid: false, errors: [] };
    let repairApplied = false;

    try {
      rawResponse = await adapter.generate(promptPayload);
      resultData = this.parseAIResponse(rawResponse);
      validation = schemaValidator.validate(promptPayload.reportType, resultData);

      if (!validation.valid) {
        const repaired = this.repairInvalidResult(resultData, validation.errors, promptPayload);
        resultData = repaired.resultData;
        repairApplied = repaired.repairApplied;
        validation = schemaValidator.validate(promptPayload.reportType, resultData);
      }

      return {
        resultData,
        validationValid: validation.valid,
        validationErrors: validation.errors || [],
        rawResponse,
        promptPayload,
        repairApplied,
        modelProvider: adapter.provider || 'mock',
        modelName: adapter.modelName || 'mock-visual-model-v1',
        pipelineStatus: validation.valid ? 'success' : 'repaired_with_errors'
      };
    } catch (error) {
      const fallback = this.buildFallbackResult(promptPayload, error);
      const fallbackValidation = schemaValidator.validate(fallback.reportType, fallback);
      return {
        resultData: fallback,
        validationValid: fallbackValidation.valid,
        validationErrors: fallbackValidation.errors || [{ field: 'pipeline', error: String(error.message || error) }],
        rawResponse,
        promptPayload,
        repairApplied: true,
        modelProvider: adapter.provider || 'mock',
        modelName: adapter.modelName || 'mock-visual-model-v1',
        pipelineStatus: 'fallback',
        errorMessage: String(error.message || error)
      };
    }
  },

  parseAIResponse(rawResponse) {
    if (!rawResponse) throw new Error('AI返回为空');
    if (typeof rawResponse === 'object') return rawResponse;

    const text = String(rawResponse).trim();
    try {
      return JSON.parse(text);
    } catch (firstError) {
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) throw firstError;
      return JSON.parse(match[0]);
    }
  },

  repairInvalidResult(resultData, validationErrors, promptPayload) {
    const schema = outputSchemas[promptPayload.reportType] || outputSchemas.generalAnalysis;
    const repaired = Object.assign({}, resultData || {});

    repaired.reportType = promptPayload.reportType;

    schema.requiredFields.forEach(fieldName => {
      if (repaired[fieldName] === undefined || repaired[fieldName] === null) {
        repaired[fieldName] = defaultValueForField(fieldName, schema.fields && schema.fields[fieldName], promptPayload.reportType);
      }
    });

    if (!isArray(repaired.sections)) repaired.sections = [];
    if (!isArray(repaired.warnings)) repaired.warnings = [];
    if (!isArray(repaired.actions)) repaired.actions = [];

    if (!repaired.title) repaired.title = (promptPayload.sceneName || 'AI视觉') + '报告';
    if (!repaired.summary) repaired.summary = 'AI已生成分析结果，请核对关键信息。';

    if (repaired.sections.length === 0) {
      repaired.sections.push({
        sectionId: 'summary',
        title: '结果摘要',
        type: 'infoList',
        data: { items: [{ text: repaired.summary }] }
      });
    }

    repaired.warnings.push({ text: '结果经过自动修复，建议人工核对关键字段', level: 'medium' });

    return {
      resultData: repaired,
      repairApplied: true,
      validationErrors: validationErrors || []
    };
  },

  buildFallbackResult(promptPayload, error) {
    return {
      reportType: 'generalAnalysis',
      title: 'AI结果生成失败',
      summary: 'AI结果生成失败，请重新尝试或选择通用图片分析。',
      sections: [
        {
          sectionId: 'fallback',
          title: '失败原因',
          type: 'infoList',
          data: { items: [{ text: String(error.message || error || '未知错误') }] }
        }
      ],
      warnings: [{ text: '本次生成失败，未产生可靠分析结果', level: 'high' }],
      actions: [{ text: '重新生成', type: 'verify' }, { text: '返回上传页', type: 'submit' }],
      imageDescription: 'AI结果生成失败',
      possibleScenes: [{ name: '通用图片分析', confidence: 0.3, reportType: 'generalAnalysis' }],
      candidateCategories: [{ text: '失败' }, { text: '通用分析' }],
      visibleInformation: [{ text: '未能生成有效结果' }],
      uncertaintyReason: 'AI执行管线异常',
      suggestedNextActions: [{ text: '重新上传或重新生成', sceneId: promptPayload.sceneId || 'generalAnalysis' }]
    };
  }
};

module.exports = { AIExecutionPipeline };
