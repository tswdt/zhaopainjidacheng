const { sceneRegistry } = require('./sceneRegistry');

function baseSections(title, description) {
  return [
    { sectionId: 'summary', title, type: 'infoList', data: { items: [{ text: description }] } }
  ];
}

function getSceneName(sceneId) {
  const scene = sceneRegistry[sceneId];
  return scene ? scene.name : 'AI视觉分析';
}

const mockModelAdapter = {
  provider: 'mock',
  modelName: 'mock-visual-model-v1',

  async generate(promptPayload) {
    const resultData = this._buildMockResult(promptPayload);
    return JSON.stringify(resultData);
  },

  _buildMockResult(promptPayload) {
    const { reportType, sceneId } = promptPayload;
    const sceneName = getSceneName(sceneId);

    const builders = {
      documentRead: () => ({
        reportType,
        title: sceneName + '报告',
        summary: '已识别文档内容，并提取关键字段。',
        sections: [
          { sectionId: 'basic', title: '基础信息', type: 'fieldTable', data: { fields: [{ key: '文档类型', value: sceneName, type: 'text' }, { key: '识别状态', value: '已完成', type: 'text' }] } },
          { sectionId: 'key', title: '重点内容', type: 'highlightList', data: { items: [{ text: '关键字段已提取' }, { text: '建议人工核对重要字段' }] } }
        ],
        warnings: [{ text: '识别结果仅供参考，请以原件为准', level: 'medium' }],
        actions: [{ text: '核对信息', type: 'verify' }, { text: '重新识别', type: 'submit' }],
        extractedFields: [{ key: '文档类型', value: sceneName, type: 'text' }, { key: '识别结果', value: '已完成', type: 'text' }],
        keyFields: [{ key: '重点字段', value: '请人工核对', type: 'text' }],
        uncertainFields: [],
        risks: []
      }),

      healthReport: () => ({
        reportType,
        title: '健康资料解读报告',
        summary: '已整理健康资料，异常项需要结合医生意见判断。',
        sections: [
          { sectionId: 'abnormal', title: '异常项', type: 'indicatorTable', data: { items: [{ name: '示例指标', value: '偏高', ref: '参考范围', direction: '↑' }] } },
          { sectionId: 'explain', title: '指标解释', type: 'explanationList', data: { items: [{ name: '示例指标', explain: '该项需要结合症状和医生判断' }] } },
          { sectionId: 'focus', title: '重点关注', type: 'focusList', data: { items: [{ text: '建议携带原始报告咨询医生' }] } }
        ],
        warnings: [{ text: '本报告仅用于理解资料，不构成医疗诊断或治疗建议', level: 'high' }],
        actions: [{ text: '咨询医生', type: 'consult' }, { text: '复查指标', type: 'verify' }],
        abnormalItems: [{ name: '示例指标', value: '偏高', ref: '参考范围', direction: '↑' }],
        normalItems: [{ name: '示例正常项', value: '正常', ref: '参考范围' }],
        explanations: [{ name: '示例指标', explain: '该项需要结合症状和医生判断' }],
        focusPoints: [{ text: '关注异常项变化趋势' }],
        suggestedQuestions: [{ text: '这些异常项是否需要复查？' }]
      }),

      medicineReport: () => ({
        reportType,
        title: '药品说明书解读报告',
        summary: '已整理药品说明书关键信息，请重点关注禁忌和不良反应。',
        sections: [
          { sectionId: 'medicine', title: '药品信息', type: 'medicineInfo', data: { medicineName: '示例药品', ingredients: '以说明书为准', indications: '适应症请核对原文', usage: '遵医嘱', dosage: '遵医嘱' } },
          { sectionId: 'contra', title: '禁忌', type: 'contraindicationList', data: { items: [{ text: '过敏者禁用或慎用，请核对原说明书' }] } },
          { sectionId: 'side', title: '不良反应', type: 'sideEffectList', data: { items: [{ text: '可能存在不良反应，请查看原说明书' }] } }
        ],
        warnings: [{ text: '不要仅凭AI结果调整用药，请遵医嘱或咨询药师', level: 'high' }],
        actions: [{ text: '咨询药师', type: 'consult' }, { text: '保存用药卡', type: 'submit' }],
        medicineName: '示例药品',
        ingredients: '以说明书为准',
        indications: '适应症请核对原文',
        usage: '遵医嘱',
        dosage: '遵医嘱',
        contraindications: [{ text: '过敏者禁用或慎用' }],
        sideEffects: [{ text: '可能存在不良反应' }],
        specialGroups: [{ group: '特殊人群', note: '请咨询医生或药师' }],
        medicationCard: { name: '示例药品', frequency: '遵医嘱', timing: '遵医嘱', duration: '遵医嘱' }
      }),

      foodLabelReport: () => ({
        reportType,
        title: '食品标签分析报告',
        summary: '已整理配料和营养成分，请关注糖、脂肪、钠和过敏原。',
        sections: [
          { sectionId: 'ingredients', title: '配料识别', type: 'ingredientList', data: { items: [{ text: '示例配料' }] } },
          { sectionId: 'nutrition', title: '营养成分', type: 'nutritionTable', data: { nutrition: { calories: '待识别', sugar: '待识别', fat: '待识别', sodium: '待识别', protein: '待识别' } } },
          { sectionId: 'allergen', title: '过敏原提示', type: 'allergenList', data: { items: [{ text: '请核对包装过敏原标识' }] } }
        ],
        warnings: [{ text: '食品标签识别仅供参考，请以包装原文为准', level: 'medium' }],
        actions: [{ text: '核对包装', type: 'verify' }],
        ingredients: [{ text: '示例配料' }],
        nutrition: { calories: '待识别', sugar: '待识别', fat: '待识别', sodium: '待识别', protein: '待识别' },
        sugarFatSodiumAnalysis: { sugar: '待判断', fat: '待判断', sodium: '待判断' },
        allergenWarnings: [{ text: '请核对包装过敏原标识' }],
        suitableFor: [{ text: '一般人群需结合实际情况' }],
        notSuitableFor: [{ text: '过敏人群需谨慎' }],
        purchaseAdvice: '购买前建议核对配料、营养成分和过敏原信息'
      }),

      imageRepair: () => ({
        reportType,
        title: '图片修复报告',
        summary: '已生成图片修复结果和处理说明。',
        sections: [
          { sectionId: 'compare', title: '处理前后', type: 'compareView', data: { before: '原图', after: '处理后图片' } },
          { sectionId: 'repair', title: '处理项目', type: 'repairDetail', data: { items: [{ type: '增强', detail: '提升清晰度和色彩表现' }] } },
          { sectionId: 'quality', title: '质量评分', type: 'qualityScore', data: { score: 86, details: '整体质量良好' } }
        ],
        warnings: [{ text: '修复结果可能与原始真实色彩存在差异', level: 'medium' }],
        actions: [{ text: '导出高清图', type: 'submit' }, { text: '继续处理', type: 'verify' }],
        originalImage: 'original',
        resultImage: 'result',
        beforeAfter: { before: '原图', after: '处理后图片' },
        repairTypes: [{ type: '增强', detail: '提升清晰度和色彩表现' }],
        outputResolution: '2048×1536',
        nextActions: [{ text: '导出高清图', type: 'submit' }]
      }),

      spaceDesign: () => ({
        reportType,
        title: '空间设计报告',
        summary: '已分析空间照片并生成装修建议。',
        sections: [
          { sectionId: 'compare', title: '效果参考', type: 'compareView', data: { before: '原始空间', after: 'AI效果图' } },
          { sectionId: 'problem', title: '空间问题', type: 'problemList', data: { items: [{ text: '空间采光和收纳需要优化' }] } },
          { sectionId: 'color', title: '配色方案', type: 'colorPalette', data: { colors: ['#F6F1E7', '#B87300', '#111827'] } },
          { sectionId: 'budget', title: '预算估算', type: 'budgetCard', data: { range: '¥15,000-35,000', note: '仅供参考' } }
        ],
        warnings: [{ text: '效果图仅供参考，实际施工需咨询专业人员', level: 'medium' }],
        actions: [{ text: '生成更多方案', type: 'verify' }, { text: '导出方案', type: 'submit' }],
        originalImage: 'original',
        generatedImages: [{ id: 'gen1', style: '现代简约' }],
        style: '现代简约',
        spaceProblems: [{ text: '采光和收纳需要优化' }],
        colorPlan: ['#F6F1E7', '#B87300', '#111827'],
        furnitureAdvice: [{ name: '模块化收纳柜', price: '¥2,000-5,000' }],
        softDecorationAdvice: [{ text: '建议使用暖色灯光和浅色窗帘' }],
        budgetRange: '¥15,000-35,000',
        nextActions: [{ text: '生成更多方案', type: 'verify' }]
      }),

      ecommerceReport: () => ({
        reportType,
        title: '商品图优化报告',
        summary: '已分析商品图并生成优化建议。',
        sections: [
          { sectionId: 'compare', title: '优化前后', type: 'compareView', data: { before: '原商品图', after: '优化后商品图' } },
          { sectionId: 'points', title: '卖点提取', type: 'sellingPointList', data: { items: [{ text: '主体突出' }, { text: '适合平台主图' }] } },
          { sectionId: 'advice', title: '主图建议', type: 'adviceList', data: { items: [{ text: '建议使用干净背景' }, { text: '保留产品核心细节' }] } }
        ],
        warnings: [{ text: '请遵守电商平台图片规范', level: 'medium' }],
        actions: [{ text: '导出主图', type: 'submit' }, { text: '继续优化', type: 'verify' }],
        originalImage: 'original',
        optimizedImage: 'optimized',
        sellingPoints: [{ text: '主体突出' }, { text: '适合平台主图' }],
        mainImageAdvice: [{ text: '建议使用干净背景' }],
        backgroundAdvice: [{ text: '白底或浅色场景更适合主图' }],
        platformAdvice: [{ platform: '通用电商', size: '800×800', note: '正方形主图' }],
        exportOptions: [{ format: 'PNG', size: '800×800' }]
      }),

      lifeIdentify: () => ({
        reportType,
        title: '生活万物识别报告',
        summary: '已识别图片主体，并给出可能结果。',
        sections: [
          { sectionId: 'identify', title: '识别结果', type: 'identifyResult', data: { possibleNames: [{ name: sceneName, confidence: 85, latinName: '' }] } },
          { sectionId: 'features', title: '可见特征', type: 'featureList', data: { items: [{ text: '主体特征较明显' }] } },
          { sectionId: 'advice', title: '建议', type: 'adviceList', data: { items: [{ text: '如需更准确结果，请上传清晰近景图片' }] } }
        ],
        warnings: [{ text: '识别结果可能存在误差，请结合实际判断', level: 'low' }],
        actions: [{ text: '重新识别', type: 'verify' }],
        possibleNames: [{ name: sceneName, confidence: 85, latinName: '' }],
        confidence: 85,
        visibleFeatures: [{ text: '主体特征较明显' }],
        similarObjects: [],
        relatedKnowledge: '该结果由AI根据图片可见信息生成。',
        careOrUsageAdvice: [{ text: '建议上传更清晰图片以提高准确率' }],
        uncertaintyNotes: ''
      }),

      generalAnalysis: () => ({
        reportType,
        title: '通用图片分析报告',
        summary: 'AI已对图片进行通用分析。',
        sections: baseSections('图片描述', '图片内容无法高置信度归类，已进入通用分析。'),
        warnings: [{ text: '系统无法高置信度判断具体场景', level: 'medium' }],
        actions: [{ text: '重新上传', type: 'verify' }, { text: '选择专业场景', type: 'submit' }],
        imageDescription: '图片内容无法高置信度归类，已进入通用分析。',
        possibleScenes: [{ name: '通用分析', confidence: 0.45, reportType: 'generalAnalysis' }],
        candidateCategories: [{ text: '未知' }, { text: '通用' }],
        visibleInformation: [{ text: '已检测到图片主体' }],
        uncertaintyReason: '上传内容不属于当前高置信度场景',
        suggestedNextActions: [{ text: '重新上传更清晰图片', sceneId: 'generalAnalysis' }]
      })
    };

    return (builders[reportType] || builders.generalAnalysis)();
  }
};

const realModelAdapter = {
  provider: 'real',
  modelName: 'not-configured',
  async generate() {
    throw new Error('Real model adapter not implemented');
  }
};

module.exports = { mockModelAdapter, realModelAdapter };
