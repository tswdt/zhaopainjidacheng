const { sceneRegistry } = require('./sceneRegistry');

const mockRouterService = {
  detect(mockUploadType) {
    const map = {
      invoice: { suggestedSceneId: 'invoiceRecognition', contentType: 'document', confidence: 0.95, detectedObject: '增值税发票', reason: '检测到标准发票格式' },
      lab_report: { suggestedSceneId: 'medicalReport', contentType: 'document', confidence: 0.92, detectedObject: '医学检验报告', reason: '检测到检验指标和参考范围' },
      medicine_instruction: { suggestedSceneId: 'drugInstruction', contentType: 'document', confidence: 0.90, detectedObject: '药品说明书', reason: '检测到药品成分和用法说明' },
      food_label: { suggestedSceneId: 'foodLabel', contentType: 'image', confidence: 0.88, detectedObject: '食品配料表', reason: '检测到配料表和营养成分表' },
      old_photo: { suggestedSceneId: 'oldPhotoRepair', contentType: 'image', confidence: 0.93, detectedObject: '老照片', reason: '检测到黑白或褪色照片' },
      room_photo: { suggestedSceneId: 'renovationEffect', contentType: 'image', confidence: 0.91, detectedObject: '室内空间', reason: '检测到室内装修空间' },
      product_image: { suggestedSceneId: 'productImageOpt', contentType: 'image', confidence: 0.89, detectedObject: '商品图片', reason: '检测到商品主体和背景' },
      plant: { suggestedSceneId: 'plantIdentify', contentType: 'image', confidence: 0.87, detectedObject: '花卉植物', reason: '检测到植物叶片和花朵' },
      vegetable: { suggestedSceneId: 'fruitVegIdentify', contentType: 'image', confidence: 0.86, detectedObject: '蔬菜水果', reason: '检测到蔬果形态' },
      animal: { suggestedSceneId: 'animalIdentify', contentType: 'image', confidence: 0.85, detectedObject: '动物', reason: '检测到动物特征' },
      unknown_image: { suggestedSceneId: 'generalAnalysis', contentType: 'image', confidence: 0.30, detectedObject: '未知图片', reason: '无法高置信度识别内容类型' },
      medium_confidence_room: { suggestedSceneId: 'renovationEffect', contentType: 'image', confidence: 0.55, detectedObject: '可能是室内空间', reason: '检测到可能的空间结构，但置信度不高' },
      mismatch_lab_invoice: { suggestedSceneId: 'invoiceRecognition', contentType: 'document', confidence: 0.93, detectedObject: '增值税发票', reason: '检测到发票格式，但您选择了化验单场景' },
      mismatch_product_plant: { suggestedSceneId: 'plantIdentify', contentType: 'image', confidence: 0.88, detectedObject: '花卉植物', reason: '检测到植物，但您选择了商品图场景' }
    };
    const result = map[mockUploadType];
    if (!result) return { suggestedSceneId: 'generalAnalysis', contentType: 'image', confidence: 0.2, detectedObject: '未知内容', reason: '无法识别' };
    if (result.confidence >= 0.85) {
      const scene = sceneRegistry[result.suggestedSceneId];
      result.candidateScenes = [{ sceneId: result.suggestedSceneId, name: scene ? scene.name : result.suggestedSceneId, confidence: result.confidence }];
    } else if (result.confidence >= 0.45) {
      result.candidateScenes = [
        { sceneId: result.suggestedSceneId, name: (sceneRegistry[result.suggestedSceneId] || {}).name || result.suggestedSceneId, confidence: result.confidence },
        { sceneId: 'generalAnalysis', name: '通用图片分析', confidence: 1 - result.confidence }
      ];
    }
    return result;
  }
};

const UniversalVisualRouter = {
  route(params) {
    const { selectedSceneId, file, mockUploadType } = params;
    if (mockUploadType) {
      const detected = mockRouterService.detect(mockUploadType);
      const result = { ...detected };
      if (selectedSceneId) result._impliedSelectedSceneId = selectedSceneId;
      return result;
    }
    return { suggestedSceneId: selectedSceneId || 'generalAnalysis', contentType: 'image', confidence: 0.5, detectedObject: '未知内容', reason: '未指定上传类型' };
  },
  shouldConfirm(routeResult, selectedSceneId) {
    if (!selectedSceneId) return routeResult.confidence < 0.45;
    return routeResult.suggestedSceneId !== selectedSceneId || routeResult.confidence < 0.45;
  },
  resolveRoute(routeResult, selectedSceneId, userChoice) {
    let finalSceneId = routeResult.suggestedSceneId;
    let finalReportType = (sceneRegistry[finalSceneId] || {}).reportType || 'generalAnalysis';
    let outputSchemaKey = (sceneRegistry[finalSceneId] || {}).outputSchemaKey || 'generalAnalysisOutput';
    let extractorPromptKey = (sceneRegistry[finalSceneId] || {}).extractorPromptKey || 'generalAnalysis';
    let needUserConfirm = false;
    let routeMode = 'auto';
    if (userChoice === 'suggested') {
      finalSceneId = routeResult.suggestedSceneId;
      routeMode = 'auto';
    } else if (userChoice === 'original') {
      finalSceneId = selectedSceneId;
      routeMode = 'manual';
    } else if (userChoice === 'general') {
      finalSceneId = 'generalAnalysis';
      routeMode = 'fallback';
    } else {
      if (selectedSceneId && routeResult.suggestedSceneId !== selectedSceneId) {
        needUserConfirm = true;
      }
    }
    const scene = sceneRegistry[finalSceneId];
    if (scene) {
      finalReportType = scene.reportType;
      outputSchemaKey = scene.outputSchemaKey;
      extractorPromptKey = scene.extractorPromptKey;
    }
    return { finalSceneId, finalReportType, outputSchemaKey, extractorPromptKey, needUserConfirm, routeMode, routeResult, confidence: routeResult.confidence, userRouteChoice: userChoice };
  }
};

module.exports = { mockRouterService, UniversalVisualRouter };
