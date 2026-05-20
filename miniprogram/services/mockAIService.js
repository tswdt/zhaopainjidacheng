const { sceneRegistry } = require('./sceneRegistry');
const { taskManager, reportManager } = require('./managers');

const mockAIService = {
  _delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); },

  async processTask(taskId) {
    const task = taskManager.getTask(taskId);
    if (!task) return null;
    taskManager.updateTaskStatus(taskId, 'processing');
    taskManager.updateTaskProgress(taskId, 10);
    await this._delay(400);
    taskManager.updateTaskProgress(taskId, 30);
    await this._delay(400);
    taskManager.updateTaskProgress(taskId, 50);
    const result = this._generateMockResult(task);
    taskManager.updateTaskProgress(taskId, 70);
    await this._delay(300);
    taskManager.updateTaskProgress(taskId, 90);
    await this._delay(200);
    taskManager.setTaskResult(taskId, result);
    taskManager.updateTaskProgress(taskId, 100);
    const report = reportManager.createReport(task);
    return { task, report, result };
  },

  _generateMockResult(task) {
    const rt = task.reportType;
    const generators = {
      documentRead: () => this._mockDocumentRead(task),
      healthReport: () => this._mockHealthReport(task),
      medicineReport: () => this._mockMedicineReport(task),
      foodLabelReport: () => this._mockFoodLabelReport(task),
      imageRepair: () => this._mockImageRepair(task),
      spaceDesign: () => this._mockSpaceDesign(task),
      ecommerceReport: () => this._mockEcommerceReport(task),
      lifeIdentify: () => this._mockLifeIdentify(task),
      generalAnalysis: () => this._mockGeneralAnalysis(task)
    };
    return (generators[rt] || generators.generalAnalysis)();
  },

  _mockDocumentRead(task) {
    const s = sceneRegistry[task.sceneId] || {};
    if (task.sceneId === 'invoiceRecognition') {
      return {
        reportType: 'documentRead', title: '发票识别报告', summary: '成功识别增值税发票，提取关键信息如下。',
        sections: [
          { sectionId: 's1', title: '发票基本信息', type: 'fieldTable', data: { fields: [{ key: '发票代码', value: '031001900311', type: 'text' }, { key: '发票号码', value: '38291056', type: 'text' }, { key: '开票日期', value: '2024-12-15', type: 'text' }, { key: '校验码', value: '72836 49201 8536', type: 'text' }] } },
          { sectionId: 's2', title: '金额信息', type: 'fieldTable', data: { fields: [{ key: '金额合计', value: '¥8,547.01', type: 'amount' }, { key: '税额', value: '¥1,111.11', type: 'amount' }, { key: '价税合计', value: '¥9,658.12', type: 'amount' }] } },
          { sectionId: 's3', title: '购销方信息', type: 'fieldTable', data: { fields: [{ key: '购买方名称', value: '北京科技有限公司', type: 'text' }, { key: '销售方名称', value: '上海贸易有限公司', type: 'text' }] } }
        ],
        warnings: [{ text: '以上识别结果仅供参考，请以原件为准', level: 'medium' }],
        actions: [{ text: '核对发票信息', type: 'verify' }, { text: '导出结构化数据', type: 'submit' }],
        extractedFields: [{ key: '发票代码', value: '031001900311', type: 'text' }, { key: '发票号码', value: '38291056', type: 'text' }, { key: '开票日期', value: '2024-12-15', type: 'text' }, { key: '金额合计', value: '¥8,547.01', type: 'amount' }, { key: '税额', value: '¥1,111.11', type: 'amount' }, { key: '价税合计', value: '¥9,658.12', type: 'amount' }],
        keyFields: [{ key: '价税合计', value: '¥9,658.12', type: 'amount' }],
        uncertainFields: [],
        risks: []
      };
    }
    return {
      reportType: 'documentRead', title: (s.name || '文档') + '识别报告', summary: '成功识别文档内容，提取关键信息如下。',
      sections: [
        { sectionId: 's1', title: '文档基本信息', type: 'fieldTable', data: { fields: [{ key: '文档类型', value: s.name || '文档', type: 'text' }, { key: '识别时间', value: new Date().toLocaleDateString(), type: 'text' }] } },
        { sectionId: 's2', title: '关键内容', type: 'highlightList', data: { items: [{ text: '文档内容已成功识别' }, { text: '关键字段已提取' }] } }
      ],
      warnings: [{ text: '识别结果仅供参考', level: 'medium' }],
      actions: [{ text: '核对信息', type: 'verify' }],
      extractedFields: [{ key: '文档类型', value: s.name || '文档', type: 'text' }],
      keyFields: [],
      uncertainFields: [],
      risks: []
    };
  },

  _mockHealthReport(task) {
    return {
      reportType: 'healthReport', title: '检验报告解读', summary: '共检测23项指标，其中3项异常，请关注标注项。',
      sections: [
        { sectionId: 's1', title: '异常指标', type: 'indicatorTable', data: { items: [{ name: '白细胞', value: '12.5×10⁹/L', ref: '3.5-9.5', direction: '↑' }, { name: '中性粒细胞%', value: '78.3%', ref: '40-75', direction: '↑' }, { name: '血红蛋白', value: '108g/L', ref: '115-150', direction: '↓' }] } },
        { sectionId: 's2', title: '指标解释', type: 'explanationList', data: { items: [{ name: '白细胞', explain: '白细胞升高常见于感染、炎症等' }, { name: '中性粒细胞%', explain: '中性粒细胞升高提示细菌感染可能' }, { name: '血红蛋白', explain: '轻度偏低，可能为轻度贫血' }] } },
        { sectionId: 's3', title: '重点关注', type: 'focusList', data: { items: [{ text: '白细胞和中性粒细胞同时升高，提示可能存在感染' }, { text: '血红蛋白轻度偏低，建议复查并关注铁代谢指标' }] } }
      ],
      warnings: [{ text: '以上解读仅供参考，不构成医疗建议', level: 'high' }, { text: '如有异常请及时就医', level: 'medium' }],
      actions: [{ text: '咨询医生', type: 'consult' }, { text: '复查指标', type: 'verify' }],
      abnormalItems: [{ name: '白细胞', value: '12.5×10⁹/L', ref: '3.5-9.5', direction: '↑' }, { name: '中性粒细胞%', value: '78.3%', ref: '40-75', direction: '↑' }, { name: '血红蛋白', value: '108g/L', ref: '115-150', direction: '↓' }],
      normalItems: [{ name: '血小板', value: '215×10⁹/L', ref: '125-350' }, { name: '红细胞', value: '4.2×10¹²/L', ref: '3.8-5.1' }],
      explanations: [{ name: '白细胞', explain: '白细胞升高常见于感染、炎症等' }, { name: '血红蛋白', explain: '轻度偏低，可能为轻度贫血' }],
      focusPoints: [{ text: '白细胞和中性粒细胞同时升高，提示可能存在感染' }],
      suggestedQuestions: [{ text: '我的白细胞升高是什么原因？' }, { text: '血红蛋白偏低需要补铁吗？' }]
    };
  },

  _mockMedicineReport(task) {
    return {
      reportType: 'medicineReport', title: '药品安全解读报告', summary: '已提取药品关键信息，请特别注意禁忌和不良反应。',
      sections: [
        { sectionId: 's1', title: '药品基本信息', type: 'medicineInfo', data: { medicineName: '阿莫西林胶囊', ingredients: '阿莫西林', indications: '上呼吸道感染、泌尿系统感染、皮肤软组织感染', usage: '口服', dosage: '成人一次0.5g，每6-8小时1次' } },
        { sectionId: 's2', title: '禁忌', type: 'contraindicationList', data: { items: [{ text: '青霉素过敏者禁用' }, { text: '传染性单核细胞增多症患者禁用' }] } },
        { sectionId: 's3', title: '不良反应', type: 'sideEffectList', data: { items: [{ text: '恶心、呕吐、腹泻等胃肠道反应' }, { text: '皮疹、药物热等过敏反应' }, { text: '偶见贫血、血小板减少' }] } },
        { sectionId: 's4', title: '特殊人群', type: 'populationTable', data: { items: [{ group: '孕妇', note: '慎用，需医生评估' }, { group: '哺乳期', note: '暂停哺乳' }, { group: '儿童', note: '需按体重调整剂量' }] } }
      ],
      warnings: [{ text: '使用前请确认无青霉素过敏史', level: 'high' }, { text: '以上信息仅供参考，请遵医嘱用药', level: 'high' }],
      actions: [{ text: '咨询药师', type: 'consult' }, { text: '查看用药提醒', type: 'submit' }],
      medicineName: '阿莫西林胶囊', ingredients: '阿莫西林', indications: '上呼吸道感染、泌尿系统感染、皮肤软组织感染',
      usage: '口服', dosage: '成人一次0.5g，每6-8小时1次',
      contraindications: [{ text: '青霉素过敏者禁用' }, { text: '传染性单核细胞增多症患者禁用' }],
      sideEffects: [{ text: '恶心、呕吐、腹泻等胃肠道反应' }, { text: '皮疹、药物热等过敏反应' }],
      specialGroups: [{ group: '孕妇', note: '慎用，需医生评估' }, { group: '哺乳期', note: '暂停哺乳' }],
      medicationCard: { name: '阿莫西林胶囊', frequency: '每日3次', timing: '饭后', duration: '7-14天' }
    };
  },

  _mockFoodLabelReport(task) {
    return {
      reportType: 'foodLabelReport', title: '食品配料分析报告', summary: '已识别食品配料和营养成分，请关注过敏原和添加剂。',
      sections: [
        { sectionId: 's1', title: '配料表', type: 'ingredientList', data: { items: [{ text: '小麦粉' }, { text: '白砂糖' }, { text: '植物油' }, { text: '全脂奶粉' }, { text: '食品添加剂（碳酸氢钠、大豆磷脂）' }] } },
        { sectionId: 's2', title: '营养成分', type: 'nutritionTable', data: { nutrition: { calories: '2034kJ/100g', sugar: '32g/100g', fat: '21g/100g', sodium: '380mg/100g', protein: '6.5g/100g' } } },
        { sectionId: 's3', title: '过敏原警告', type: 'allergenList', data: { items: [{ text: '含有小麦（麸质）' }, { text: '含有奶粉（乳制品）' }, { text: '含有大豆磷脂（大豆）' }] } }
      ],
      warnings: [{ text: '含有常见过敏原，过敏体质请注意', level: 'high' }, { text: '糖含量较高，糖尿病患者慎用', level: 'medium' }],
      actions: [{ text: '查看替代食品', type: 'verify' }, { text: '添加到饮食记录', type: 'submit' }],
      ingredients: [{ text: '小麦粉' }, { text: '白砂糖' }, { text: '植物油' }, { text: '全脂奶粉' }, { text: '食品添加剂（碳酸氢钠、大豆磷脂）' }],
      nutrition: { calories: '2034kJ/100g', sugar: '32g/100g', fat: '21g/100g', sodium: '380mg/100g', protein: '6.5g/100g' },
      sugarFatSodiumAnalysis: { sugar: '高', fat: '中', sodium: '中' },
      allergenWarnings: [{ text: '含有小麦（麸质）' }, { text: '含有奶粉（乳制品）' }, { text: '含有大豆磷脂（大豆）' }],
      suitableFor: [{ text: '一般成年人' }, { text: '体力劳动者' }],
      notSuitableFor: [{ text: '糖尿病患者' }, { text: '麸质过敏者' }, { text: '乳糖不耐受者' }],
      purchaseAdvice: '建议选择低糖替代品，注意过敏原标识'
    };
  },

  _mockImageRepair(task) {
    return {
      reportType: 'imageRepair', title: '图像修复报告', summary: '已完成图像修复处理，修复前后对比及详情如下。',
      sections: [
        { sectionId: 's1', title: '修复前后对比', type: 'compareView', data: { before: '原图（黑白/模糊）', after: '修复后（彩色/清晰）' } },
        { sectionId: 's2', title: '修复详情', type: 'repairDetail', data: { items: [{ type: '上色', detail: 'AI智能上色，还原真实色彩' }, { type: '去划痕', detail: '去除3处划痕' }, { type: '增强', detail: '分辨率从300×200提升至1200×800' }] } },
        { sectionId: 's3', title: '质量评分', type: 'qualityScore', data: { score: 92, details: '修复质量优秀，色彩还原度高' } }
      ],
      warnings: [{ text: 'AI上色可能与原始色彩有差异', level: 'medium' }],
      actions: [{ text: '下载修复图片', type: 'submit' }, { text: '调整修复参数', type: 'verify' }],
      originalImage: 'original', resultImage: 'result',
      beforeAfter: { before: '原图（黑白/模糊）', after: '修复后（彩色/清晰）' },
      repairTypes: [{ type: '上色', detail: 'AI智能上色' }, { type: '去划痕', detail: '去除3处划痕' }, { type: '增强', detail: '超分辨率增强' }],
      outputResolution: '1200×800',
      nextActions: [{ text: '下载高清图片', type: 'submit' }, { text: '继续修复其他照片', type: 'verify' }]
    };
  },

  _mockSpaceDesign(task) {
    return {
      reportType: 'spaceDesign', title: '空间设计报告', summary: '已分析空间照片并生成装修建议，详情如下。',
      sections: [
        { sectionId: 's1', title: '装修前后对比', type: 'compareView', data: { before: '原始空间', after: '现代简约风格效果图' } },
        { sectionId: 's2', title: '空间问题', type: 'problemList', data: { items: [{ text: '采光不足，建议增加辅助光源' }, { text: '收纳空间有限，建议定制柜体' }] } },
        { sectionId: 's3', title: '推荐配色', type: 'colorPalette', data: { colors: ['#F5F5F0', '#8B7355', '#2C3E50', '#E8D5B7'] } },
        { sectionId: 's4', title: '家具推荐', type: 'furnitureGrid', data: { items: [{ name: '布艺沙发', price: '¥3,500-5,000' }, { name: '实木茶几', price: '¥1,200-2,000' }, { name: '落地灯', price: '¥500-800' }] } },
        { sectionId: 's5', title: '预算估算', type: 'budgetCard', data: { range: '¥15,000-35,000', note: '含硬装+软装，不含家电' } }
      ],
      warnings: [{ text: '效果图仅供参考，实际效果以施工为准', level: 'medium' }],
      actions: [{ text: '查看更多风格', type: 'verify' }, { text: '生成施工清单', type: 'submit' }],
      originalImage: 'original', generatedImages: [{ id: 'gen1', style: '现代简约' }, { id: 'gen2', style: '北欧风格' }],
      style: '现代简约', spaceProblems: [{ text: '采光不足' }, { text: '收纳空间有限' }],
      colorPlan: ['#F5F5F0', '#8B7355', '#2C3E50', '#E8D5B7'],
      furnitureAdvice: [{ name: '布艺沙发', price: '¥3,500-5,000' }, { name: '实木茶几', price: '¥1,200-2,000' }],
      softDecorationAdvice: [{ text: '建议使用暖色调窗帘' }, { text: '添加绿植增加生机' }],
      budgetRange: '¥15,000-35,000',
      nextActions: [{ text: '查看更多风格', type: 'verify' }, { text: '生成施工清单', type: 'submit' }]
    };
  },

  _mockEcommerceReport(task) {
    return {
      reportType: 'ecommerceReport', title: '商品图优化报告', summary: '已完成商品图优化分析，提取卖点并提供优化建议。',
      sections: [
        { sectionId: 's1', title: '优化前后对比', type: 'compareView', data: { before: '原始商品图', after: '优化后商品图' } },
        { sectionId: 's2', title: '核心卖点', type: 'sellingPointList', data: { items: [{ text: '天然材质，亲肤舒适' }, { text: '简约设计，百搭时尚' }, { text: '精细做工，品质保证' }] } },
        { sectionId: 's3', title: '主图建议', type: 'adviceList', data: { items: [{ text: '增加产品细节特写' }, { text: '使用纯白背景提升专业感' }, { text: '添加尺寸对比参照物' }] } },
        { sectionId: 's4', title: '平台适配', type: 'platformTable', data: { items: [{ platform: '淘宝/天猫', size: '800×800', note: '主图正方形' }, { platform: '京东', size: '800×800', note: '支持放大镜' }, { platform: '拼多多', size: '750×750', note: '注意压缩质量' }] } }
      ],
      warnings: [{ text: '商品图需符合平台规范', level: 'medium' }],
      actions: [{ text: '下载优化图片', type: 'submit' }, { text: '批量处理', type: 'verify' }],
      originalImage: 'original', optimizedImage: 'optimized',
      sellingPoints: [{ text: '天然材质，亲肤舒适' }, { text: '简约设计，百搭时尚' }, { text: '精细做工，品质保证' }],
      mainImageAdvice: [{ text: '增加产品细节特写' }, { text: '使用纯白背景' }],
      backgroundAdvice: [{ text: '建议使用纯白背景' }, { text: '可添加场景化背景' }],
      platformAdvice: [{ platform: '淘宝/天猫', size: '800×800', note: '主图正方形' }],
      exportOptions: [{ format: 'PNG', size: '800×800' }, { format: 'JPG', size: '1200×1200' }]
    };
  },

  _mockLifeIdentify(task) {
    const s = sceneRegistry[task.sceneId] || {};
    if (task.sceneId === 'plantIdentify') {
      return {
        reportType: 'lifeIdentify', title: '植物识别报告', summary: '识别结果：月季花（置信度92%），请查看详情。',
        sections: [
          { sectionId: 's1', title: '识别结果', type: 'identifyResult', data: { possibleNames: [{ name: '月季花', confidence: 92, latinName: 'Rosa chinensis' }, { name: '玫瑰', confidence: 65, latinName: 'Rosa rugosa' }] } },
          { sectionId: 's2', title: '可见特征', type: 'featureList', data: { items: [{ text: '花瓣层叠，颜色粉红' }, { text: '叶片锯齿状，复叶互生' }, { text: '茎有刺' }] } },
          { sectionId: 's3', title: '相似植物', type: 'similarList', data: { items: [{ name: '玫瑰', confidence: 65, diff: '玫瑰叶片有皱纹，月季叶片光滑' }] } },
          { sectionId: 's4', title: '养护建议', type: 'adviceList', data: { items: [{ text: '喜阳光，每天6小时以上' }, { text: '保持土壤湿润但不积水' }, { text: '定期修剪促进开花' }] } }
        ],
        warnings: [{ text: '识别结果仅供参考', level: 'low' }],
        actions: [{ text: '查看养护指南', type: 'verify' }, { text: '分享识别结果', type: 'submit' }],
        possibleNames: [{ name: '月季花', confidence: 92, latinName: 'Rosa chinensis' }, { name: '玫瑰', confidence: 65, latinName: 'Rosa rugosa' }],
        confidence: 92, visibleFeatures: [{ text: '花瓣层叠，颜色粉红' }, { text: '叶片锯齿状' }],
        similarObjects: [{ name: '玫瑰', confidence: 65, diff: '玫瑰叶片有皱纹' }],
        relatedKnowledge: '月季花被称为"花中皇后"，四季开花，是中国十大名花之一。',
        careOrUsageAdvice: [{ text: '喜阳光，每天6小时以上' }, { text: '保持土壤湿润' }]
      };
    }
    return {
      reportType: 'lifeIdentify', title: (s.name || '物品') + '识别报告', summary: '识别结果已生成，置信度85%。',
      sections: [
        { sectionId: 's1', title: '识别结果', type: 'identifyResult', data: { possibleNames: [{ name: s.name || '未知', confidence: 85, latinName: '' }] } },
        { sectionId: 's2', title: '可见特征', type: 'featureList', data: { items: [{ text: '识别到主体对象' }, { text: '特征已提取' }] } }
      ],
      warnings: [{ text: '识别结果仅供参考', level: 'low' }],
      actions: [{ text: '查看详情', type: 'verify' }],
      possibleNames: [{ name: s.name || '未知', confidence: 85, latinName: '' }],
      confidence: 85, visibleFeatures: [{ text: '识别到主体对象' }],
      similarObjects: [], relatedKnowledge: '', careOrUsageAdvice: []
    };
  },

  _mockGeneralAnalysis(task) {
    return {
      reportType: 'generalAnalysis', title: '通用图片分析报告', summary: 'AI已对图片进行综合分析，请查看结果。',
      sections: [
        { sectionId: 's1', title: '图片描述', type: 'descriptionCard', data: { description: '图片包含一个主体对象，可能是室内场景或物品照片。' } },
        { sectionId: 's2', title: '可能场景', type: 'sceneList', data: { items: [{ name: '室内空间', confidence: 0.55, reportType: 'spaceDesign' }, { name: '商品图', confidence: 0.40, reportType: 'ecommerceReport' }] } },
        { sectionId: 's3', title: '候选分类', type: 'categoryTags', data: { items: [{ text: '室内' }, { text: '物品' }, { text: '生活' }] } },
        { sectionId: 's4', title: '建议下一步', type: 'infoList', data: { items: [{ text: '选择"装修效果图"获取更专业的空间分析', sceneId: 'renovationEffect' }, { text: '选择"商品图优化"获取电商优化建议', sceneId: 'productImageOpt' }] } }
      ],
      warnings: [{ text: 'AI无法高置信度识别内容类型', level: 'medium' }],
      actions: [{ text: '选择专业场景重新分析', type: 'verify' }],
      imageDescription: '图片包含一个主体对象，可能是室内场景或物品照片。',
      possibleScenes: [{ name: '室内空间', confidence: 0.55, reportType: 'spaceDesign' }, { name: '商品图', confidence: 0.40, reportType: 'ecommerceReport' }],
      candidateCategories: [{ text: '室内' }, { text: '物品' }, { text: '生活' }],
      visibleInformation: [{ text: '检测到主体对象' }, { text: '检测到背景区域' }],
      uncertaintyReason: '图片内容不够明确，无法高置信度归类',
      suggestedNextActions: [{ text: '选择装修效果图场景', sceneId: 'renovationEffect' }, { text: '选择商品图优化场景', sceneId: 'productImageOpt' }]
    };
  }
};

module.exports = { mockAIService };
