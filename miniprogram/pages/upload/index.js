const { sceneRegistry } = require('../../services/sceneRegistry');
const { UniversalVisualRouter } = require('../../services/routerService');
const { taskManager, reportManager } = require('../../services/managers');
const app = getApp();

Page({
  data: {
    sceneId: '',
    scene: null,
    isDirectUpload: false,
    directType: 'image',
    currentMockUploadType: '',
    hasFile: false,
    uploading: false,
    routing: false,
    costText: '',
    showConfirm: false,
    confirmData: {
      isMismatch: false,
      title: '',
      desc: '',
      detectedObject: '',
      contentTypeText: '',
      confidenceText: '',
      confidenceClass: '',
      reason: '',
      mismatchText: '',
      candidateScenes: [],
      suggestedSceneName: '',
      suggestedSceneIcon: '',
      selectedSceneName: ''
    },
    _pendingRouteResult: null,
    _pendingSelectedSceneId: null,
    _pendingUploadedFile: null
  },

  onLoad(options) {
    reportManager._loadFromStorage();
    if (options.sceneId) {
      const scene = sceneRegistry[options.sceneId];
      if (scene) {
        this.setData({
          sceneId: options.sceneId,
          scene,
          costText: scene.costCredits === 0 ? '免费' : scene.costCredits + ' 积分'
        });
        wx.setNavigationBarTitle({ title: scene.name });
      }
    } else if (options.directType) {
      this.setData({
        isDirectUpload: true,
        directType: options.directType,
        costText: 'AI自动评估'
      });
      wx.setNavigationBarTitle({ title: options.directType === 'document' ? '上传文档' : '上传图片' });
    }
  },

  handleUploadAreaTap() {
    if (this.data.uploading || this.data.routing) return;
    if (this.data.hasFile) {
      return;
    }
    this._doUpload('image');
  },

  takePhoto() {
    this._doUpload('camera');
  },

  chooseImage() {
    this._doUpload('image');
  },

  chooseDocument() {
    this._doUpload('document');
  },

  resetUpload() {
    this.setData({
      hasFile: false,
      uploading: false,
      routing: false,
      currentMockUploadType: ''
    });
  },

  handleSubmit() {
    if (!this.data.hasFile || this.data.uploading || this.data.routing) return;
    this._processUploadedFile();
  },

  _doUpload(type) {
    var self = this;
    self.setData({ uploading: true });
    var mockType = type === 'camera' ? 'invoice' : type === 'document' ? 'contract' : 'invoice';
    setTimeout(function() {
      self.setData({
        uploading: false,
        hasFile: true,
        currentMockUploadType: mockType
      });
    }, 600);
  },

  _processUploadedFile() {
    var self = this;
    self.setData({ routing: true });
    var uploadedFile = { name: 'image_20250519.jpg', size: '1.2MB', type: 'image/jpeg' };
    setTimeout(function() {
      self.setData({ routing: false });
      var selectedSceneId = self.data.sceneId || null;
      var routeResult = UniversalVisualRouter.route({
        selectedSceneId: selectedSceneId,
        file: uploadedFile,
        mockUploadType: self.data.currentMockUploadType
      });
      if (routeResult._impliedSelectedSceneId) {
        selectedSceneId = routeResult._impliedSelectedSceneId;
        delete routeResult._impliedSelectedSceneId;
      }
      if (UniversalVisualRouter.shouldConfirm(routeResult, selectedSceneId)) {
        self._showRouteConfirmDialog(routeResult, selectedSceneId, uploadedFile);
      } else {
        self._proceedWithRoute(routeResult, selectedSceneId, uploadedFile);
      }
    }, 500);
  },

  _showRouteConfirmDialog(routeResult, selectedSceneId, uploadedFile) {
    const selectedScene = sceneRegistry[selectedSceneId];
    const suggestedScene = sceneRegistry[routeResult.suggestedSceneId];
    const isMismatch = selectedSceneId && routeResult.suggestedSceneId !== selectedSceneId;
    let title = '请确认场景';
    let desc = 'AI识别结果需要您确认';
    if (isMismatch) {
      title = '场景不匹配';
      desc = '上传内容与所选场景不一致';
    } else if (routeResult.confidence < 0.45) {
      title = '无法确定内容类型';
      desc = 'AI无法高置信度识别上传内容';
    }
    const confidencePercent = Math.round(routeResult.confidence * 100);
    let confidenceClass = '';
    if (routeResult.confidence >= 0.75) confidenceClass = 'green';
    else if (routeResult.confidence >= 0.45) confidenceClass = 'warn';
    else confidenceClass = 'warn';
    let mismatchText = '';
    if (isMismatch && selectedScene) {
      mismatchText = '您选择了「' + selectedScene.name + '」，但上传内容更像「' + routeResult.detectedObject + '」';
    }
    const candidateScenes = (routeResult.candidateScenes || []).map(cs => {
      const csScene = sceneRegistry[cs.sceneId] || {};
      return {
        sceneId: cs.sceneId,
        name: cs.name,
        iconBg: csScene.iconBg || '#F1F3F5',
        confidenceText: Math.round(cs.confidence * 100) + '%'
      };
    });
    this.setData({
      showConfirm: true,
      confirmData: {
        isMismatch,
        title,
        desc,
        detectedObject: routeResult.detectedObject,
        contentTypeText: routeResult.contentType === 'document' ? '文档' : routeResult.contentType === 'image' ? '图片' : '未知',
        confidenceText: confidencePercent + '%',
        confidenceClass,
        reason: routeResult.reason,
        mismatchText,
        candidateScenes,
        suggestedSceneName: suggestedScene ? suggestedScene.name : '',
        selectedSceneName: selectedScene ? selectedScene.name : ''
      },
      _pendingRouteResult: routeResult,
      _pendingSelectedSceneId: selectedSceneId,
      _pendingUploadedFile: uploadedFile
    });
  },

  closeConfirm() {
    this.setData({ showConfirm: false });
  },

  selectCandidateScene(e) {
    const sceneId = e.currentTarget.dataset.sceneId;
    const scene = sceneRegistry[sceneId];
    if (!scene) {
      wx.showToast({ title: '场景不存在', icon: 'none' });
      return;
    }
    const routeResult = this.data._pendingRouteResult;
    const uploadedFile = this.data._pendingUploadedFile;
    this.setData({ showConfirm: false });
    const resolved = UniversalVisualRouter.resolveRoute(routeResult, this.data._pendingSelectedSceneId, 'suggested');
    resolved.finalSceneId = sceneId;
    resolved.finalReportType = scene.reportType;
    resolved.outputSchemaKey = scene.outputSchemaKey;
    resolved.extractorPromptKey = scene.extractorPromptKey;
    this._createTaskWithRoute(resolved, uploadedFile, sceneId);
  },

  confirmRouteChoice(e) {
    const choice = e.currentTarget.dataset.choice;
    const routeResult = this.data._pendingRouteResult;
    const selectedSceneId = this.data._pendingSelectedSceneId;
    const uploadedFile = this.data._pendingUploadedFile;
    this.setData({ showConfirm: false });
    const resolved = UniversalVisualRouter.resolveRoute(routeResult, selectedSceneId, choice);
    let newSceneId = this.data.sceneId;
    if (choice === 'suggested' || choice === 'general') {
      newSceneId = resolved.finalSceneId;
    }
    this._createTaskWithRoute(resolved, uploadedFile, newSceneId);
  },

  _proceedWithRoute(routeResult, selectedSceneId, uploadedFile) {
    const resolved = UniversalVisualRouter.resolveRoute(routeResult, selectedSceneId, null);
    this._createTaskWithRoute(resolved, uploadedFile, this.data.sceneId);
  },

  _createTaskWithRoute(resolved, uploadedFile, currentSceneId) {
    const scene = sceneRegistry[resolved.finalSceneId];
    if (!scene) {
      wx.showToast({ title: '场景不存在', icon: 'none' });
      return;
    }
    const task = taskManager.createTask(resolved.finalSceneId);
    if (!task) {
      wx.showToast({ title: '创建任务失败', icon: 'none' });
      return;
    }
    task.inputFiles = [uploadedFile || { name: 'image_20250519.jpg', size: '1.2MB', type: 'image/jpeg' }];
    task.reportType = resolved.finalReportType;
    task.routeResult = resolved.routeResult;
    task.detectedSceneId = resolved.routeResult ? resolved.routeResult.suggestedSceneId : null;
    task.selectedSceneId = resolved.finalSceneId;
    task.confidence = resolved.confidence;
    task.needUserConfirm = resolved.needUserConfirm;
    task.outputSchemaKey = resolved.outputSchemaKey;
    task.extractorPromptKey = resolved.extractorPromptKey;
    task.routeMode = resolved.routeMode || 'auto';
    task.userRouteChoice = resolved.userRouteChoice || null;
    app.globalData.currentTaskId = task.taskId;
    app.globalData.currentSceneId = currentSceneId;
    setTimeout(() => {
      wx.navigateTo({ url: '/pages/processing/index?taskId=' + task.taskId });
    }, 300);
  }
});
