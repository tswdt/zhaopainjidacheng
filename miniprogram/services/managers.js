const { sceneRegistry } = require('./sceneRegistry');
const { schemaValidator } = require('./schemaValidator');

const taskManager = {
  tasks: [],
  _idCounter: 1000,
  createTask(sceneId) {
    const s = sceneRegistry[sceneId];
    if (!s) return null;
    const t = {
      taskId: 'task_' + (++this._idCounter),
      sceneId,
      reportType: s.reportType,
      inputFiles: [],
      status: 'created',
      progress: 0,
      costCredits: s.costCredits,
      createdAt: new Date().toISOString(),
      result: null,
      reportId: null,
      routeResult: null,
      detectedSceneId: null,
      selectedSceneId: sceneId,
      confidence: 0,
      needUserConfirm: false,
      outputSchemaKey: s.outputSchemaKey,
      extractorPromptKey: s.extractorPromptKey,
      routeMode: null,
      userRouteChoice: null,
      promptPayload: null,
      rawResponse: '',
      validationValid: false,
      validationErrors: [],
      repairApplied: false,
      modelProvider: '',
      modelName: '',
      pipelineStatus: '',
      errorMessage: ''
    };
    this.tasks.push(t);
    return t;
  },
  updateTaskStatus(id, s) { const t = this.tasks.find(x => x.taskId === id); if (t) t.status = s; return t; },
  updateTaskProgress(id, p) { const t = this.tasks.find(x => x.taskId === id); if (t) t.progress = p; return t; },
  setTaskResult(id, r) { const t = this.tasks.find(x => x.taskId === id); if (t) { t.result = r; t.status = 'done'; t.progress = 100; } return t; },
  setTaskFailed(id, e) { const t = this.tasks.find(x => x.taskId === id); if (t) { t.status = 'failed'; t.result = { error: e }; t.errorMessage = String(e || ''); } return t; },
  getTask(id) { return this.tasks.find(x => x.taskId === id); }
};

const reportManager = {
  reports: [],
  _idCounter: 5000,
  createReport(task) {
    const s = sceneRegistry[task.sceneId];
    const resultData = task.result || {};
    const validation = schemaValidator.validate(task.reportType, resultData);
    const r = {
      reportId: 'rpt_' + (++this._idCounter),
      taskId: task.taskId,
      sceneId: task.sceneId,
      reportType: task.reportType,
      title: resultData.title || (s ? s.name + '报告' : 'AI视觉报告'),
      summary: resultData.summary || '',
      inputFiles: task.inputFiles || [],
      resultData: resultData,
      result: resultData,
      createdAt: task.createdAt,
      costCredits: task.costCredits,
      sceneName: s ? s.name : '',
      iconBg: s ? s.iconBg : '#F1F3F5',
      status: task.status,
      routeResult: task.routeResult || null,
      detectedSceneId: task.detectedSceneId || null,
      selectedSceneId: task.selectedSceneId || task.sceneId,
      confidence: task.confidence || 0,
      needUserConfirm: !!task.needUserConfirm,
      routeMode: task.routeMode || null,
      userRouteChoice: task.userRouteChoice || null,
      outputSchemaKey: task.outputSchemaKey,
      extractorPromptKey: task.extractorPromptKey,
      promptPayload: task.promptPayload || null,
      rawResponse: task.rawResponse || '',
      validationValid: typeof task.validationValid === 'boolean' ? task.validationValid : validation.valid,
      validationErrors: task.validationErrors && task.validationErrors.length ? task.validationErrors : (validation.errors || []),
      repairApplied: !!task.repairApplied,
      modelProvider: task.modelProvider || 'mock',
      modelName: task.modelName || 'mock-visual-model-v1',
      pipelineStatus: task.pipelineStatus || '',
      errorMessage: task.errorMessage || ''
    };
    this.reports.unshift(r);
    task.reportId = r.reportId;
    this._saveToStorage();
    return r;
  },
  getReport(id) { return this.reports.find(x => x.reportId === id); },
  getFilteredReports(f) { if (f === 'all') return this.reports; return this.reports.filter(x => x.status === f); },
  _saveToStorage() {
    try { wx.setStorageSync('reports', this.reports); } catch (e) {}
  },
  _loadFromStorage() {
    try {
      const stored = wx.getStorageSync('reports');
      if (stored && stored.length) {
        this.reports = stored;
        if (stored.length > 0) {
          const maxId = Math.max(...stored.map(r => parseInt(r.reportId.replace('rpt_', '')) || 0));
          this._idCounter = maxId;
        }
      }
    } catch (e) {}
  }
};

module.exports = { taskManager, reportManager };