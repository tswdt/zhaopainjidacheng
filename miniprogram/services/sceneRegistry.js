const sceneRegistry = {
  oldPhotoRepair: { sceneId: 'oldPhotoRepair', name: '老照片修复', category: 'imageRepair', inputTypes: ['image'], reportType: 'imageRepair', outputSchemaKey: 'imageRepairOutput', extractorPromptKey: 'oldPhotoRepair', costCredits: 25, description: '黑白上色、去划痕、模糊增强', iconBg: '#FEF3C7', features: ['黑白照片自动上色，还原真实色彩', '智能去除划痕、折痕和污渍', '模糊增强至高清分辨率', '输出可打印的高清图片 + 修复报告'] },
  bwColorize: { sceneId: 'bwColorize', name: '黑白照上色', category: 'imageRepair', inputTypes: ['image'], reportType: 'imageRepair', outputSchemaKey: 'imageRepairOutput', extractorPromptKey: 'bwColorize', costCredits: 15, description: '黑白照片智能上色', iconBg: '#FDF4FF', features: ['AI智能上色，还原真实色彩', '支持人物、风景、建筑', '可调整色彩风格', '输出高清彩色照片'] },
  enhanceBlur: { sceneId: 'enhanceBlur', name: '模糊增强', category: 'imageRepair', inputTypes: ['image'], reportType: 'imageRepair', outputSchemaKey: 'imageRepairOutput', extractorPromptKey: 'enhanceBlur', costCredits: 10, description: '模糊照片清晰化增强', iconBg: '#ECFDF5', features: ['AI超分辨率增强', '去除模糊和噪点', '支持人脸增强', '输出高清图片'] },
  idPhotoOpt: { sceneId: 'idPhotoOpt', name: '证件照优化', category: 'imageRepair', inputTypes: ['image'], reportType: 'imageRepair', outputSchemaKey: 'imageRepairOutput', extractorPromptKey: 'idPhotoOpt', costCredits: 8, description: '证件照换底色、精修、裁剪', iconBg: '#DBEAFE', features: ['一键换底色（蓝/白/红）', '智能美颜和精修', '自动裁剪标准尺寸', '输出高清证件照'] },
  invoiceRecognition: { sceneId: 'invoiceRecognition', name: '发票识别', category: 'documentRead', inputTypes: ['image', 'document'], reportType: 'documentRead', outputSchemaKey: 'documentReadOutput', extractorPromptKey: 'invoiceRecognition', costCredits: 3, description: '增值税发票、普通发票自动识别', iconBg: '#DBEAFE', features: ['自动识别发票类型和编号', '提取金额、税额、销售方信息', '校验发票真伪标识', '输出结构化数据 + PDF报告'] },
  contractRecognition: { sceneId: 'contractRecognition', name: '合同识别', category: 'documentRead', inputTypes: ['image', 'document'], reportType: 'documentRead', outputSchemaKey: 'documentReadOutput', extractorPromptKey: 'contractRecognition', costCredits: 8, description: '合同关键条款自动提取', iconBg: '#F3E8FF', features: ['自动提取合同关键条款', '识别甲乙方信息和金额', '标注风险条款和注意事项', '输出结构化合同摘要'] },
  medicalReport: { sceneId: 'medicalReport', name: '化验单解读', category: 'healthReport', inputTypes: ['image', 'document'], reportType: 'healthReport', outputSchemaKey: 'healthReportOutput', extractorPromptKey: 'medicalReport', costCredits: 5, description: '血常规、尿常规、生化报告解读', iconBg: '#DCFCE7', features: ['自动识别检验项目和数值', '标注异常指标及参考范围', '提供健康风险提示', '输出可分享的健康解读报告'] },
  drugInstruction: { sceneId: 'drugInstruction', name: '药品说明书', category: 'medicineReport', inputTypes: ['image', 'document'], reportType: 'medicineReport', outputSchemaKey: 'medicineReportOutput', extractorPromptKey: 'drugInstruction', costCredits: 5, description: '药品说明书关键信息提取', iconBg: '#FCE7F3', features: ['提取适应症、用法用量', '识别禁忌和不良反应', '标注注意事项和相互作用', '输出药品安全摘要报告'] },
  foodLabel: { sceneId: 'foodLabel', name: '食品配料表', category: 'foodLabelReport', inputTypes: ['image'], reportType: 'foodLabelReport', outputSchemaKey: 'foodLabelReportOutput', extractorPromptKey: 'foodLabel', costCredits: 3, description: '食品配料表和营养成分识别', iconBg: '#FFF7ED', features: ['识别配料表和添加剂', '标注过敏原和风险成分', '营养成分分析', '输出食品安全摘要'] },
  renovationEffect: { sceneId: 'renovationEffect', name: '装修效果图', category: 'spaceDesign', inputTypes: ['image'], reportType: 'spaceDesign', outputSchemaKey: 'spaceDesignOutput', extractorPromptKey: 'renovationEffect', costCredits: 30, description: '上传空间照片，AI生成装修效果图', iconBg: '#E0E7FF', features: ['AI生成多种风格装修效果图', '空间问题分析与优化建议', '配色方案和家具推荐', '预算区间估算'] },
  floorPlan: { sceneId: 'floorPlan', name: '户型效果图', category: 'spaceDesign', inputTypes: ['image'], reportType: 'spaceDesign', outputSchemaKey: 'spaceDesignOutput', extractorPromptKey: 'floorPlan', costCredits: 25, description: '户型图生成3D效果图', iconBg: '#E0F2FE', features: ['2D户型图转3D效果图', '多种装修风格预览', '空间利用率分析', '家具布局建议'] },
  productImageOpt: { sceneId: 'productImageOpt', name: '商品图优化', category: 'ecommerceReport', inputTypes: ['image'], reportType: 'ecommerceReport', outputSchemaKey: 'ecommerceReportOutput', extractorPromptKey: 'productImageOpt', costCredits: 15, description: '商品主图精修、换背景、调色', iconBg: '#FFF7ED', features: ['智能去除/替换背景', '产品色彩校正和精修', '生成多尺寸商品主图', '输出电商标准格式图片'] },
  plantIdentify: { sceneId: 'plantIdentify', name: '花草识别', category: 'lifeIdentify', inputTypes: ['image'], reportType: 'lifeIdentify', outputSchemaKey: 'lifeIdentifyOutput', extractorPromptKey: 'plantIdentify', costCredits: 2, description: '拍照识别花草植物', iconBg: '#F0FDF4', features: ['识别花卉和植物名称', '提供养护建议', '识别相似品种', '输出识别报告'] },
  fruitVegIdentify: { sceneId: 'fruitVegIdentify', name: '蔬菜水果识别', category: 'lifeIdentify', inputTypes: ['image'], reportType: 'lifeIdentify', outputSchemaKey: 'lifeIdentifyOutput', extractorPromptKey: 'fruitVegIdentify', costCredits: 2, description: '拍照识别蔬菜水果', iconBg: '#ECFDF5', features: ['识别蔬菜水果品种', '提供营养和食用建议', '识别相似品种', '输出识别报告'] },
  animalIdentify: { sceneId: 'animalIdentify', name: '动物识别', category: 'lifeIdentify', inputTypes: ['image'], reportType: 'lifeIdentify', outputSchemaKey: 'lifeIdentifyOutput', extractorPromptKey: 'animalIdentify', costCredits: 2, description: '拍照识别动物品种', iconBg: '#FEF3C7', features: ['识别动物品种和名称', '提供相关百科知识', '识别相似物种', '输出识别报告'] },
  generalAnalysis: { sceneId: 'generalAnalysis', name: '通用图片分析', category: 'generalAnalysis', inputTypes: ['image'], reportType: 'generalAnalysis', outputSchemaKey: 'generalAnalysisOutput', extractorPromptKey: 'generalAnalysis', costCredits: 2, description: '不确定图片类型？让AI帮你分析', iconBg: '#F1F5F9', features: ['AI自动分析图片内容', '提供可能场景分类', '建议更合适的处理方式', '输出通用分析报告'] },
  itemManagement: { sceneId: 'itemManagement', name: '物品管理', category: 'lifeIdentify', inputTypes: ['image'], reportType: 'documentRead', outputSchemaKey: 'documentReadOutput', extractorPromptKey: 'itemManagement', costCredits: 0, description: '拍照建档、保修提醒、资产管理', iconBg: '#F0FDFA', features: ['拍照自动识别物品信息', '记录购买日期和保修期', '到期自动提醒', '免费功能，帮助留存'] }
};

const categoryMap = {
  documentRead: { name: '文档读图' },
  healthReport: { name: '健康资料' },
  medicineReport: { name: '药品解读' },
  foodLabelReport: { name: '食品分析' },
  imageRepair: { name: '图像修复' },
  spaceDesign: { name: '空间设计' },
  ecommerceReport: { name: '电商商品' },
  lifeIdentify: { name: '生活识别' },
  generalAnalysis: { name: '通用分析' }
};

const categoryOrder = ['documentRead', 'healthReport', 'medicineReport', 'foodLabelReport', 'imageRepair', 'spaceDesign', 'ecommerceReport', 'lifeIdentify', 'generalAnalysis'];

module.exports = { sceneRegistry, categoryMap, categoryOrder };
