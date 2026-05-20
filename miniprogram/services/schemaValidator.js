const outputSchemas = {
  documentRead: {
    reportType: 'documentRead',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'extractedFields', 'keyFields', 'uncertainFields'],
    optionalFields: ['risks'],
    sectionTypes: ['fieldTable', 'highlightList', 'riskList'],
    fields: {
      extractedFields: { type: 'array', description: '提取的结构化字段', itemFields: ['key', 'value', 'type'] },
      keyFields: { type: 'array', description: '重点字段', itemFields: ['key', 'value', 'type'] },
      uncertainFields: { type: 'array', description: '不确定字段', itemFields: ['key', 'value', 'reason'] },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  healthReport: {
    reportType: 'healthReport',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'abnormalItems', 'normalItems', 'explanations', 'focusPoints'],
    optionalFields: ['suggestedQuestions'],
    sectionTypes: ['indicatorTable', 'explanationList', 'focusList'],
    fields: {
      abnormalItems: { type: 'array', description: '异常指标', itemFields: ['name', 'value', 'ref', 'direction'] },
      normalItems: { type: 'array', description: '正常指标', itemFields: ['name', 'value', 'ref'] },
      explanations: { type: 'array', description: '指标解释', itemFields: ['name', 'explain'] },
      focusPoints: { type: 'array', description: '重点关注', itemFields: ['text'] },
      suggestedQuestions: { type: 'array', description: '建议咨询医生的问题', itemFields: ['text'] },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  medicineReport: {
    reportType: 'medicineReport',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'medicineName', 'ingredients', 'indications', 'usage', 'dosage', 'contraindications', 'sideEffects'],
    optionalFields: ['specialGroups', 'medicationCard'],
    sectionTypes: ['medicineInfo', 'contraindicationList', 'sideEffectList', 'populationTable', 'medicationCard'],
    fields: {
      medicineName: { type: 'string', description: '药品名称' },
      ingredients: { type: 'string', description: '成分' },
      indications: { type: 'string', description: '适应症' },
      usage: { type: 'string', description: '用法' },
      dosage: { type: 'string', description: '用量' },
      contraindications: { type: 'array', description: '禁忌', itemFields: ['text'] },
      sideEffects: { type: 'array', description: '不良反应', itemFields: ['text'] },
      specialGroups: { type: 'array', description: '特殊人群', itemFields: ['group', 'note'] },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  foodLabelReport: {
    reportType: 'foodLabelReport',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'ingredients', 'nutrition', 'sugarFatSodiumAnalysis', 'allergenWarnings'],
    optionalFields: ['suitableFor', 'notSuitableFor', 'purchaseAdvice'],
    sectionTypes: ['ingredientList', 'nutritionTable', 'allergenList', 'populationList'],
    fields: {
      ingredients: { type: 'array', description: '配料列表', itemFields: ['text'] },
      nutrition: { type: 'object', description: '营养成分', itemFields: ['calories', 'sugar', 'fat', 'sodium', 'protein'] },
      sugarFatSodiumAnalysis: { type: 'object', description: '糖脂钠分析', itemFields: ['sugar', 'fat', 'sodium'] },
      allergenWarnings: { type: 'array', description: '过敏原警告', itemFields: ['text'] },
      suitableFor: { type: 'array', description: '适合人群', itemFields: ['text'] },
      notSuitableFor: { type: 'array', description: '不适合人群', itemFields: ['text'] },
      purchaseAdvice: { type: 'string', description: '购买建议' },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  imageRepair: {
    reportType: 'imageRepair',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'originalImage', 'resultImage', 'beforeAfter', 'repairTypes', 'outputResolution'],
    optionalFields: ['nextActions'],
    sectionTypes: ['compareView', 'repairDetail', 'qualityScore'],
    fields: {
      originalImage: { type: 'string', description: '原图标识' },
      resultImage: { type: 'string', description: '结果图标识' },
      beforeAfter: { type: 'object', description: '修复前后对比', itemFields: ['before', 'after'] },
      repairTypes: { type: 'array', description: '修复类型', itemFields: ['type', 'detail'] },
      outputResolution: { type: 'string', description: '输出分辨率' },
      nextActions: { type: 'array', description: '后续操作', itemFields: ['text', 'type'] },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  spaceDesign: {
    reportType: 'spaceDesign',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'originalImage', 'generatedImages', 'style', 'spaceProblems', 'colorPlan'],
    optionalFields: ['furnitureAdvice', 'softDecorationAdvice', 'budgetRange', 'nextActions'],
    sectionTypes: ['compareView', 'styleSelector', 'problemList', 'colorPalette', 'furnitureGrid', 'budgetCard'],
    fields: {
      originalImage: { type: 'string', description: '原图标识' },
      generatedImages: { type: 'array', description: '生成图标识', itemFields: ['id', 'style'] },
      style: { type: 'string', description: '推荐风格' },
      spaceProblems: { type: 'array', description: '空间问题', itemFields: ['text'] },
      colorPlan: { type: 'array', description: '配色方案', itemFields: ['color'] },
      furnitureAdvice: { type: 'array', description: '家具建议', itemFields: ['name', 'price'] },
      softDecorationAdvice: { type: 'array', description: '软装建议', itemFields: ['text'] },
      budgetRange: { type: 'string', description: '预算区间' },
      nextActions: { type: 'array', description: '后续操作', itemFields: ['text', 'type'] },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  ecommerceReport: {
    reportType: 'ecommerceReport',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'originalImage', 'optimizedImage', 'sellingPoints', 'mainImageAdvice', 'backgroundAdvice'],
    optionalFields: ['platformAdvice', 'exportOptions'],
    sectionTypes: ['compareView', 'sellingPointList', 'adviceList', 'platformTable'],
    fields: {
      originalImage: { type: 'string', description: '原图标识' },
      optimizedImage: { type: 'string', description: '优化图标识' },
      sellingPoints: { type: 'array', description: '卖点', itemFields: ['text'] },
      mainImageAdvice: { type: 'array', description: '主图建议', itemFields: ['text'] },
      backgroundAdvice: { type: 'array', description: '背景建议', itemFields: ['text'] },
      platformAdvice: { type: 'array', description: '平台适配', itemFields: ['platform', 'size', 'note'] },
      exportOptions: { type: 'array', description: '导出选项', itemFields: ['format', 'size'] },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  lifeIdentify: {
    reportType: 'lifeIdentify',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'possibleNames', 'confidence', 'visibleFeatures', 'similarObjects', 'relatedKnowledge'],
    optionalFields: ['careOrUsageAdvice', 'uncertaintyNotes'],
    sectionTypes: ['identifyResult', 'featureList', 'similarList', 'knowledgeCard', 'adviceList'],
    fields: {
      possibleNames: { type: 'array', description: '可能名称', itemFields: ['name', 'confidence', 'latinName'] },
      confidence: { type: 'number', description: '置信度(0-100)' },
      visibleFeatures: { type: 'array', description: '可见特征', itemFields: ['text'] },
      similarObjects: { type: 'array', description: '相似对象', itemFields: ['name', 'confidence', 'diff'] },
      relatedKnowledge: { type: 'string', description: '相关知识' },
      careOrUsageAdvice: { type: 'array', description: '养护/使用建议', itemFields: ['text'] },
      uncertaintyNotes: { type: 'string', description: '不确定性说明' },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  },
  generalAnalysis: {
    reportType: 'generalAnalysis',
    requiredFields: ['reportType', 'title', 'summary', 'sections', 'warnings', 'actions', 'imageDescription', 'possibleScenes', 'candidateCategories', 'visibleInformation', 'uncertaintyReason'],
    optionalFields: ['suggestedNextActions'],
    sectionTypes: ['descriptionCard', 'sceneList', 'categoryTags', 'infoList', 'uncertaintyList'],
    fields: {
      imageDescription: { type: 'string', description: '图片描述' },
      possibleScenes: { type: 'array', description: '可能场景', itemFields: ['name', 'confidence', 'reportType'] },
      candidateCategories: { type: 'array', description: '候选分类', itemFields: ['text'] },
      visibleInformation: { type: 'array', description: '可见信息', itemFields: ['text'] },
      uncertaintyReason: { type: 'string', description: '不确定原因' },
      suggestedNextActions: { type: 'array', description: '建议下一步', itemFields: ['text', 'sceneId'] },
      warnings: { type: 'array', description: '警告信息', itemFields: ['text', 'level'] },
      actions: { type: 'array', description: '建议操作', itemFields: ['text', 'type'] }
    }
  }
};

const promptTemplates = {
  documentRead: { promptKey: 'documentRead', reportType: 'documentRead', role: '你是一个专业的文档识别AI助手，擅长从图片中提取结构化信息。', task: '识别用户上传的文档图片，提取关键字段，标注不确定内容，输出结构化结果。', outputRules: ['必须按照 outputSchemas.documentRead 的结构输出', 'extractedFields 中每个字段必须包含 key 和 value', 'keyFields 标注重要或需要关注的字段', 'uncertainFields 标注识别不确定的字段及原因', 'warnings 中 level 可选: high/medium/low', 'actions 中 type 可选: verify/submit/backup/consult', 'sections 用于前端渲染，type 必须是 fieldTable/highlightList/riskList 之一'], schemaKey: 'documentRead' },
  healthReport: { promptKey: 'healthReport', reportType: 'healthReport', role: '你是一个专业的医学检验报告解读AI助手，能够识别检验指标并解读异常。', task: '识别用户上传的检验报告，提取异常和正常指标，提供专业解读和健康建议。', outputRules: ['必须按照 outputSchemas.healthReport 的结构输出', 'abnormalItems 中 direction 可选: ↑/↓', 'explanations 提供通俗易懂的指标解释', 'focusPoints 标注需要重点关注的健康问题', 'suggestedQuestions 列出建议咨询医生的问题', 'warnings 必须包含"以上解读仅供参考，不构成医疗建议"', 'sections 中 type 必须是 indicatorTable/explanationList/focusList 之一'], schemaKey: 'healthReport' },
  medicineReport: { promptKey: 'medicineReport', reportType: 'medicineReport', role: '你是一个专业的药品信息解读AI助手，擅长提取药品说明书关键信息。', task: '识别用户上传的药品说明书，提取药品名称、成分、适应症、用法用量、禁忌、不良反应等关键信息。', outputRules: ['必须按照 outputSchemas.medicineReport 的结构输出', 'contraindications 列出所有禁忌', 'sideEffects 列出所有不良反应', 'specialGroups 标注特殊人群用药注意', 'warnings 必须包含过敏和用药安全提示', 'sections 中 type 必须是 medicineInfo/contraindicationList/sideEffectList/populationTable/medicationCard 之一'], schemaKey: 'medicineReport' },
  foodLabelReport: { promptKey: 'foodLabelReport', reportType: 'foodLabelReport', role: '你是一个专业的食品安全分析AI助手，擅长识别食品配料表和营养成分。', task: '识别用户上传的食品标签，提取配料、营养成分、过敏原，提供安全评估。', outputRules: ['必须按照 outputSchemas.foodLabelReport 的结构输出', 'ingredients 按配料表顺序列出', 'nutrition 包含热量、糖、脂肪、钠、蛋白质', 'sugarFatSodiumAnalysis 对糖脂钠进行高/中/低评估', 'allergenWarnings 列出所有过敏原', 'sections 中 type 必须是 ingredientList/nutritionTable/allergenList/populationList 之一'], schemaKey: 'foodLabelReport' },
  imageRepair: { promptKey: 'imageRepair', reportType: 'imageRepair', role: '你是一个专业的图像修复AI助手，擅长老照片修复、上色、增强等。', task: '分析用户上传的图片，执行修复处理，输出修复结果和报告。', outputRules: ['必须按照 outputSchemas.imageRepair 的结构输出', 'originalImage 和 resultImage 标识原图和结果图', 'repairTypes 列出执行的修复类型', 'outputResolution 输出图片分辨率', 'sections 中 type 必须是 compareView/repairDetail/qualityScore 之一'], schemaKey: 'imageRepair' },
  spaceDesign: { promptKey: 'spaceDesign', reportType: 'spaceDesign', role: '你是一个专业的室内设计AI助手，擅长空间分析和装修效果图生成。', task: '分析用户上传的空间照片，生成装修效果图，提供风格、配色、家具建议。', outputRules: ['必须按照 outputSchemas.spaceDesign 的结构输出', 'generatedImages 列出生成的效果图', 'style 推荐装修风格', 'colorPlan 提供配色方案（十六进制色值）', 'spaceProblems 列出空间问题', 'sections 中 type 必须是 compareView/styleSelector/problemList/colorPalette/furnitureGrid/budgetCard 之一'], schemaKey: 'spaceDesign' },
  ecommerceReport: { promptKey: 'ecommerceReport', reportType: 'ecommerceReport', role: '你是一个专业的电商商品图优化AI助手，擅长商品图精修和平台适配。', task: '优化用户上传的商品图，提供卖点提取、主图建议、背景建议和平台适配。', outputRules: ['必须按照 outputSchemas.ecommerceReport 的结构输出', 'sellingPoints 提取3-5个核心卖点', 'mainImageAdvice 提供主图优化建议', 'backgroundAdvice 提供背景处理建议', 'platformAdvice 提供各平台适配建议', 'sections 中 type 必须是 compareView/sellingPointList/adviceList/platformTable 之一'], schemaKey: 'ecommerceReport' },
  lifeIdentify: { promptKey: 'lifeIdentify', reportType: 'lifeIdentify', role: '你是一个专业的生活识别AI助手，擅长识别花草、动物、蔬菜水果等。', task: '识别用户上传的图片中的对象，提供名称、特征、相似对象和相关知识。', outputRules: ['必须按照 outputSchemas.lifeIdentify 的结构输出', 'possibleNames 列出可能的识别结果及置信度', 'confidence 为最高匹配的置信度(0-100)', 'visibleFeatures 列出可见特征', 'similarObjects 列出相似对象及区别', 'uncertaintyNotes 在置信度低于80时提供说明', 'sections 中 type 必须是 identifyResult/featureList/similarList/knowledgeCard/adviceList 之一'], schemaKey: 'lifeIdentify' },
  generalAnalysis: { promptKey: 'generalAnalysis', reportType: 'generalAnalysis', role: '你是一个通用图片分析AI助手，在无法确定图片类型时提供综合分析。', task: '对用户上传的图片进行通用分析，提供描述、可能场景、候选分类和建议。', outputRules: ['必须按照 outputSchemas.generalAnalysis 的结构输出', 'imageDescription 提供图片主体描述', 'possibleScenes 列出可能的场景及置信度', 'candidateCategories 列出候选分类标签', 'uncertaintyReason 说明无法确定的原因', 'suggestedNextActions 建议用户下一步操作', 'sections 中 type 必须是 descriptionCard/sceneList/categoryTags/infoList/uncertaintyList 之一'], schemaKey: 'generalAnalysis' }
};

const schemaValidator = {
  validate(reportType, resultData) {
    const errors = [];
    if (!resultData) { errors.push({ field: 'resultData', error: '结果数据不存在' }); return { valid: false, errors }; }
    if (!reportType) { errors.push({ field: 'reportType', error: 'reportType未指定' }); return { valid: false, errors }; }
    const schema = outputSchemas[reportType];
    if (!schema) { errors.push({ field: 'reportType', error: '未知的reportType: ' + reportType }); return { valid: false, errors }; }
    if (resultData.reportType && resultData.reportType !== reportType) { errors.push({ field: 'reportType', error: 'reportType不匹配，期望' + reportType + '，实际' + resultData.reportType }); }
    schema.requiredFields.forEach(f => {
      if (resultData[f] === undefined || resultData[f] === null) { errors.push({ field: f, error: '必填字段缺失: ' + f }); }
    });
    if (resultData.sections !== undefined && !Array.isArray(resultData.sections)) { errors.push({ field: 'sections', error: 'sections必须为数组' }); }
    if (resultData.warnings !== undefined && !Array.isArray(resultData.warnings)) { errors.push({ field: 'warnings', error: 'warnings必须为数组' }); }
    if (resultData.actions !== undefined && !Array.isArray(resultData.actions)) { errors.push({ field: 'actions', error: 'actions必须为数组' }); }
    if (Array.isArray(resultData.sections)) {
      resultData.sections.forEach((s, i) => {
        if (!s.sectionId) errors.push({ field: 'sections[' + i + '].sectionId', error: 'section缺少sectionId' });
        if (!s.title) errors.push({ field: 'sections[' + i + '].title', error: 'section缺少title' });
        if (!s.type) errors.push({ field: 'sections[' + i + '].type', error: 'section缺少type' });
        if (s.data === undefined) errors.push({ field: 'sections[' + i + '].data', error: 'section缺少data' });
      });
    }
    return { valid: errors.length === 0, errors };
  }
};

module.exports = { outputSchemas, promptTemplates, schemaValidator };
