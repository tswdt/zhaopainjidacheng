const sceneRegistry={
  oldPhotoRepair:{sceneId:'oldPhotoRepair',name:'老照片修复',category:'imageRepair',inputTypes:['image'],reportType:'imageRepair',outputSchemaKey:'imageRepairOutput',extractorPromptKey:'oldPhotoRepair',costCredits:25,icon:'🖼️',description:'黑白上色、去划痕、模糊增强',iconBg:'#FEF3C7',features:['黑白照片自动上色，还原真实色彩','智能去除划痕、折痕和污渍','模糊增强至高清分辨率','输出可打印的高清图片 + 修复报告']},
  bwColorize:{sceneId:'bwColorize',name:'黑白照上色',category:'imageRepair',inputTypes:['image'],reportType:'imageRepair',outputSchemaKey:'imageRepairOutput',extractorPromptKey:'bwColorize',costCredits:15,icon:'🎨',description:'黑白照片智能上色',iconBg:'#FDF4FF',features:['AI智能上色，还原真实色彩','支持人物、风景、建筑','可调整色彩风格','输出高清彩色照片']},
  enhanceBlur:{sceneId:'enhanceBlur',name:'模糊增强',category:'imageRepair',inputTypes:['image'],reportType:'imageRepair',outputSchemaKey:'imageRepairOutput',extractorPromptKey:'enhanceBlur',costCredits:10,icon:'🔍',description:'模糊照片清晰化增强',iconBg:'#ECFDF5',features:['AI超分辨率增强','去除模糊和噪点','支持人脸增强','输出高清图片']},
  idPhotoOpt:{sceneId:'idPhotoOpt',name:'证件照优化',category:'imageRepair',inputTypes:['image'],reportType:'imageRepair',outputSchemaKey:'imageRepairOutput',extractorPromptKey:'idPhotoOpt',costCredits:8,icon:'🪪',description:'证件照换底色、精修、裁剪',iconBg:'#DBEAFE',features:['一键换底色（蓝/白/红）','智能美颜和精修','自动裁剪标准尺寸','输出高清证件照']},
  invoiceRecognition:{sceneId:'invoiceRecognition',name:'发票识别',category:'documentRead',inputTypes:['image','document'],reportType:'documentRead',outputSchemaKey:'documentReadOutput',extractorPromptKey:'invoiceRecognition',costCredits:3,icon:'📋',description:'增值税发票、普通发票自动识别',iconBg:'#DBEAFE',features:['自动识别发票类型和编号','提取金额、税额、销售方信息','校验发票真伪标识','输出结构化数据 + PDF报告']},
  contractRecognition:{sceneId:'contractRecognition',name:'合同识别',category:'documentRead',inputTypes:['image','document'],reportType:'documentRead',outputSchemaKey:'documentReadOutput',extractorPromptKey:'contractRecognition',costCredits:8,icon:'📝',description:'合同关键条款自动提取',iconBg:'#F3E8FF',features:['自动提取合同关键条款','识别甲乙方信息和金额','标注风险条款和注意事项','输出结构化合同摘要']},
  medicalReport:{sceneId:'medicalReport',name:'化验单解读',category:'healthReport',inputTypes:['image','document'],reportType:'healthReport',outputSchemaKey:'healthReportOutput',extractorPromptKey:'medicalReport',costCredits:5,icon:'🔬',description:'血常规、尿常规、生化报告解读',iconBg:'#DCFCE7',features:['自动识别检验项目和数值','标注异常指标及参考范围','提供健康风险提示','输出可分享的健康解读报告']},
  drugInstruction:{sceneId:'drugInstruction',name:'药品说明书',category:'medicineReport',inputTypes:['image','document'],reportType:'medicineReport',outputSchemaKey:'medicineReportOutput',extractorPromptKey:'drugInstruction',costCredits:5,icon:'💊',description:'药品说明书关键信息提取',iconBg:'#FCE7F3',features:['提取适应症、用法用量','识别禁忌和不良反应','标注注意事项和相互作用','输出药品安全摘要报告']},
  foodLabel:{sceneId:'foodLabel',name:'食品配料表',category:'foodLabelReport',inputTypes:['image'],reportType:'foodLabelReport',outputSchemaKey:'foodLabelReportOutput',extractorPromptKey:'foodLabel',costCredits:3,icon:'🏷️',description:'食品配料表和营养成分识别',iconBg:'#FFF7ED',features:['识别配料表和添加剂','标注过敏原和风险成分','营养成分分析','输出食品安全摘要']},
  renovationEffect:{sceneId:'renovationEffect',name:'装修效果图',category:'spaceDesign',inputTypes:['image'],reportType:'spaceDesign',outputSchemaKey:'spaceDesignOutput',extractorPromptKey:'renovationEffect',costCredits:30,icon:'🏠',description:'上传空间照片，AI生成装修效果图',iconBg:'#E0E7FF',features:['AI生成多种风格装修效果图','空间问题分析与优化建议','配色方案和家具推荐','预算区间估算']},
  floorPlan:{sceneId:'floorPlan',name:'户型效果图',category:'spaceDesign',inputTypes:['image'],reportType:'spaceDesign',outputSchemaKey:'spaceDesignOutput',extractorPromptKey:'floorPlan',costCredits:25,icon:'📐',description:'户型图生成3D效果图',iconBg:'#E0F2FE',features:['2D户型图转3D效果图','多种装修风格预览','空间利用率分析','家具布局建议']},
  productImageOpt:{sceneId:'productImageOpt',name:'商品图优化',category:'ecommerceReport',inputTypes:['image'],reportType:'ecommerceReport',outputSchemaKey:'ecommerceReportOutput',extractorPromptKey:'productImageOpt',costCredits:15,icon:'🛒',description:'商品主图精修、换背景、调色',iconBg:'#FFF7ED',features:['智能去除/替换背景','产品色彩校正和精修','生成多尺寸商品主图','输出电商标准格式图片']},
  plantIdentify:{sceneId:'plantIdentify',name:'花草识别',category:'lifeIdentify',inputTypes:['image'],reportType:'lifeIdentify',outputSchemaKey:'lifeIdentifyOutput',extractorPromptKey:'plantIdentify',costCredits:2,icon:'🌸',description:'拍照识别花草植物',iconBg:'#F0FDF4',features:['识别花卉和植物名称','提供养护建议','识别相似品种','输出识别报告']},
  fruitVegIdentify:{sceneId:'fruitVegIdentify',name:'蔬菜水果识别',category:'lifeIdentify',inputTypes:['image'],reportType:'lifeIdentify',outputSchemaKey:'lifeIdentifyOutput',extractorPromptKey:'fruitVegIdentify',costCredits:2,icon:'🥬',description:'拍照识别蔬菜水果',iconBg:'#ECFDF5',features:['识别蔬菜水果品种','提供营养和食用建议','识别相似品种','输出识别报告']},
  animalIdentify:{sceneId:'animalIdentify',name:'动物识别',category:'lifeIdentify',inputTypes:['image'],reportType:'lifeIdentify',outputSchemaKey:'lifeIdentifyOutput',extractorPromptKey:'animalIdentify',costCredits:2,icon:'🐾',description:'拍照识别动物品种',iconBg:'#FEF3C7',features:['识别动物品种和名称','提供相关百科知识','识别相似物种','输出识别报告']},
  generalAnalysis:{sceneId:'generalAnalysis',name:'通用图片分析',category:'generalAnalysis',inputTypes:['image'],reportType:'generalAnalysis',outputSchemaKey:'generalAnalysisOutput',extractorPromptKey:'generalAnalysis',costCredits:2,icon:'🔎',description:'不确定图片类型？让AI帮你分析',iconBg:'#F1F5F9',features:['AI自动分析图片内容','提供可能场景分类','建议更合适的处理方式','输出通用分析报告']},
  itemManagement:{sceneId:'itemManagement',name:'管理物品',category:'lifeIdentify',inputTypes:['image'],reportType:'documentRead',outputSchemaKey:'documentReadOutput',extractorPromptKey:'itemManagement',costCredits:0,icon:'📦',description:'拍照建档、保修提醒、资产管理',iconBg:'#F0FDFA',features:['拍照自动识别物品信息','记录购买日期和保修期','到期自动提醒','免费功能，帮助留存']}
};

const categoryMap={
  documentRead:{name:'文档读图',icon:'📄'},
  healthReport:{name:'健康资料',icon:'🏥'},
  medicineReport:{name:'药品解读',icon:'💊'},
  foodLabelReport:{name:'食品分析',icon:'🏷️'},
  imageRepair:{name:'图像修复',icon:'🖼️'},
  spaceDesign:{name:'空间设计',icon:'🏠'},
  ecommerceReport:{name:'电商商品',icon:'🛒'},
  lifeIdentify:{name:'生活识别',icon:'🔍'},
  generalAnalysis:{name:'通用分析',icon:'🔎'}
};

const taskManager={
  tasks:[],_idCounter:1000,
  createTask(sceneId){const s=sceneRegistry[sceneId];if(!s)return null;const t={taskId:'task_'+(++this._idCounter),sceneId,reportType:s.reportType,inputFiles:[],status:'created',progress:0,costCredits:s.costCredits,createdAt:new Date().toISOString(),result:null,reportId:null,routeResult:null,detectedSceneId:null,selectedSceneId:sceneId,confidence:0,needUserConfirm:false,outputSchemaKey:s.outputSchemaKey,extractorPromptKey:s.extractorPromptKey,routeMode:null,userRouteChoice:null};this.tasks.push(t);return t},
  updateTaskStatus(id,s){const t=this.tasks.find(x=>x.taskId===id);if(t)t.status=s;return t},
  updateTaskProgress(id,p){const t=this.tasks.find(x=>x.taskId===id);if(t)t.progress=p;return t},
  setTaskResult(id,r){const t=this.tasks.find(x=>x.taskId===id);if(t){t.result=r;t.status='done';t.progress=100}return t},
  setTaskFailed(id,e){const t=this.tasks.find(x=>x.taskId===id);if(t){t.status='failed';t.result={error:e}}return t},
  getTask(id){return this.tasks.find(x=>x.taskId===id)}
};

const reportManager={
  reports:[],_idCounter:5000,
  createReport(task){
    const s=sceneRegistry[task.sceneId];
    const resultData=task.result||{};
    const validation=schemaValidator.validate(task.reportType,resultData);
    const r={
      reportId:'rpt_'+(++this._idCounter),
      taskId:task.taskId,
      sceneId:task.sceneId,
      reportType:task.reportType,
      title:resultData.title||(s?s.name+'报告':'AI视觉报告'),
      summary:resultData.summary||'',
      inputFiles:task.inputFiles||[],
      resultData:resultData,
      result:resultData,
      createdAt:task.createdAt,
      costCredits:task.costCredits,
      sceneName:s?s.name:'',
      icon:s?s.icon:'📄',
      iconBg:s?s.iconBg:'#F1F3F5',
      status:task.status,
      outputSchemaKey:task.outputSchemaKey,
      extractorPromptKey:task.extractorPromptKey,
      validationValid:validation.valid,
      validationErrors:validation.errors||[]
    };
    this.reports.unshift(r);
    task.reportId=r.reportId;
    return r;
  },
  getReport(id){return this.reports.find(x=>x.reportId===id)},
  getFilteredReports(f){if(f==='all')return this.reports;return this.reports.filter(x=>x.status===f)}
};

const mockAIService={
  _delay(ms){return new Promise(r=>setTimeout(r,ms))},
  async processTask(taskId){
    const task=taskManager.getTask(taskId);if(!task)return null;
    taskManager.updateTaskStatus(taskId,'processing');
    const steps=['上传文件中...','AI分析图片内容...','识别关键信息...','生成结构化结果...','生成报告...'];
    for(let i=0;i<steps.length;i++){
      taskManager.updateTaskProgress(taskId,(i+1)*20);
      if(typeof updateProcessingUI==='function')updateProcessingUI(taskId,steps[i]);
      await this._delay(500+Math.random()*400);
    }
    const result=this._generateMockResult(task);
    taskManager.setTaskResult(taskId,result);
    const report=reportManager.createReport(task);
    return{result,report};
  },
  _generateMockResult(task){
    switch(task.reportType){
      case 'documentRead':return this._mockDocumentRead(task);
      case 'healthReport':return this._mockHealthReport(task);
      case 'medicineReport':return this._mockMedicineReport(task);
      case 'foodLabelReport':return this._mockFoodLabelReport(task);
      case 'imageRepair':return this._mockImageRepair(task);
      case 'spaceDesign':return this._mockSpaceDesign(task);
      case 'ecommerceReport':return this._mockEcommerceReport(task);
      case 'lifeIdentify':return this._mockLifeIdentify(task);
      case 'generalAnalysis':return this._mockGeneralAnalysis(task);
      default:return this._mockDocumentRead(task);
    }
  },
  _mockDocumentRead(task){
    const scene=sceneRegistry[task.sceneId];
    const sceneData={
      invoiceRecognition:{
        summary:'识别到一张增值税普通发票，金额合计 ¥1,280.00，销售方为北京科技有限公司。',
        extractedFields:[{key:'发票类型',value:'增值税普通发票'},{key:'发票代码',value:'011001900311'},{key:'发票号码',value:'38472016'},{key:'开票日期',value:'2025-03-15'},{key:'金额',value:'¥1,280.00',type:'gold'},{key:'税额',value:'¥166.40'},{key:'价税合计',value:'¥1,446.40',type:'gold'},{key:'销售方',value:'北京科技有限公司'},{key:'购买方',value:'个人'}],
        keyFields:[{key:'发票真伪',value:'未校验',type:'warn'},{key:'报销期限',value:'2026-03-15前',type:'green'}],
        uncertainFields:[{key:'购买方地址',value:'部分模糊',reason:'图片分辨率不足'}]
      },
      contractRecognition:{
        summary:'识别到一份房屋租赁合同，租期12个月，月租金¥5,500，押二付一。发现2处风险条款。',
        extractedFields:[{key:'合同类型',value:'房屋租赁合同'},{key:'甲方',value:'张某'},{key:'乙方',value:'李某'},{key:'租赁期限',value:'2025-06-01 至 2026-05-31'},{key:'月租金',value:'¥5,500',type:'gold'},{key:'付款方式',value:'押二付一'},{key:'押金',value:'¥11,000'}],
        keyFields:[{key:'违约金',value:'提前解约赔2个月租金',type:'warn'},{key:'维修条款',value:'表述模糊，需明确',type:'warn'}],
        uncertainFields:[{key:'续租条款',value:'未明确约定',reason:'合同中未找到续租相关条款'}]
      },
      itemManagement:{
        summary:'识别到一台戴森吹风机，型号HD15，购买价格约¥3,490，保修期2年。',
        extractedFields:[{key:'物品名称',value:'戴森吹风机'},{key:'型号',value:'HD15'},{key:'品牌',value:'Dyson'},{key:'预估价格',value:'¥3,490',type:'gold'},{key:'保修期',value:'2年'},{key:'类别',value:'个人护理电器'}],
        keyFields:[{key:'保修状态',value:'需补充购买日期',type:'gold'}],
        uncertainFields:[]
      }
    };
    const data=sceneData[task.sceneId]||sceneData.invoiceRecognition;
    return{
      reportType:'documentRead',
      title:(scene?scene.name:'文档识别')+'报告',
      summary:data.summary,
      sections:[
        {sectionId:'extracted',title:'识别结果',type:'fieldTable',data:data.extractedFields},
        {sectionId:'keyFields',title:'重点字段',type:'highlightList',data:data.keyFields},
        {sectionId:'uncertain',title:'不确定字段',type:'riskList',data:data.uncertainFields}
      ],
      warnings:[{text:'发票真伪未校验，建议通过税务系统验证',level:'medium'},{text:'开票日期距今已超过30天，请确认是否仍在报销期内',level:'low'}],
      actions:[{text:'建议通过国家税务总局发票查验平台验证真伪',type:'verify'},{text:'保存电子版备份，避免纸质发票丢失',type:'backup'},{text:'如需报销，请尽快提交至财务部门',type:'submit'}],
      extractedFields:data.extractedFields,
      keyFields:data.keyFields,
      uncertainFields:data.uncertainFields
    };
  },
  _mockHealthReport(task){
    const scene=sceneRegistry[task.sceneId];
    return{
      reportType:'healthReport',
      title:(scene?scene.name:'化验单解读')+'报告',
      summary:'识别到血常规检验报告，共检测18项指标，其中2项异常：白细胞偏高、中性粒细胞偏高，提示可能存在感染。',
      sections:[
        {sectionId:'abnormal',title:'异常项',type:'indicatorTable',data:[{name:'白细胞',value:'12.5×10⁹/L',ref:'4-10×10⁹/L',direction:'↑'},{name:'中性粒细胞',value:'78%',ref:'50-70%',direction:'↑'}]},
        {sectionId:'normal',title:'正常项',type:'indicatorTable',data:[{name:'血红蛋白',value:'142g/L',ref:'120-160g/L'},{name:'血小板',value:'218×10⁹/L',ref:'100-300×10⁹/L'},{name:'红细胞',value:'4.8×10¹²/L',ref:'3.5-5.5×10¹²/L'},{name:'淋巴细胞',value:'22%',ref:'20-40%'}]},
        {sectionId:'explanations',title:'指标解释',type:'explanationList',data:[{name:'白细胞',explain:'白细胞升高常见于细菌感染、炎症或应激反应'},{name:'中性粒细胞',explain:'中性粒细胞升高多提示急性细菌感染'}]},
        {sectionId:'focusPoints',title:'重点关注',type:'focusList',data:[{text:'白细胞和中性粒细胞同时升高，高度提示细菌感染'},{text:'建议结合C反应蛋白等指标综合判断'}]}
      ],
      abnormalItems:[{name:'白细胞',value:'12.5×10⁹/L',ref:'4-10×10⁹/L',direction:'↑'},{name:'中性粒细胞',value:'78%',ref:'50-70%',direction:'↑'}],
      normalItems:[{name:'血红蛋白',value:'142g/L',ref:'120-160g/L'},{name:'血小板',value:'218×10⁹/L',ref:'100-300×10⁹/L'},{name:'红细胞',value:'4.8×10¹²/L',ref:'3.5-5.5×10¹²/L'},{name:'淋巴细胞',value:'22%',ref:'20-40%'}],
      explanations:[{name:'白细胞',explain:'白细胞升高常见于细菌感染、炎症或应激反应'},{name:'中性粒细胞',explain:'中性粒细胞升高多提示急性细菌感染'}],
      focusPoints:[{text:'白细胞和中性粒细胞同时升高，高度提示细菌感染'},{text:'建议结合C反应蛋白等指标综合判断'}],
      suggestedQuestions:[{text:'白细胞升高是否需要抗生素治疗？'},{text:'需要做哪些进一步检查？'}],
      warnings:[{text:'以上解读仅供参考，不构成医疗建议',level:'high'},{text:'具体诊断请以医生意见为准',level:'high'},{text:'单次检查结果可能受多种因素影响',level:'medium'}],
      actions:[{text:'建议携带报告前往医院复诊',type:'consult'},{text:'关注是否有发热、咽痛等症状',type:'verify'},{text:'保持充足休息和水分摄入',type:'submit'},{text:'遵医嘱进行进一步检查',type:'consult'}]
    };
  },
  _mockMedicineReport(task){
    const scene=sceneRegistry[task.sceneId];
    return{
      reportType:'medicineReport',
      title:(scene?scene.name:'药品说明书')+'报告',
      summary:'识别到阿莫西林胶囊说明书，关键信息：适应症为敏感菌所致感染，用法为成人一次0.5g、每6-8小时1次，需注意青霉素过敏者禁用。',
      sections:[
        {sectionId:'medicineInfo',title:'药品信息',type:'medicineInfo',data:{medicineName:'阿莫西林胶囊',ingredients:'阿莫西林三水合物',indications:'敏感菌所致各种感染（上呼吸道感染、泌尿系统感染、皮肤软组织感染等）',usage:'口服',dosage:'成人一次0.5g，每6-8小时1次，一日剂量不超过4g'}},
        {sectionId:'contraindications',title:'禁忌',type:'contraindicationList',data:[{text:'青霉素过敏者禁用'},{text:'传染性单核细胞增多症患者禁用'}]},
        {sectionId:'sideEffects',title:'不良反应',type:'sideEffectList',data:[{text:'恶心、呕吐、腹泻等胃肠道反应'},{text:'皮疹、荨麻疹等过敏反应'},{text:'少数可见肝功能异常'}]},
        {sectionId:'specialGroups',title:'特殊人群提醒',type:'populationTable',data:[{group:'儿童',note:'按体重20-40mg/kg/日，分3次服用'},{group:'老年人',note:'肾功能不全者需调整剂量'},{group:'孕妇',note:'B类药物，需医生评估后使用'}]},
        {sectionId:'medicationCard',title:'简明用药卡',type:'medicationCard',data:{name:'阿莫西林胶囊',dose:'0.5g/次',frequency:'每6-8小时1次',duration:'7-14天',takeWith:'饭后温水送服'}}
      ],
      medicineName:'阿莫西林胶囊',
      ingredients:'阿莫西林三水合物',
      indications:'敏感菌所致各种感染（上呼吸道感染、泌尿系统感染、皮肤软组织感染等）',
      usage:'口服',
      dosage:'成人一次0.5g，每6-8小时1次，一日剂量不超过4g',
      contraindications:[{text:'青霉素过敏者禁用'},{text:'传染性单核细胞增多症患者禁用'}],
      sideEffects:[{text:'恶心、呕吐、腹泻等胃肠道反应'},{text:'皮疹、荨麻疹等过敏反应'},{text:'少数可见肝功能异常'}],
      specialGroups:[{group:'儿童',note:'按体重20-40mg/kg/日，分3次服用'},{group:'老年人',note:'肾功能不全者需调整剂量'},{group:'孕妇',note:'B类药物，需医生评估后使用'}],
      medicationCard:{name:'阿莫西林胶囊',dose:'0.5g/次',frequency:'每6-8小时1次',duration:'7-14天',takeWith:'饭后温水送服'},
      warnings:[{text:'青霉素过敏者禁用，用药前需确认过敏史',level:'high'},{text:'不可自行停药，需完成完整疗程',level:'high'},{text:'如出现皮疹、呼吸困难等过敏反应，立即停药就医',level:'high'}],
      actions:[{text:'用药前确认无青霉素过敏史',type:'verify'},{text:'按时按量服药，完成整个疗程',type:'submit'},{text:'存放于儿童接触不到的地方',type:'backup'},{text:'遵医嘱用药，不要自行调整剂量',type:'consult'}]
    };
  },
  _mockFoodLabelReport(task){
    const scene=sceneRegistry[task.sceneId];
    return{
      reportType:'foodLabelReport',
      title:(scene?scene.name:'食品配料表')+'报告',
      summary:'识别到某品牌饼干配料表，含5种食品添加剂，1种过敏原（含乳制品），营养成分中糖含量偏高。',
      sections:[
        {sectionId:'ingredients',title:'配料识别',type:'ingredientList',data:[{text:'小麦粉'},{text:'白砂糖'},{text:'植物油'},{text:'乳制品'},{text:'膨松剂'},{text:'乳化剂'},{text:'食用香精'},{text:'抗氧化剂'}]},
        {sectionId:'nutrition',title:'营养成分',type:'nutritionTable',data:{calories:'每100g 2,150kJ',sugar:{value:'32g/100g',level:'high',ref:'建议<25g/100g'},fat:{value:'18g/100g',level:'medium',ref:'建议<17g/100g'},sodium:{value:'420mg/100g',level:'medium',ref:'建议<400mg/100g'},protein:{value:'6g/100g',level:'normal',ref:''}}},
        {sectionId:'allergens',title:'过敏原提示',type:'allergenList',data:[{text:'乳制品'},{text:'小麦'},{text:'可能含大豆'}]},
        {sectionId:'populations',title:'适合/不适合人群',type:'populationList',data:{suitableFor:[{text:'一般成年人（适量食用）'}],notSuitableFor:[{text:'乳制品过敏者'},{text:'小麦过敏者'},{text:'糖尿病患者'},{text:'减脂人群'}]}}
      ],
      ingredients:[{text:'小麦粉'},{text:'白砂糖'},{text:'植物油'},{text:'乳制品'},{text:'膨松剂'},{text:'乳化剂'},{text:'食用香精'},{text:'抗氧化剂'}],
      nutrition:{calories:'每100g 2,150kJ',sugar:{value:'32g/100g',level:'high',ref:'建议<25g/100g'},fat:{value:'18g/100g',level:'medium',ref:'建议<17g/100g'},sodium:{value:'420mg/100g',level:'medium',ref:'建议<400mg/100g'},protein:{value:'6g/100g',level:'normal',ref:''}},
      sugarFatSodiumAnalysis:{sugar:{value:'32g/100g',level:'high'},fat:{value:'18g/100g',level:'medium'},sodium:{value:'420mg/100g',level:'medium'}},
      allergenWarnings:[{text:'乳制品'},{text:'小麦'},{text:'可能含大豆'}],
      suitableFor:[{text:'一般成年人（适量食用）'}],
      notSuitableFor:[{text:'乳制品过敏者'},{text:'小麦过敏者'},{text:'糖尿病患者'},{text:'减脂人群'}],
      purchaseAdvice:'糖含量和脂肪含量均偏高，建议选择低糖低脂替代品，儿童和减脂人群不建议经常食用',
      warnings:[{text:'含乳制品和小麦，过敏体质需注意',level:'medium'},{text:'糖含量偏高，不建议频繁食用',level:'medium'},{text:'含5种食品添加剂，儿童需谨慎',level:'low'}],
      actions:[{text:'乳制品/小麦过敏者避免食用',type:'verify'},{text:'控制食用频率，注意每日糖摄入量',type:'submit'},{text:'关注配料表中反式脂肪酸含量',type:'verify'},{text:'优先选择添加剂更少的同类产品',type:'consult'}]
    };
  },
  _mockImageRepair(task){
    const scene=sceneRegistry[task.sceneId];
    const sceneSpecific={
      oldPhotoRepair:{repairDetail:'去除划痕3处、折痕2处，黑白上色处理，分辨率4倍增强',qualityScore:92},
      bwColorize:{repairDetail:'黑白照片智能上色，色彩还原度95%，支持风格调整',qualityScore:90},
      enhanceBlur:{repairDetail:'超分辨率4倍增强，去除模糊和噪点，人脸区域专项增强',qualityScore:88},
      idPhotoOpt:{repairDetail:'底色替换为蓝色，智能美颜处理，自动裁剪为一寸照',qualityScore:95}
    };
    const detail=sceneSpecific[task.sceneId]||{repairDetail:scene.name+'处理完成',qualityScore:90};
    return{
      reportType:'imageRepair',
      title:(scene?scene.name:'图像修复')+'报告',
      summary:scene.name+'处理完成，已显著提升图片质量，分辨率从480x360提升至1920x1440。',
      sections:[
        {sectionId:'compare',title:'修复前后对比',type:'compareView',data:{before:'original',after:'repaired'}},
        {sectionId:'repairDetail',title:'修复详情',type:'repairDetail',data:[{type:scene.name,detail:detail.repairDetail},{type:'输出分辨率',detail:'1920 x 1440'},{type:'处理耗时',detail:'3.2秒'},{type:'增强倍数',detail:'4x'},{type:'质量评分',detail:detail.qualityScore+'/100'}]},
        {sectionId:'quality',title:'质量评分',type:'qualityScore',data:{score:detail.qualityScore,max:100}}
      ],
      originalImage:'original',
      resultImage:'repaired',
      beforeAfter:{before:'original',after:'repaired'},
      repairTypes:[{type:scene.name,detail:detail.repairDetail}],
      outputResolution:'1920 x 1440',
      nextActions:[{text:'可继续增强至4K分辨率（额外消耗10积分）',type:'submit'},{text:'建议导出PNG格式保留最高画质',type:'backup'},{text:'如需进一步精修可使用"继续处理"功能',type:'consult'}],
      warnings:[],
      actions:[{text:'可继续增强至4K分辨率（额外消耗10积分）',type:'submit'},{text:'建议导出PNG格式保留最高画质',type:'backup'},{text:'如需进一步精修可使用"继续处理"功能',type:'consult'}]
    };
  },
  _mockSpaceDesign(task){
    const scene=sceneRegistry[task.sceneId];
    return{
      reportType:'spaceDesign',
      title:(scene?scene.name:'空间设计')+'报告',
      summary:'空间分析完成，已生成现代简约风格装修效果图，空间利用率提升15%，建议优化采光和收纳。',
      sections:[
        {sectionId:'compare',title:'原始空间 vs AI效果图',type:'compareView',data:{before:'original',after:'generated'}},
        {sectionId:'style',title:'推荐风格',type:'styleSelector',data:['现代简约','北欧风格','日式原木','轻奢风格']},
        {sectionId:'problems',title:'空间问题分析',type:'problemList',data:[{text:'客厅采光不足，建议增加辅助光源'},{text:'收纳空间利用率低，建议增加定制柜'},{text:'动线设计可优化，减少交叉走动'}]},
        {sectionId:'color',title:'配色方案',type:'colorPalette',data:['#E8D5B7','#8B7355','#F5F0EB','#2C3E50','#D4A574']},
        {sectionId:'furniture',title:'家具/软装建议',type:'furnitureGrid',data:[{name:'布艺沙发',price:'¥3,000-6,000'},{name:'实木茶几',price:'¥1,500-3,000'},{name:'定制收纳柜',price:'¥5,000-12,000'},{name:'落地灯',price:'¥500-1,500'}]},
        {sectionId:'budget',title:'预算区间',type:'budgetCard',data:{range:'8-15万',note:'含基础硬装+主要家具软装，不含家电'}}
      ],
      originalImage:'original',
      generatedImages:[{id:'gen_1',style:'现代简约'}],
      style:'现代简约',
      spaceProblems:[{text:'客厅采光不足，建议增加辅助光源'},{text:'收纳空间利用率低，建议增加定制柜'},{text:'动线设计可优化，减少交叉走动'}],
      colorPlan:['#E8D5B7','#8B7355','#F5F0EB','#2C3E50','#D4A574'],
      furnitureAdvice:[{name:'布艺沙发',price:'¥3,000-6,000'},{name:'实木茶几',price:'¥1,500-3,000'},{name:'定制收纳柜',price:'¥5,000-12,000'},{name:'落地灯',price:'¥500-1,500'}],
      softDecorationAdvice:[{text:'建议增加暖色系窗帘和地毯'},{text:'墙面可挂装饰画增加层次感'}],
      budgetRange:'8-15万',
      nextActions:[{text:'可继续生成其他风格效果图（每次30积分）',type:'submit'},{text:'建议先确定风格方向再做详细方案',type:'consult'},{text:'如需精确预算可上传更多空间照片',type:'verify'}],
      warnings:[],
      actions:[{text:'可继续生成其他风格效果图（每次30积分）',type:'submit'},{text:'建议先确定风格方向再做详细方案',type:'consult'},{text:'如需精确预算可上传更多空间照片',type:'verify'}]
    };
  },
  _mockEcommerceReport(task){
    const scene=sceneRegistry[task.sceneId];
    return{
      reportType:'ecommerceReport',
      title:(scene?scene.name:'商品图优化')+'报告',
      summary:'商品图优化完成，已去除原背景并替换为纯白底，产品色彩校正完成，生成3种尺寸主图。',
      sections:[
        {sectionId:'compare',title:'原商品图 vs 优化后',type:'compareView',data:{before:'original',after:'optimized'}},
        {sectionId:'sellingPoints',title:'卖点提取',type:'sellingPointList',data:[{text:'高清产品细节展示'},{text:'纯白背景突出产品'},{text:'色彩还原度95%以上'}]},
        {sectionId:'mainImageAdvice',title:'主图建议',type:'adviceList',data:[{text:'主图建议使用白底，突出产品主体'},{text:'添加品牌水印，防止盗图'},{text:'首图展示产品全貌，后续展示细节'}]},
        {sectionId:'backgroundAdvice',title:'背景建议',type:'adviceList',data:[{text:'纯白背景适合大多数电商平台'},{text:'浅灰背景适合高端产品'},{text:'场景化背景适合生活方式类产品'}]},
        {sectionId:'platform',title:'平台适配建议',type:'platformTable',data:[{platform:'淘宝/天猫',size:'800×800px',note:'支持放大镜功能'},{platform:'京东',size:'800×800px',note:'首图白底优先'},{platform:'拼多多',size:'750×750px',note:'简洁突出卖点'},{platform:'小红书',size:'1080×1080px',note:'生活化场景更佳'}]}
      ],
      originalImage:'original',
      optimizedImage:'optimized',
      sellingPoints:[{text:'高清产品细节展示'},{text:'纯白背景突出产品'},{text:'色彩还原度95%以上'}],
      mainImageAdvice:[{text:'主图建议使用白底，突出产品主体'},{text:'添加品牌水印，防止盗图'},{text:'首图展示产品全貌，后续展示细节'}],
      backgroundAdvice:[{text:'纯白背景适合大多数电商平台'},{text:'浅灰背景适合高端产品'},{text:'场景化背景适合生活方式类产品'}],
      platformAdvice:[{platform:'淘宝/天猫',size:'800×800px',note:'支持放大镜功能'},{platform:'京东',size:'800×800px',note:'首图白底优先'},{platform:'拼多多',size:'750×750px',note:'简洁突出卖点'},{platform:'小红书',size:'1080×1080px',note:'生活化场景更佳'}],
      exportOptions:[{format:'PNG',size:'800×800'},{format:'PNG',size:'750×750'},{format:'PNG',size:'1080×1080'}],
      warnings:[],
      actions:[{text:'可继续生成场景化背景主图（每次15积分）',type:'submit'},{text:'建议为不同平台分别导出对应尺寸',type:'backup'},{text:'如需模特试穿图可使用"继续生成"功能',type:'consult'}]
    };
  },
  _mockLifeIdentify(task){
    const scene=sceneRegistry[task.sceneId];
    const sceneSpecific={
      plantIdentify:{name:'月季花',confidence:92,latinName:'Rosa chinensis',features:['花瓣5片，粉红色','叶片椭圆形，边缘有锯齿','茎上有刺'],similarObjects:[{name:'玫瑰',confidence:'85%',diff:'叶片更皱，刺较少'},{name:'蔷薇',confidence:'72%',diff:'花更小，常成簇开放'}],knowledge:'月季花被称为"花中皇后"，四季开花，适应性强，是中国十大名花之一。',careAdvice:['喜阳光充足，每天6小时以上','保持土壤湿润但不积水','每月施一次薄肥','注意防治蚜虫和白粉病']},
      fruitVegIdentify:{name:'西兰花',confidence:95,latinName:'Brassica oleracea var. italica',features:['绿色花球状','花蕾紧密排列','茎部粗壮'],similarObjects:[{name:'花椰菜',confidence:'80%',diff:'花球为白色'},{name:'羽衣甘蓝',confidence:'60%',diff:'叶片状，无花球'}],knowledge:'西兰花富含维生素C、维生素K和膳食纤维，被誉为"蔬菜皇冠"，是营养密度最高的蔬菜之一。',careAdvice:['冷藏保存，3-5天内食用','焯水后口感更佳','避免过度烹饪，蒸制最佳']},
      animalIdentify:{name:'金毛寻回犬',confidence:90,latinName:'Canis lupus familiaris',features:['金色长毛','体型中大型','表情友善'],similarObjects:[{name:'拉布拉多',confidence:'78%',diff:'毛更短，颜色更多样'},{name:'中华田园犬',confidence:'45%',diff:'体型差异大，毛色多样'}],knowledge:'金毛寻回犬是最受欢迎的家庭犬之一，性格温顺、聪明，常被训练为导盲犬和搜救犬。',careAdvice:['每天需要1-2小时运动','定期梳理毛发，换毛期每天梳毛','注意髋关节和眼部健康','性格亲人，适合家庭饲养']}
    };
    const data=sceneSpecific[task.sceneId]||{name:'未知物体',confidence:50,latinName:'',features:['无法确定具体特征'],similarObjects:[],knowledge:'暂无相关信息',careAdvice:[]};
    return{
      reportType:'lifeIdentify',
      title:(scene?scene.name:'生活识别')+'报告',
      summary:'识别完成，最可能为「'+data.name+'」，置信度'+data.confidence+'%。',
      sections:[
        {sectionId:'identifyResult',title:'识别结果',type:'identifyResult',data:{possibleNames:[{name:data.name,confidence:data.confidence,latinName:data.latinName||''}],confidence:data.confidence}},
        {sectionId:'features',title:'可见特征',type:'featureList',data:data.features.map(f=>({text:f}))},
        {sectionId:'similar',title:'相似对象',type:'similarList',data:data.similarObjects||[]},
        {sectionId:'knowledge',title:'相关知识',type:'knowledgeCard',data:{text:data.knowledge||''}},
        {sectionId:'advice',title:'养护/使用建议',type:'adviceList',data:(data.careAdvice||[]).map(a=>({text:a}))}
      ],
      possibleNames:[{name:data.name,confidence:data.confidence,latinName:data.latinName||''}],
      confidence:data.confidence,
      visibleFeatures:data.features.map(f=>({text:f})),
      similarObjects:data.similarObjects||[],
      relatedKnowledge:data.knowledge||'',
      careOrUsageAdvice:(data.careAdvice||[]).map(a=>({text:a})),
      uncertaintyNotes:data.confidence<80?'置信度较低，结果仅供参考，建议结合实际情况判断。':'识别置信度较高，结果较为可靠。',
      warnings:[{text:data.confidence<80?'置信度较低，结果仅供参考':'识别置信度较高，结果较为可靠',level:data.confidence<80?'medium':'low'}],
      actions:[{text:'如识别结果不准确，可重新拍照上传',type:'submit'},{text:'尝试从不同角度拍摄以提高准确率',type:'verify'},{text:'可切换到其他场景获取更专业的分析',type:'consult'}]
    };
  },
  _mockGeneralAnalysis(task){
    const scene=sceneRegistry[task.sceneId];
    return{
      reportType:'generalAnalysis',
      title:(scene?scene.name:'通用图片分析')+'报告',
      summary:'AI已对图片进行通用分析，检测到图片中包含多个主体，无法高置信度归入单一场景。',
      sections:[
        {sectionId:'description',title:'图片主体描述',type:'descriptionCard',data:{text:'图片中可见一个室内场景，包含家具、装饰品和部分文字信息，主体不单一。'}},
        {sectionId:'scenes',title:'可能场景',type:'sceneList',data:[{name:'家居空间',confidence:'60%',reportType:'spaceDesign'},{name:'商品展示',confidence:'30%',reportType:'ecommerceReport'},{name:'文档资料',confidence:'25%',reportType:'documentRead'}]},
        {sectionId:'categories',title:'候选分类',type:'categoryTags',data:[{text:'空间设计'},{text:'电商商品'},{text:'文档识别'}]},
        {sectionId:'visibleInfo',title:'可见信息',type:'infoList',data:[{text:'室内环境'},{text:'家具陈设'},{text:'部分文字内容'},{text:'光线较暗'}]},
        {sectionId:'uncertainty',title:'不确定原因',type:'uncertaintyList',data:[{text:'图片包含多个主体，无法确定主要意图'},{text:'图片清晰度一般，部分细节模糊'},{text:'场景类型不明确，需要用户确认'}]}
      ],
      imageDescription:'图片中可见一个室内场景，包含家具、装饰品和部分文字信息，主体不单一。',
      possibleScenes:[{name:'家居空间',confidence:'60%',reportType:'spaceDesign'},{name:'商品展示',confidence:'30%',reportType:'ecommerceReport'},{name:'文档资料',confidence:'25%',reportType:'documentRead'}],
      candidateCategories:[{text:'空间设计'},{text:'电商商品'},{text:'文档识别'}],
      visibleInformation:[{text:'室内环境'},{text:'家具陈设'},{text:'部分文字内容'},{text:'光线较暗'}],
      uncertaintyReason:'图片包含多个主体，无法确定主要意图；图片清晰度一般，部分细节模糊；场景类型不明确，需要用户确认。',
      suggestedNextActions:[{text:'选择装修效果图场景',sceneId:'renovationEffect'},{text:'选择商品图优化场景',sceneId:'productImageOpt'},{text:'选择发票识别场景',sceneId:'invoiceRecognition'}],
      warnings:[{text:'无法高置信度确定图片类型',level:'medium'}],
      actions:[{text:'建议选择更具体的场景重新处理',type:'consult'},{text:'如需空间设计分析，请选择"装修效果图"',type:'submit'},{text:'如需商品图优化，请选择"商品图优化"',type:'submit'}]
    };
  }
};

const mockRouterService={
  _uploadTypeMap:{
    invoice:{contentType:'document',detectedObject:'增值税发票',suggestedSceneId:'invoiceRecognition',suggestedReportType:'documentRead',confidence:0.91,candidateScenes:[{sceneId:'invoiceRecognition',name:'发票识别',confidence:0.91},{sceneId:'contractRecognition',name:'合同识别',confidence:0.35},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.12}],riskLevel:'low',needUserConfirm:false,reason:'图片中包含发票代码、金额、购买方、销售方等典型字段'},
    lab_report:{contentType:'document',detectedObject:'血常规检验报告',suggestedSceneId:'medicalReport',suggestedReportType:'healthReport',confidence:0.88,candidateScenes:[{sceneId:'medicalReport',name:'化验单解读',confidence:0.88},{sceneId:'drugInstruction',name:'药品说明书',confidence:0.22},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.10}],riskLevel:'low',needUserConfirm:false,reason:'图片中包含检验项目、参考范围、异常标记等化验单特征'},
    medicine_instruction:{contentType:'document',detectedObject:'药品说明书',suggestedSceneId:'drugInstruction',suggestedReportType:'medicineReport',confidence:0.86,candidateScenes:[{sceneId:'drugInstruction',name:'药品说明书',confidence:0.86},{sceneId:'foodLabel',name:'食品配料表',confidence:0.30},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.12}],riskLevel:'low',needUserConfirm:false,reason:'图片中包含药品名称、适应症、用法用量、禁忌等药品信息'},
    food_label:{contentType:'document',detectedObject:'食品配料表',suggestedSceneId:'foodLabel',suggestedReportType:'foodLabelReport',confidence:0.82,candidateScenes:[{sceneId:'foodLabel',name:'食品配料表',confidence:0.82},{sceneId:'drugInstruction',name:'药品说明书',confidence:0.25},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.18}],riskLevel:'low',needUserConfirm:false,reason:'图片中包含配料表、营养成分表、过敏原提示等食品标签信息'},
    old_photo:{contentType:'image',detectedObject:'老旧黑白照片',suggestedSceneId:'oldPhotoRepair',suggestedReportType:'imageRepair',confidence:0.90,candidateScenes:[{sceneId:'oldPhotoRepair',name:'老照片修复',confidence:0.90},{sceneId:'enhanceBlur',name:'模糊增强',confidence:0.40},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.08}],riskLevel:'low',needUserConfirm:false,reason:'图片为黑白照片，存在划痕、折痕和褪色，符合老照片修复场景'},
    room_photo:{contentType:'image',detectedObject:'室内空间',suggestedSceneId:'renovationEffect',suggestedReportType:'spaceDesign',confidence:0.83,candidateScenes:[{sceneId:'renovationEffect',name:'装修效果图',confidence:0.83},{sceneId:'productImageOpt',name:'商品图优化',confidence:0.22},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.15}],riskLevel:'low',needUserConfirm:false,reason:'图片为室内空间照片，包含家具、墙面、地面等空间元素'},
    product_image:{contentType:'image',detectedObject:'商品产品图',suggestedSceneId:'productImageOpt',suggestedReportType:'ecommerceReport',confidence:0.84,candidateScenes:[{sceneId:'productImageOpt',name:'商品图优化',confidence:0.84},{sceneId:'renovationEffect',name:'装修效果图',confidence:0.18},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.10}],riskLevel:'low',needUserConfirm:false,reason:'图片为商品产品照片，包含产品主体和背景，适合电商场景'},
    plant:{contentType:'image',detectedObject:'花卉植物',suggestedSceneId:'plantIdentify',suggestedReportType:'lifeIdentify',confidence:0.89,candidateScenes:[{sceneId:'plantIdentify',name:'花草识别',confidence:0.89},{sceneId:'fruitVegIdentify',name:'蔬菜水果识别',confidence:0.32},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.08}],riskLevel:'low',needUserConfirm:false,reason:'图片中包含花卉或植物，具有明显的花瓣、叶片等植物特征'},
    vegetable:{contentType:'image',detectedObject:'蔬菜水果',suggestedSceneId:'fruitVegIdentify',suggestedReportType:'lifeIdentify',confidence:0.81,candidateScenes:[{sceneId:'fruitVegIdentify',name:'蔬菜水果识别',confidence:0.81},{sceneId:'plantIdentify',name:'花草识别',confidence:0.35},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.12}],riskLevel:'low',needUserConfirm:false,reason:'图片中包含蔬菜或水果，具有明显的果蔬特征'},
    animal:{contentType:'image',detectedObject:'动物',suggestedSceneId:'animalIdentify',suggestedReportType:'lifeIdentify',confidence:0.76,candidateScenes:[{sceneId:'animalIdentify',name:'动物识别',confidence:0.76},{sceneId:'plantIdentify',name:'花草识别',confidence:0.15},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.18}],riskLevel:'low',needUserConfirm:false,reason:'图片中检测到动物，匹配动物识别场景'},
    unknown_image:{contentType:'unknown',detectedObject:'未知内容',suggestedSceneId:'generalAnalysis',suggestedReportType:'generalAnalysis',confidence:0.30,candidateScenes:[{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.30},{sceneId:'renovationEffect',name:'装修效果图',confidence:0.22},{sceneId:'productImageOpt',name:'商品图优化',confidence:0.18}],riskLevel:'high',needUserConfirm:true,reason:'无法高置信度判断图片类型，建议使用通用分析或手动选择场景'},
    medium_confidence_room:{contentType:'image',detectedObject:'室内场景',suggestedSceneId:'renovationEffect',suggestedReportType:'spaceDesign',confidence:0.58,candidateScenes:[{sceneId:'renovationEffect',name:'装修效果图',confidence:0.58},{sceneId:'productImageOpt',name:'商品图优化',confidence:0.42},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.35}],riskLevel:'medium',needUserConfirm:true,reason:'图片可能是室内空间，也可能是商品展示，置信度中等，建议确认'},
    mismatch_lab_invoice:{contentType:'document',detectedObject:'增值税发票',suggestedSceneId:'invoiceRecognition',suggestedReportType:'documentRead',confidence:0.91,candidateScenes:[{sceneId:'invoiceRecognition',name:'发票识别',confidence:0.91},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.12}],riskLevel:'high',needUserConfirm:true,reason:'上传内容为发票，与所选场景"化验单解读"不匹配',_impliedSelectedSceneId:'medicalReport'},
    mismatch_product_plant:{contentType:'image',detectedObject:'花卉植物',suggestedSceneId:'plantIdentify',suggestedReportType:'lifeIdentify',confidence:0.85,candidateScenes:[{sceneId:'plantIdentify',name:'花草识别',confidence:0.85},{sceneId:'generalAnalysis',name:'通用图片分析',confidence:0.10}],riskLevel:'high',needUserConfirm:true,reason:'上传内容为花草，与所选场景"商品图优化"不匹配',_impliedSelectedSceneId:'productImageOpt'}
  },
  route(mockUploadType){
    const result=this._uploadTypeMap[mockUploadType];
    return result?JSON.parse(JSON.stringify(result)):JSON.parse(JSON.stringify(this._uploadTypeMap.unknown_image));
  },
  forceScenario(scenarioKey){
    const result=this._uploadTypeMap[scenarioKey];
    return result?JSON.parse(JSON.stringify(result)):JSON.parse(JSON.stringify(this._uploadTypeMap.unknown_image));
  }
};

const UniversalVisualRouter={
  route(params){
    const{selectedSceneId,file,mockUploadType}=params;
    let routeResult;
    if(mockUploadType){
      routeResult=mockRouterService.route(mockUploadType);
    }else{
      routeResult=mockRouterService.route('unknown_image');
    }
    if(selectedSceneId&&routeResult.suggestedSceneId!==selectedSceneId){
      const selectedScene=sceneRegistry[selectedSceneId];
      if(selectedScene){
        routeResult.needUserConfirm=true;
        routeResult.riskLevel='high';
        routeResult.reason='上传内容与所选场景"'+selectedScene.name+'"不匹配。'+routeResult.reason;
      }
    }
    return routeResult;
  },
  resolveRoute(routeResult,selectedSceneId,userChoice){
    let finalSceneId;
    let finalReportType;
    let routeMode;
    if(userChoice==='suggested'){
      finalSceneId=routeResult.suggestedSceneId;
      finalReportType=routeResult.suggestedReportType;
      routeMode='confirmed';
    }else if(userChoice==='general'){
      finalSceneId='generalAnalysis';
      finalReportType='generalAnalysis';
      routeMode='general';
    }else if(userChoice==='original'&&selectedSceneId){
      finalSceneId=selectedSceneId;
      const scene=sceneRegistry[selectedSceneId];
      finalReportType=scene?scene.reportType:'generalAnalysis';
      routeMode='forced';
    }else{
      if(routeResult.confidence>=0.75){
        finalSceneId=routeResult.suggestedSceneId;
        finalReportType=routeResult.suggestedReportType;
        routeMode='auto';
      }else if(routeResult.confidence>=0.45){
        finalSceneId=routeResult.suggestedSceneId;
        finalReportType=routeResult.suggestedReportType;
        routeMode='auto';
      }else{
        finalSceneId='generalAnalysis';
        finalReportType='generalAnalysis';
        routeMode='general';
      }
    }
    const scene=sceneRegistry[finalSceneId];
    return{
      finalSceneId,
      finalReportType,
      outputSchemaKey:scene?scene.outputSchemaKey:'generalAnalysisOutput',
      extractorPromptKey:scene?scene.extractorPromptKey:'generalAnalysis',
      confidence:routeResult.confidence,
      needUserConfirm:routeResult.needUserConfirm,
      routeResult,
      routeMode,
      userRouteChoice:userChoice
    };
  },
  shouldConfirm(routeResult,selectedSceneId){
    if(routeResult.needUserConfirm)return true;
    if(selectedSceneId&&routeResult.suggestedSceneId!==selectedSceneId)return true;
    if(routeResult.confidence>=0.45&&routeResult.confidence<0.75)return true;
    return false;
  }
};

const outputSchemas={
  documentRead:{
    reportType:'documentRead',
    requiredFields:['reportType','title','summary','sections','warnings','actions','extractedFields','keyFields','uncertainFields'],
    optionalFields:['risks'],
    sectionTypes:['fieldTable','highlightList','riskList'],
    fields:{
      extractedFields:{type:'array',description:'提取的结构化字段',itemFields:['key','value','type']},
      keyFields:{type:'array',description:'重点字段',itemFields:['key','value','type']},
      uncertainFields:{type:'array',description:'不确定字段',itemFields:['key','value','reason']},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  healthReport:{
    reportType:'healthReport',
    requiredFields:['reportType','title','summary','sections','warnings','actions','abnormalItems','normalItems','explanations','focusPoints'],
    optionalFields:['suggestedQuestions'],
    sectionTypes:['indicatorTable','explanationList','focusList'],
    fields:{
      abnormalItems:{type:'array',description:'异常指标',itemFields:['name','value','ref','direction']},
      normalItems:{type:'array',description:'正常指标',itemFields:['name','value','ref']},
      explanations:{type:'array',description:'指标解释',itemFields:['name','explain']},
      focusPoints:{type:'array',description:'重点关注',itemFields:['text']},
      suggestedQuestions:{type:'array',description:'建议咨询医生的问题',itemFields:['text']},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  medicineReport:{
    reportType:'medicineReport',
    requiredFields:['reportType','title','summary','sections','warnings','actions','medicineName','ingredients','indications','usage','dosage','contraindications','sideEffects'],
    optionalFields:['specialGroups','medicationCard'],
    sectionTypes:['medicineInfo','contraindicationList','sideEffectList','populationTable','medicationCard'],
    fields:{
      medicineName:{type:'string',description:'药品名称'},
      ingredients:{type:'string',description:'成分'},
      indications:{type:'string',description:'适应症'},
      usage:{type:'string',description:'用法'},
      dosage:{type:'string',description:'用量'},
      contraindications:{type:'array',description:'禁忌',itemFields:['text']},
      sideEffects:{type:'array',description:'不良反应',itemFields:['text']},
      specialGroups:{type:'array',description:'特殊人群',itemFields:['group','note']},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  foodLabelReport:{
    reportType:'foodLabelReport',
    requiredFields:['reportType','title','summary','sections','warnings','actions','ingredients','nutrition','sugarFatSodiumAnalysis','allergenWarnings'],
    optionalFields:['suitableFor','notSuitableFor','purchaseAdvice'],
    sectionTypes:['ingredientList','nutritionTable','allergenList','populationList'],
    fields:{
      ingredients:{type:'array',description:'配料列表',itemFields:['text']},
      nutrition:{type:'object',description:'营养成分',itemFields:['calories','sugar','fat','sodium','protein']},
      sugarFatSodiumAnalysis:{type:'object',description:'糖脂钠分析',itemFields:['sugar','fat','sodium']},
      allergenWarnings:{type:'array',description:'过敏原警告',itemFields:['text']},
      suitableFor:{type:'array',description:'适合人群',itemFields:['text']},
      notSuitableFor:{type:'array',description:'不适合人群',itemFields:['text']},
      purchaseAdvice:{type:'string',description:'购买建议'},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  imageRepair:{
    reportType:'imageRepair',
    requiredFields:['reportType','title','summary','sections','warnings','actions','originalImage','resultImage','beforeAfter','repairTypes','outputResolution'],
    optionalFields:['nextActions'],
    sectionTypes:['compareView','repairDetail','qualityScore'],
    fields:{
      originalImage:{type:'string',description:'原图标识'},
      resultImage:{type:'string',description:'结果图标识'},
      beforeAfter:{type:'object',description:'修复前后对比',itemFields:['before','after']},
      repairTypes:{type:'array',description:'修复类型',itemFields:['type','detail']},
      outputResolution:{type:'string',description:'输出分辨率'},
      nextActions:{type:'array',description:'后续操作',itemFields:['text','type']},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  spaceDesign:{
    reportType:'spaceDesign',
    requiredFields:['reportType','title','summary','sections','warnings','actions','originalImage','generatedImages','style','spaceProblems','colorPlan'],
    optionalFields:['furnitureAdvice','softDecorationAdvice','budgetRange','nextActions'],
    sectionTypes:['compareView','styleSelector','problemList','colorPalette','furnitureGrid','budgetCard'],
    fields:{
      originalImage:{type:'string',description:'原图标识'},
      generatedImages:{type:'array',description:'生成图标识',itemFields:['id','style']},
      style:{type:'string',description:'推荐风格'},
      spaceProblems:{type:'array',description:'空间问题',itemFields:['text']},
      colorPlan:{type:'array',description:'配色方案',itemFields:['color']},
      furnitureAdvice:{type:'array',description:'家具建议',itemFields:['name','price']},
      softDecorationAdvice:{type:'array',description:'软装建议',itemFields:['text']},
      budgetRange:{type:'string',description:'预算区间'},
      nextActions:{type:'array',description:'后续操作',itemFields:['text','type']},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  ecommerceReport:{
    reportType:'ecommerceReport',
    requiredFields:['reportType','title','summary','sections','warnings','actions','originalImage','optimizedImage','sellingPoints','mainImageAdvice','backgroundAdvice'],
    optionalFields:['platformAdvice','exportOptions'],
    sectionTypes:['compareView','sellingPointList','adviceList','platformTable'],
    fields:{
      originalImage:{type:'string',description:'原图标识'},
      optimizedImage:{type:'string',description:'优化图标识'},
      sellingPoints:{type:'array',description:'卖点',itemFields:['text']},
      mainImageAdvice:{type:'array',description:'主图建议',itemFields:['text']},
      backgroundAdvice:{type:'array',description:'背景建议',itemFields:['text']},
      platformAdvice:{type:'array',description:'平台适配',itemFields:['platform','size','note']},
      exportOptions:{type:'array',description:'导出选项',itemFields:['format','size']},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  lifeIdentify:{
    reportType:'lifeIdentify',
    requiredFields:['reportType','title','summary','sections','warnings','actions','possibleNames','confidence','visibleFeatures','similarObjects','relatedKnowledge'],
    optionalFields:['careOrUsageAdvice','uncertaintyNotes'],
    sectionTypes:['identifyResult','featureList','similarList','knowledgeCard','adviceList'],
    fields:{
      possibleNames:{type:'array',description:'可能名称',itemFields:['name','confidence','latinName']},
      confidence:{type:'number',description:'置信度(0-100)'},
      visibleFeatures:{type:'array',description:'可见特征',itemFields:['text']},
      similarObjects:{type:'array',description:'相似对象',itemFields:['name','confidence','diff']},
      relatedKnowledge:{type:'string',description:'相关知识'},
      careOrUsageAdvice:{type:'array',description:'养护/使用建议',itemFields:['text']},
      uncertaintyNotes:{type:'string',description:'不确定性说明'},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  },
  generalAnalysis:{
    reportType:'generalAnalysis',
    requiredFields:['reportType','title','summary','sections','warnings','actions','imageDescription','possibleScenes','candidateCategories','visibleInformation','uncertaintyReason'],
    optionalFields:['suggestedNextActions'],
    sectionTypes:['descriptionCard','sceneList','categoryTags','infoList','uncertaintyList'],
    fields:{
      imageDescription:{type:'string',description:'图片描述'},
      possibleScenes:{type:'array',description:'可能场景',itemFields:['name','confidence','reportType']},
      candidateCategories:{type:'array',description:'候选分类',itemFields:['text']},
      visibleInformation:{type:'array',description:'可见信息',itemFields:['text']},
      uncertaintyReason:{type:'string',description:'不确定原因'},
      suggestedNextActions:{type:'array',description:'建议下一步',itemFields:['text','sceneId']},
      warnings:{type:'array',description:'警告信息',itemFields:['text','level']},
      actions:{type:'array',description:'建议操作',itemFields:['text','type']}
    }
  }
};

const promptTemplates={
  documentRead:{
    promptKey:'documentRead',
    reportType:'documentRead',
    role:'你是一个专业的文档识别AI助手，擅长从图片中提取结构化信息。',
    task:'识别用户上传的文档图片，提取关键字段，标注不确定内容，输出结构化结果。',
    outputRules:[
      '必须按照 outputSchemas.documentRead 的结构输出',
      'extractedFields 中每个字段必须包含 key 和 value',
      'keyFields 标注重要或需要关注的字段',
      'uncertainFields 标注识别不确定的字段及原因',
      'warnings 中 level 可选: high/medium/low',
      'actions 中 type 可选: verify/submit/backup/consult',
      'sections 用于前端渲染，type 必须是 fieldTable/highlightList/riskList 之一'
    ],
    schemaKey:'documentRead'
  },
  healthReport:{
    promptKey:'healthReport',
    reportType:'healthReport',
    role:'你是一个专业的医学检验报告解读AI助手，能够识别检验指标并解读异常。',
    task:'识别用户上传的检验报告，提取异常和正常指标，提供专业解读和健康建议。',
    outputRules:[
      '必须按照 outputSchemas.healthReport 的结构输出',
      'abnormalItems 中 direction 可选: ↑/↓',
      'explanations 提供通俗易懂的指标解释',
      'focusPoints 标注需要重点关注的健康问题',
      'suggestedQuestions 列出建议咨询医生的问题',
      'warnings 必须包含"以上解读仅供参考，不构成医疗建议"',
      'sections 中 type 必须是 indicatorTable/explanationList/focusList 之一'
    ],
    schemaKey:'healthReport'
  },
  medicineReport:{
    promptKey:'medicineReport',
    reportType:'medicineReport',
    role:'你是一个专业的药品信息解读AI助手，擅长提取药品说明书关键信息。',
    task:'识别用户上传的药品说明书，提取药品名称、成分、适应症、用法用量、禁忌、不良反应等关键信息。',
    outputRules:[
      '必须按照 outputSchemas.medicineReport 的结构输出',
      'contraindications 列出所有禁忌',
      'sideEffects 列出所有不良反应',
      'specialGroups 标注特殊人群用药注意',
      'warnings 必须包含过敏和用药安全提示',
      'sections 中 type 必须是 medicineInfo/contraindicationList/sideEffectList/populationTable/medicationCard 之一'
    ],
    schemaKey:'medicineReport'
  },
  foodLabelReport:{
    promptKey:'foodLabelReport',
    reportType:'foodLabelReport',
    role:'你是一个专业的食品安全分析AI助手，擅长识别食品配料表和营养成分。',
    task:'识别用户上传的食品标签，提取配料、营养成分、过敏原，提供安全评估。',
    outputRules:[
      '必须按照 outputSchemas.foodLabelReport 的结构输出',
      'ingredients 按配料表顺序列出',
      'nutrition 包含热量、糖、脂肪、钠、蛋白质',
      'sugarFatSodiumAnalysis 对糖脂钠进行高/中/低评估',
      'allergenWarnings 列出所有过敏原',
      'sections 中 type 必须是 ingredientList/nutritionTable/allergenList/populationList 之一'
    ],
    schemaKey:'foodLabelReport'
  },
  imageRepair:{
    promptKey:'imageRepair',
    reportType:'imageRepair',
    role:'你是一个专业的图像修复AI助手，擅长老照片修复、上色、增强等。',
    task:'分析用户上传的图片，执行修复处理，输出修复结果和报告。',
    outputRules:[
      '必须按照 outputSchemas.imageRepair 的结构输出',
      'originalImage 和 resultImage 标识原图和结果图',
      'repairTypes 列出执行的修复类型',
      'outputResolution 输出图片分辨率',
      'sections 中 type 必须是 compareView/repairDetail/qualityScore 之一'
    ],
    schemaKey:'imageRepair'
  },
  spaceDesign:{
    promptKey:'spaceDesign',
    reportType:'spaceDesign',
    role:'你是一个专业的室内设计AI助手，擅长空间分析和装修效果图生成。',
    task:'分析用户上传的空间照片，生成装修效果图，提供风格、配色、家具建议。',
    outputRules:[
      '必须按照 outputSchemas.spaceDesign 的结构输出',
      'generatedImages 列出生成的效果图',
      'style 推荐装修风格',
      'colorPlan 提供配色方案（十六进制色值）',
      'spaceProblems 列出空间问题',
      'sections 中 type 必须是 compareView/styleSelector/problemList/colorPalette/furnitureGrid/budgetCard 之一'
    ],
    schemaKey:'spaceDesign'
  },
  ecommerceReport:{
    promptKey:'ecommerceReport',
    reportType:'ecommerceReport',
    role:'你是一个专业的电商商品图优化AI助手，擅长商品图精修和平台适配。',
    task:'优化用户上传的商品图，提供卖点提取、主图建议、背景建议和平台适配。',
    outputRules:[
      '必须按照 outputSchemas.ecommerceReport 的结构输出',
      'sellingPoints 提取3-5个核心卖点',
      'mainImageAdvice 提供主图优化建议',
      'backgroundAdvice 提供背景处理建议',
      'platformAdvice 提供各平台适配建议',
      'sections 中 type 必须是 compareView/sellingPointList/adviceList/platformTable 之一'
    ],
    schemaKey:'ecommerceReport'
  },
  lifeIdentify:{
    promptKey:'lifeIdentify',
    reportType:'lifeIdentify',
    role:'你是一个专业的生活识别AI助手，擅长识别花草、动物、蔬菜水果等。',
    task:'识别用户上传的图片中的对象，提供名称、特征、相似对象和相关知识。',
    outputRules:[
      '必须按照 outputSchemas.lifeIdentify 的结构输出',
      'possibleNames 列出可能的识别结果及置信度',
      'confidence 为最高匹配的置信度(0-100)',
      'visibleFeatures 列出可见特征',
      'similarObjects 列出相似对象及区别',
      'uncertaintyNotes 在置信度低于80时提供说明',
      'sections 中 type 必须是 identifyResult/featureList/similarList/knowledgeCard/adviceList 之一'
    ],
    schemaKey:'lifeIdentify'
  },
  generalAnalysis:{
    promptKey:'generalAnalysis',
    reportType:'generalAnalysis',
    role:'你是一个通用图片分析AI助手，在无法确定图片类型时提供综合分析。',
    task:'对用户上传的图片进行通用分析，提供描述、可能场景、候选分类和建议。',
    outputRules:[
      '必须按照 outputSchemas.generalAnalysis 的结构输出',
      'imageDescription 提供图片主体描述',
      'possibleScenes 列出可能的场景及置信度',
      'candidateCategories 列出候选分类标签',
      'uncertaintyReason 说明无法确定的原因',
      'suggestedNextActions 建议用户下一步操作',
      'sections 中 type 必须是 descriptionCard/sceneList/categoryTags/infoList/uncertaintyList 之一'
    ],
    schemaKey:'generalAnalysis'
  }
};

const schemaValidator={
  validate(reportType,resultData){
    const errors=[];
    if(!resultData){errors.push({field:'resultData',error:'结果数据不存在'});return{valid:false,errors}}
    if(!reportType){errors.push({field:'reportType',error:'reportType未指定'});return{valid:false,errors}}
    const schema=outputSchemas[reportType];
    if(!schema){errors.push({field:'reportType',error:'未知的reportType: '+reportType});return{valid:false,errors}}
    if(resultData.reportType&&resultData.reportType!==reportType){errors.push({field:'reportType',error:'reportType不匹配，期望'+reportType+'，实际'+resultData.reportType})}
    schema.requiredFields.forEach(f=>{
      if(resultData[f]===undefined||resultData[f]===null){errors.push({field:f,error:'必填字段缺失: '+f})}
    });
    if(resultData.sections!==undefined&&!Array.isArray(resultData.sections)){errors.push({field:'sections',error:'sections必须为数组'})}
    if(resultData.warnings!==undefined&&!Array.isArray(resultData.warnings)){errors.push({field:'warnings',error:'warnings必须为数组'})}
    if(resultData.actions!==undefined&&!Array.isArray(resultData.actions)){errors.push({field:'actions',error:'actions必须为数组'})}
    if(Array.isArray(resultData.sections)){
      resultData.sections.forEach((s,i)=>{
        if(!s.sectionId)errors.push({field:'sections['+i+'].sectionId',error:'section缺少sectionId'});
        if(!s.title)errors.push({field:'sections['+i+'].title',error:'section缺少title'});
        if(!s.type)errors.push({field:'sections['+i+'].type',error:'section缺少type'});
        if(s.data===undefined)errors.push({field:'sections['+i+'].data',error:'section缺少data'});
      });
    }
    return{valid:errors.length===0,errors}
  }
};

const reportTemplate={
  _safeGet(obj,path,defaultValue){
    if(!obj)return defaultValue;
    const keys=path.split('.');
    let cur=obj;
    for(let i=0;i<keys.length;i++){
      if(cur===undefined||cur===null)return defaultValue;
      cur=cur[keys[i]];
    }
    return cur!==undefined?cur:defaultValue;
  },
  _renderWarnings(warnings){
    if(!warnings||!warnings.length)return'';
    let html='<div class="risk-card"><div class="risk-title">⚠️ 警告信息</div>';
    warnings.forEach(w=>{
      const text=typeof w==='string'?w:(w.text||'');
      html+='<div class="risk-text">• '+text+'</div>';
    });
    html+='</div>';
    return html;
  },
  _renderActions(actions){
    if(!actions||!actions.length)return'';
    let html='<div class="suggest-card"><div class="suggest-title">💡 建议操作</div><ul class="suggest-list">';
    actions.forEach(a=>{
      const text=typeof a==='string'?a:(a.text||'');
      html+='<li>'+text+'</li>';
    });
    html+='</ul></div>';
    return html;
  },
  _renderValidationErrors(report){
    if(!report.validationErrors||!report.validationErrors.length)return'';
    let html='<div class="risk-card" style="border-color:#F59E0B"><div class="risk-title" style="color:#D97706">⚠️ 数据校验提示</div><div class="risk-text" style="color:#92400E">部分字段缺失，请重新生成或人工检查</div>';
    report.validationErrors.forEach(e=>{html+='<div class="risk-text" style="font-size:11px;color:#78716C">'+e.field+': '+e.error+'</div>'});
    html+='</div>';
    return html;
  },
  render(report){
    const container=document.getElementById('reportDetailContent');
    if(!report||!report.resultData){container.innerHTML='<div class="empty-state"><div class="empty-icon">📋</div><div class="empty-title">报告加载中</div><div class="empty-desc">请稍候...</div></div>';return}
    document.getElementById('reportDetailNavTitle').textContent=report.title;
    switch(report.reportType){
      case 'documentRead':container.innerHTML=this._renderDocumentRead(report);break;
      case 'healthReport':container.innerHTML=this._renderHealthReport(report);break;
      case 'medicineReport':container.innerHTML=this._renderMedicineReport(report);break;
      case 'foodLabelReport':container.innerHTML=this._renderFoodLabelReport(report);break;
      case 'imageRepair':container.innerHTML=this._renderImageRepair(report);break;
      case 'spaceDesign':container.innerHTML=this._renderSpaceDesign(report);break;
      case 'ecommerceReport':container.innerHTML=this._renderEcommerceReport(report);break;
      case 'lifeIdentify':container.innerHTML=this._renderLifeIdentify(report);break;
      case 'generalAnalysis':container.innerHTML=this._renderGeneralAnalysis(report);break;
      default:container.innerHTML=this._renderDocumentRead(report);
    }
  },
  _buildFooter(report){
    return '<div class="detail-footer"><div class="detail-cost-row"><span class="detail-cost-label">消耗积分</span><span class="detail-cost-val">'+report.costCredits+' 积分</span></div><div class="detail-footer-row"><div class="detail-footer-btn primary" onclick="showToast(\'PDF导出功能开发中\')">导出PDF</div><div class="detail-footer-btn outline" onclick="showToast(\'分享链接已复制\')">分享报告</div></div><div class="detail-footer-row"><div class="detail-footer-btn gold" onclick="navigateTo(\'page-scene-select\')">继续处理</div></div></div><div class="upgrade-card"><div class="upgrade-title">升级VIP会员</div><div class="upgrade-desc">无限次使用所有AI视觉功能</div><button class="upgrade-btn" onclick="showToast(\'会员功能开发中\')">立即升级</button></div>';
  },
  _renderDocumentRead(report){
    const d=report.resultData;
    const fields=d.extractedFields||d.fields||[];
    const keyFields=d.keyFields||d.highlights||[];
    const uncertainFields=d.uncertainFields||[];
    const warnings=d.warnings||(d.risks||[]).map(r=>({text:r,level:'medium'}));
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    let html='<div class="img-preview"><div class="img-preview-inner original">原始文件预览区</div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    if(fields.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>识别结果</div><div class="detail-card">';
      fields.forEach(f=>{html+='<div class="detail-row"><span class="detail-key">'+(f.key||'')+'</span><span class="detail-val'+(f.type?' '+f.type:'')+'">'+(f.value||'')+'</span></div>'});
      html+='</div></div>';
    }
    if(keyFields.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>重点字段</div><div class="detail-card">';
      keyFields.forEach(h=>{html+='<div class="detail-row"><span class="detail-key">'+(h.key||'')+'</span><span class="detail-val'+(h.type?' '+h.type:'')+'">'+(h.value||'')+'</span></div>'});
      html+='</div></div>';
    }
    if(uncertainFields.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>不确定字段</div><div class="detail-card">';
      uncertainFields.forEach(f=>{html+='<div class="detail-row"><span class="detail-key">'+(f.key||'')+'</span><span class="detail-val warn">'+(f.value||'')+' ('+(f.reason||'')+')</span></div>'});
      html+='</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderHealthReport(report){
    const d=report.resultData;
    const abnormalItems=d.abnormalItems||(d.abnormal||[]);
    const normalItems=d.normalItems||(d.normal||[]);
    const explanations=d.explanations||(d.indicatorExplain||[]);
    const focusPoints=d.focusPoints||(d.focus?d.focus.map(f=>({text:f})):[]);
    const suggestedQuestions=d.suggestedQuestions||[];
    const warnings=d.warnings||(d.risks||[]).map(r=>({text:r,level:'medium'}));
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    let html='<div class="img-preview"><div class="img-preview-inner original">报告/原图预览区</div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    if(abnormalItems.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot red"></span>异常项</div><div class="detail-card">';
      abnormalItems.forEach(item=>{html+='<div class="detail-row"><span class="detail-key">'+(item.name||'')+'</span><span class="detail-val warn">'+(item.value||'')+' '+(item.direction||'')+' (参考: '+(item.ref||'')+')</span></div>'});
      html+='</div></div>';
    }
    if(normalItems.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot green"></span>正常项</div><div class="detail-card">';
      normalItems.forEach(item=>{html+='<div class="detail-row"><span class="detail-key">'+(item.name||'')+'</span><span class="detail-val green">'+(item.value||'')+' (参考: '+(item.ref||'')+')</span></div>'});
      html+='</div></div>';
    }
    if(explanations.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>指标解释</div><div class="detail-card">';
      explanations.forEach(item=>{html+='<div class="detail-row"><span class="detail-key">'+(item.name||'')+'</span><span class="detail-val">'+(item.explain||item.text||'')+'</span></div>'});
      html+='</div></div>';
    }
    if(focusPoints.length){
      html+='<div class="budget-card"><div class="budget-title">重点关注</div>';
      focusPoints.forEach(p=>{html+='<div style="font-size:13px;color:#92400E;line-height:1.6;margin-bottom:4px">• '+(p.text||p||'')+'</div>'});
      html+='</div>';
    }
    if(suggestedQuestions.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>建议咨询医生的问题</div><div class="detail-card">';
      suggestedQuestions.forEach(q=>{html+='<div class="detail-row"><span class="detail-val" style="flex:1">❓ '+(q.text||q||'')+'</span></div>'});
      html+='</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderMedicineReport(report){
    const d=report.resultData;
    const warnings=d.warnings||(d.risks||[]).map(r=>({text:r,level:'medium'}));
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    let html='<div class="img-preview"><div class="img-preview-inner original">药品说明书预览区</div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>药品信息</div><div class="detail-card">';
    html+='<div class="detail-row"><span class="detail-key">药品名称</span><span class="detail-val gold">'+(d.medicineName||d.drugName||'')+'</span></div>';
    html+='<div class="detail-row"><span class="detail-key">成分</span><span class="detail-val">'+(d.ingredients||'')+'</span></div>';
    html+='<div class="detail-row"><span class="detail-key">适应症</span><span class="detail-val">'+(d.indications||'')+'</span></div>';
    html+='<div class="detail-row"><span class="detail-key">用法</span><span class="detail-val">'+(d.usage||'口服')+'</span></div>';
    html+='<div class="detail-row"><span class="detail-key">用法用量</span><span class="detail-val gold">'+(d.dosage||'')+'</span></div>';
    html+='</div></div>';
    const contraindications=d.contraindications||[];
    if(contraindications.length){
      html+='<div class="risk-card"><div class="risk-title">🚫 禁忌</div>';
      contraindications.forEach(c=>{html+='<div class="risk-text">• '+(typeof c==='string'?c:(c.text||''))+'</div>'});
      html+='</div>';
    }
    const sideEffects=d.sideEffects||(d.adverseReactions||[]);
    if(sideEffects.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>不良反应</div><div class="detail-card">';
      sideEffects.forEach(r=>{html+='<div class="detail-row"><span class="detail-val warn" style="text-align:left;width:100%">• '+(typeof r==='string'?r:(r.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    const specialGroups=d.specialGroups||(d.specialPopulations||[]);
    if(specialGroups.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>特殊人群提醒</div><div class="detail-card">';
      specialGroups.forEach(p=>{html+='<div class="detail-row"><span class="detail-key">'+(p.group||'')+'</span><span class="detail-val">'+(p.note||'')+'</span></div>'});
      html+='</div></div>';
    }
    const mc=d.medicationCard;
    if(mc){
      html+='<div class="budget-card"><div class="budget-title">💊 简明用药卡</div>';
      html+='<div style="font-size:13px;color:#92400E;line-height:1.8">';
      html+='<div><b>药品：</b>'+(mc.name||'')+'</div>';
      html+='<div><b>剂量：</b>'+(mc.dose||'')+'</div>';
      html+='<div><b>频次：</b>'+(mc.frequency||'')+'</div>';
      html+='<div><b>疗程：</b>'+(mc.duration||'')+'</div>';
      html+='<div><b>服用方式：</b>'+(mc.takeWith||'')+'</div>';
      html+='</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderFoodLabelReport(report){
    const d=report.resultData;
    const warnings=d.warnings||(d.risks||[]).map(r=>({text:r,level:'medium'}));
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    const ingredients=d.ingredients||[];
    const allergenWarnings=d.allergenWarnings||(d.allergens||[]);
    const suitableFor=d.suitableFor||[];
    const notSuitableFor=d.notSuitableFor||[];
    let html='<div class="img-preview"><div class="img-preview-inner original">食品标签预览区</div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    if(ingredients.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>配料识别</div><div class="detail-card">';
      ingredients.forEach((ing,i)=>{const text=typeof ing==='string'?ing:(ing.text||ing.name||'');html+='<div class="detail-row"><span class="detail-key">配料'+(i+1)+'</span><span class="detail-val">'+text+'</span></div>'});
      html+='</div></div>';
    }
    if(d.nutrition){
      const n=d.nutrition;
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>营养成分</div><div class="detail-card">';
      html+='<div class="detail-row"><span class="detail-key">热量</span><span class="detail-val">'+(n.calories||'')+'</span></div>';
      if(n.sugar)html+='<div class="detail-row"><span class="detail-key">糖含量</span><span class="detail-val'+(n.sugar.level==='high'?' warn':'')+'">'+n.sugar.value+(n.sugar.ref?' ('+n.sugar.ref+')':'')+'</span></div>';
      if(n.fat)html+='<div class="detail-row"><span class="detail-key">脂肪</span><span class="detail-val'+(n.fat.level==='high'?' warn':'')+'">'+n.fat.value+(n.fat.ref?' ('+n.fat.ref+')':'')+'</span></div>';
      if(n.sodium)html+='<div class="detail-row"><span class="detail-key">钠</span><span class="detail-val'+(n.sodium.level==='high'?' warn':'')+'">'+n.sodium.value+(n.sodium.ref?' ('+n.sodium.ref+')':'')+'</span></div>';
      if(n.protein)html+='<div class="detail-row"><span class="detail-key">蛋白质</span><span class="detail-val">'+n.protein.value+'</span></div>';
      html+='</div></div>';
    }
    if(d.sugarFatSodiumAnalysis){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>糖脂钠分析</div><div class="detail-card">';
      const sfna=d.sugarFatSodiumAnalysis;
      if(sfna.sugar)html+='<div class="detail-row"><span class="detail-key">糖</span><span class="detail-val'+(sfna.sugar.level==='high'?' warn':'')+'">'+sfna.sugar.value+'</span></div>';
      if(sfna.fat)html+='<div class="detail-row"><span class="detail-key">脂肪</span><span class="detail-val'+(sfna.fat.level==='high'?' warn':'')+'">'+sfna.fat.value+'</span></div>';
      if(sfna.sodium)html+='<div class="detail-row"><span class="detail-key">钠</span><span class="detail-val'+(sfna.sodium.level==='high'?' warn':'')+'">'+sfna.sodium.value+'</span></div>';
      html+='</div></div>';
    }
    if(allergenWarnings.length){
      html+='<div class="risk-card"><div class="risk-title">⚠️ 过敏原提示</div>';
      allergenWarnings.forEach(a=>{html+='<div class="risk-text">• '+(typeof a==='string'?a:(a.text||a.name||''))+'</div>'});
      html+='</div>';
    }
    if(suitableFor.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>适合人群</div><div class="detail-card">';
      suitableFor.forEach(s=>{html+='<div class="detail-row"><span class="detail-val green" style="text-align:left;width:100%">✓ '+(typeof s==='string'?s:(s.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(notSuitableFor.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>不适合人群</div><div class="detail-card">';
      notSuitableFor.forEach(s=>{html+='<div class="detail-row"><span class="detail-val warn" style="text-align:left;width:100%">✗ '+(typeof s==='string'?s:(s.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(d.purchaseAdvice){
      html+='<div class="budget-card"><div class="budget-title">🛒 购买建议</div><div style="font-size:13px;color:#92400E;line-height:1.6">'+d.purchaseAdvice+'</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderImageRepair(report){
    const d=report.resultData;
    const warnings=d.warnings||[];
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    const repairTypes=d.repairTypes||[];
    let html='<div class="compare-container"><div class="compare-label"><div class="compare-label-item active">原图</div><div class="compare-label-item">修复后</div></div><div class="compare-imgs"><div class="compare-img-item before">原图预览</div><div class="compare-img-item after">修复后预览</div></div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    if(repairTypes.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>修复详情</div><div class="detail-card">';
      repairTypes.forEach(r=>{html+='<div class="detail-row"><span class="detail-key">'+(r.type||'')+'</span><span class="detail-val">'+(r.detail||'')+'</span></div>'});
      html+='</div></div>';
    }
    if(d.outputResolution){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>输出信息</div><div class="detail-card">';
      html+='<div class="detail-row"><span class="detail-key">输出分辨率</span><span class="detail-val green">'+d.outputResolution+'</span></div>';
      html+='</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderSpaceDesign(report){
    const d=report.resultData;
    const warnings=d.warnings||[];
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    const style=d.style||d.recommendedStyle||'';
    const styles=d.style?[d.style]:(d.styles||[]);
    const spaceProblems=d.spaceProblems||(d.spaceAnalysis||[]);
    const colorPlan=d.colorPlan||(d.colorScheme||[]);
    const furnitureAdvice=d.furnitureAdvice||(d.furnitureSuggestions||[]);
    const softDecorationAdvice=d.softDecorationAdvice||[];
    let html='<div class="compare-container"><div class="compare-label"><div class="compare-label-item active">原始空间</div><div class="compare-label-item">AI效果图</div></div><div class="compare-imgs"><div class="compare-img-item before">原始空间</div><div class="compare-img-item after">AI生成效果图</div></div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    if(styles.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>推荐风格</div><div class="style-tags">';
      styles.forEach((s,i)=>{html+='<div class="style-tag'+(i===0?' active':'')+'">'+(typeof s==='string'?s:(s.name||''))+'</div>'});
      html+='</div></div>';
    }
    if(spaceProblems.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>空间问题分析</div><div class="detail-card">';
      spaceProblems.forEach(a=>{html+='<div class="detail-row"><span class="detail-val" style="text-align:left;width:100%">• '+(typeof a==='string'?a:(a.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(colorPlan.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>配色方案</div><div class="color-palette">';
      colorPlan.forEach((c,i)=>{html+='<div class="color-swatch'+(i===0?' active':'')+'" style="background:'+c+'"></div>'});
      html+='</div></div>';
    }
    if(furnitureAdvice.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>家具/软装建议</div><div class="furniture-grid">';
      furnitureAdvice.forEach(f=>{html+='<div class="furniture-item"><div class="furniture-item-icon">🪑</div><div class="furniture-item-name">'+(f.name||'')+'</div><div class="furniture-item-price">'+(f.price||'')+'</div></div>'});
      html+='</div></div>';
    }
    if(softDecorationAdvice.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>软装建议</div><div class="detail-card">';
      softDecorationAdvice.forEach(s=>{html+='<div class="detail-row"><span class="detail-val" style="text-align:left;width:100%">• '+(typeof s==='string'?s:(s.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(d.budgetRange){
      html+='<div class="budget-card"><div class="budget-title">预算区间</div><div class="budget-range">'+d.budgetRange+'</div><div class="budget-note">'+(d.budgetNote||'含基础硬装+主要家具软装，不含家电')+'</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderEcommerceReport(report){
    const d=report.resultData;
    const warnings=d.warnings||[];
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    const sellingPoints=d.sellingPoints||[];
    const mainImageAdvice=d.mainImageAdvice||(d.mainImageSuggestions||[]);
    const backgroundAdvice=d.backgroundAdvice||(d.backgroundSuggestions||[]);
    const platformAdvice=d.platformAdvice||(d.platformAdapt||[]);
    let html='<div class="compare-container"><div class="compare-label"><div class="compare-label-item active">原商品图</div><div class="compare-label-item">优化后</div></div><div class="compare-imgs"><div class="compare-img-item before">原商品图</div><div class="compare-img-item after">优化后商品图</div></div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    if(sellingPoints.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>卖点提取</div><div class="detail-card">';
      sellingPoints.forEach(s=>{html+='<div class="detail-row"><span class="detail-val gold" style="text-align:left;width:100%">✦ '+(typeof s==='string'?s:(s.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(mainImageAdvice.length){
      html+='<div class="suggest-card"><div class="suggest-title">📸 主图建议</div><ul class="suggest-list">';
      mainImageAdvice.forEach(s=>{html+='<li>'+(typeof s==='string'?s:(s.text||''))+'</li>'});
      html+='</ul></div>';
    }
    if(backgroundAdvice.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>背景建议</div><div class="detail-card">';
      backgroundAdvice.forEach(s=>{html+='<div class="detail-row"><span class="detail-val" style="text-align:left;width:100%">• '+(typeof s==='string'?s:(s.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(platformAdvice.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>平台适配建议</div><div class="detail-card">';
      platformAdvice.forEach(p=>{html+='<div class="detail-row"><span class="detail-key">'+(p.platform||'')+'</span><span class="detail-val">'+(p.size||'')+' '+(p.note||'')+'</span></div>'});
      html+='</div></div>';
    }
    if(d.exportOptions&&d.exportOptions.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>导出选项</div><div class="detail-card">';
      d.exportOptions.forEach(e=>{html+='<div class="detail-row"><span class="detail-key">'+(e.format||'')+'</span><span class="detail-val">'+(e.size||'')+'</span></div>'});
      html+='</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderLifeIdentify(report){
    const d=report.resultData;
    const warnings=d.warnings||[];
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    const possibleNames=d.possibleNames||[];
    const visibleFeatures=d.visibleFeatures||[];
    const similarObjects=d.similarObjects||[];
    const careOrUsageAdvice=d.careOrUsageAdvice||(d.careAdvice||[]);
    let html='<div class="img-preview"><div class="img-preview-inner original">识别对象预览区</div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>识别结果</div><div class="detail-card">';
    if(possibleNames.length){
      const top=possibleNames[0];
      html+='<div class="detail-row"><span class="detail-key">可能名称</span><span class="detail-val gold">'+(top.name||d.identifiedName||'')+'</span></div>';
      if(top.latinName||d.latinName)html+='<div class="detail-row"><span class="detail-key">拉丁学名</span><span class="detail-val">'+(top.latinName||d.latinName||'')+'</span></div>';
      html+='<div class="detail-row"><span class="detail-key">置信度</span><span class="detail-val'+((d.confidence||top.confidence||0)>=80?' green':' warn')+'">'+(d.confidence||top.confidence||0)+'%</span></div>';
    }else{
      html+='<div class="detail-row"><span class="detail-key">可能名称</span><span class="detail-val gold">'+(d.identifiedName||'未知')+'</span></div>';
      if(d.confidence)html+='<div class="detail-row"><span class="detail-key">置信度</span><span class="detail-val'+(d.confidence>=80?' green':' warn')+'">'+d.confidence+'%</span></div>';
    }
    html+='</div></div>';
    if(visibleFeatures.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>可见特征</div><div class="detail-card">';
      visibleFeatures.forEach(f=>{html+='<div class="detail-row"><span class="detail-val" style="text-align:left;width:100%">• '+(typeof f==='string'?f:(f.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(similarObjects.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>相似对象</div><div class="detail-card">';
      similarObjects.forEach(s=>{html+='<div class="detail-row"><span class="detail-key">'+(s.name||'')+' ('+(s.confidence||'')+')</span><span class="detail-val">'+(s.diff||'')+'</span></div>'});
      html+='</div></div>';
    }
    if(d.relatedKnowledge){
      html+='<div class="budget-card"><div class="budget-title">📚 相关知识</div><div style="font-size:13px;color:#92400E;line-height:1.6">'+d.relatedKnowledge+'</div></div>';
    }
    if(careOrUsageAdvice.length){
      html+='<div class="suggest-card"><div class="suggest-title">🌱 养护/使用建议</div><ul class="suggest-list">';
      careOrUsageAdvice.forEach(a=>{html+='<li>'+(typeof a==='string'?a:(a.text||''))+'</li>'});
      html+='</ul></div>';
    }
    if(d.uncertaintyNotes||d.uncertaintyNote){
      html+='<div class="risk-card"><div class="risk-title">ℹ️ 不确定性说明</div><div class="risk-text">'+(d.uncertaintyNotes||d.uncertaintyNote||'')+'</div></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  },
  _renderGeneralAnalysis(report){
    const d=report.resultData;
    const warnings=d.warnings||[];
    const actions=d.actions||(d.suggestions||[]).map(s=>({text:s,type:'submit'}));
    const possibleScenes=d.possibleScenes||[];
    const candidateCategories=d.candidateCategories||[];
    const visibleInformation=d.visibleInformation||(d.visibleInfo||[]);
    const suggestedNextActions=d.suggestedNextActions||[];
    let html='<div class="img-preview"><div class="img-preview-inner original">图片预览区</div></div>';
    html+='<div class="ai-summary"><div class="ai-summary-title">🤖 AI 摘要</div><div class="ai-summary-text">'+this._safeGet(d,'summary','')+'</div></div>';
    html+=this._renderValidationErrors(report);
    if(d.imageDescription||d.mainDescription){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>图片主体描述</div><div class="detail-card"><div class="detail-row"><span class="detail-val" style="text-align:left;width:100%">'+(d.imageDescription||d.mainDescription||'')+'</span></div></div></div>';
    }
    if(possibleScenes.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>可能场景</div><div class="detail-card">';
      possibleScenes.forEach(s=>{html+='<div class="detail-row"><span class="detail-key">'+(s.name||'')+'</span><span class="detail-val gold">'+(s.confidence||'')+'</span></div>'});
      html+='</div></div>';
    }
    if(candidateCategories.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>候选分类</div><div class="style-tags">';
      candidateCategories.forEach(c=>{html+='<div class="style-tag">'+(typeof c==='string'?c:(c.text||''))+'</div>'});
      html+='</div></div>';
    }
    if(visibleInformation.length){
      html+='<div class="detail-section"><div class="detail-section-title"><span class="dot"></span>可见信息</div><div class="detail-card">';
      visibleInformation.forEach(v=>{html+='<div class="detail-row"><span class="detail-val" style="text-align:left;width:100%">• '+(typeof v==='string'?v:(v.text||''))+'</span></div>'});
      html+='</div></div>';
    }
    if(d.uncertaintyReason||d.uncertainReasons){
      html+='<div class="risk-card"><div class="risk-title">❓ 不确定原因</div>';
      if(d.uncertaintyReason){html+='<div class="risk-text">'+d.uncertaintyReason+'</div>'}
      else if(d.uncertainReasons&&d.uncertainReasons.length){d.uncertainReasons.forEach(r=>{html+='<div class="risk-text">• '+r+'</div>'})}
      html+='</div>';
    }
    if(suggestedNextActions.length||(d.recommendedScenes&&d.recommendedScenes.length)){
      html+='<div class="suggest-card"><div class="suggest-title">🔄 建议切换场景</div><ul class="suggest-list">';
      if(suggestedNextActions.length){
        suggestedNextActions.forEach(a=>{
          const sid=a.sceneId;
          if(sid){const s=sceneRegistry[sid];if(s)html+='<li onclick="selectScene(\''+sid+'\')" style="cursor:pointer;color:#A16207">'+s.icon+' '+s.name+'</li>'}
          else{html+='<li>'+(a.text||'')+'</li>'}
        });
      }else{
        (d.recommendedScenes||[]).forEach(sid=>{const s=sceneRegistry[sid];if(s)html+='<li onclick="selectScene(\''+sid+'\')" style="cursor:pointer;color:#A16207">'+s.icon+' '+s.name+'</li>'});
      }
      html+='</ul></div>';
    }
    html+=this._renderWarnings(warnings);
    html+=this._renderActions(actions);
    html+=this._buildFooter(report);
    return html;
  }
};

let currentPage='page-home';
let pageHistory=[];
let currentSceneId=null;
let currentTaskId=null;
let currentFilter='all';
let currentMockUploadType=null;

const tabConfig=[
  {id:'page-home',label:'首页',icon:'<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>'},
  {id:'page-scan',label:'扫描',icon:'<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'},
  {id:'page-reports',label:'报告',icon:'<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>'},
  {id:'page-profile',label:'我的',icon:'<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>'}
];

function renderTabBar(pageId){
  const key=pageId.replace('page-','');
  const bar=document.getElementById('tabBar-'+key);
  if(!bar)return;
  bar.innerHTML=tabConfig.map(t=>{
    const isActive=t.id===pageId;
    return '<div class="tab-item'+(isActive?' active':'')+'" onclick="switchTab(\''+t.id+'\')"><div class="tab-icon">'+t.icon+'</div><span class="tab-label">'+t.label+'</span></div>';
  }).join('');
}

function switchTab(pageId){
  pageHistory=[];
  showPage(pageId);
  const labels={'page-home':'首页','page-scan':'扫描','page-reports':'报告','page-profile':'我的'};
  document.getElementById('currentPageLabel').textContent=labels[pageId]||'';
  if(pageId==='page-home')renderHome();
  if(pageId==='page-reports')renderReportList();
  if(pageId==='page-profile')renderProfile();
}

function navigateTo(pageId){
  pageHistory.push(currentPage);
  showPage(pageId);
  if(pageId==='page-scene-select')renderSceneSelect();
}

function goBack(){
  if(pageHistory.length>0){
    const prev=pageHistory.pop();
    showPage(prev);
  }else{
    switchTab('page-home');
  }
}

function showPage(pageId){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const page=document.getElementById(pageId);
  if(page)page.classList.add('active');
  currentPage=pageId;
  const tabPages=['page-home','page-scan','page-reports','page-profile'];
  if(tabPages.includes(pageId))renderTabBar(pageId);
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2000);
}

function renderHome(){
  renderTabBar('page-home');
  const resultGrid=document.getElementById('resultGrid');
  if(resultGrid){
    const results=[
      {icon:'📖',name:'看懂一张图',desc:'识别/读图/解读',bg:'#DBEAFE'},
      {icon:'✨',name:'修复一张图',desc:'修复/增强/上色',bg:'#FEF3C7'},
      {icon:'🏠',name:'设计一个空间',desc:'装修/户型/配色',bg:'#E0E7FF'},
      {icon:'🛒',name:'优化商品图',desc:'精修/换底/主图',bg:'#FFF7ED'},
      {icon:'🔍',name:'识别万物',desc:'花草/动物/物品',bg:'#F0FDF4'},
      {icon:'🔎',name:'通用分析',desc:'不确定？AI帮你',bg:'#F1F5F9'}
    ];
    resultGrid.innerHTML=results.map(r=>'<div class="result-card" onclick="navigateTo(\'page-scene-select\')"><div class="result-icon" style="background:'+r.bg+'">'+r.icon+'</div><div class="result-name">'+r.name+'</div><div class="result-desc">'+r.desc+'</div></div>').join('');
  }
  const hotScenes=document.getElementById('hotScenes');
  if(hotScenes){
    const hot=['oldPhotoRepair','medicalReport','drugInstruction','renovationEffect','productImageOpt','plantIdentify','invoiceRecognition','idPhotoOpt'];
    hotScenes.innerHTML=hot.map(sid=>{
      const s=sceneRegistry[sid];
      if(!s)return'';
      return '<div class="hot-card" onclick="selectScene(\''+sid+'\')"><div class="hot-card-img" style="background:'+s.iconBg+'">'+s.icon+'</div><div class="hot-card-info"><h4>'+s.name+'</h4><p>'+s.costCredits+'积分</p></div></div>';
    }).join('');
  }
}

function renderRecentReports(){
  const container=document.getElementById('recentReports');
  if(!container)return;
  const reports=reportManager.reports.slice(0,3);
  if(reports.length===0){
    container.innerHTML='<div style="text-align:center;padding:20px;color:#94A3B8;font-size:13px">暂无报告，开始你的第一次AI视觉体验吧</div>';
    return;
  }
  container.innerHTML=reports.map(r=>'<div class="report-item" onclick="openReportDetail(\''+r.reportId+'\')"><div class="report-icon" style="background:'+r.iconBg+'">'+r.icon+'</div><div class="report-info"><h4>'+r.title+'</h4><p>'+r.summary.substring(0,30)+'...</p></div><span class="report-status done">已完成</span></div>').join('');
}

function renderReportList(){
  renderTabBar('page-reports');
  const container=document.getElementById('reportListContainer');
  if(!container)return;
  const reports=reportManager.getFilteredReports(currentFilter);
  if(reports.length===0){
    container.innerHTML='<div class="empty-state"><div class="empty-icon">📋</div><div class="empty-title">暂无报告</div><div class="empty-desc">上传图片开始AI视觉分析</div></div>';
    return;
  }
  container.innerHTML='<div class="report-list">'+reports.map(r=>{
    const statusClass=r.status==='done'?'done':r.status==='processing'?'processing':'failed';
    const statusText=r.status==='done'?'已完成':r.status==='processing'?'处理中':'失败';
    return '<div class="report-item" onclick="openReportDetail(\''+r.reportId+'\')"><div class="report-icon" style="background:'+r.iconBg+'">'+r.icon+'</div><div class="report-info"><h4>'+r.title+'</h4><p>'+r.summary.substring(0,30)+(r.summary.length>30?'...':'')+'</p></div><span class="report-status '+statusClass+'">'+statusText+'</span></div>';
  }).join('')+'</div>';
}

function filterReports(filter,el){
  currentFilter=filter;
  document.querySelectorAll('.report-tab').forEach(t=>t.classList.remove('active'));
  if(el)el.classList.add('active');
  renderReportList();
}

function renderProfile(){
  renderTabBar('page-profile');
  document.getElementById('statReports').textContent=reportManager.reports.filter(r=>r.status==='done').length;
  document.getElementById('statProcessing').textContent=reportManager.reports.filter(r=>r.status==='processing').length;
}

function renderSceneSelect(){
  const container=document.getElementById('sceneSelectContent');
  if(!container)return;
  const categories={};
  Object.values(sceneRegistry).forEach(s=>{
    if(!categories[s.category])categories[s.category]=[];
    categories[s.category].push(s);
  });
  let html='';
  const order=['documentRead','healthReport','medicineReport','foodLabelReport','imageRepair','spaceDesign','ecommerceReport','lifeIdentify','generalAnalysis'];
  order.forEach(catKey=>{
    const cat=categoryMap[catKey];
    const scenes=categories[catKey];
    if(!cat||!scenes)return;
    html+='<div class="scene-category"><div class="scene-cat-title">'+cat.icon+' '+cat.name+'</div>';
    scenes.forEach(s=>{
      html+='<div class="scene-item" onclick="selectScene(\''+s.sceneId+'\')"><div class="scene-item-icon" style="background:'+s.iconBg+'">'+s.icon+'</div><div class="scene-item-info"><div class="scene-item-name">'+s.name+'</div><div class="scene-item-desc">'+s.description+'</div></div><div class="scene-item-cost">'+(s.costCredits===0?'免费':s.costCredits+'积分')+'</div></div>';
    });
    html+='</div>';
  });
  container.innerHTML=html;
}

function selectScene(sceneId){
  currentSceneId=sceneId;
  currentMockUploadType=null;
  const scene=sceneRegistry[sceneId];
  if(!scene)return;
  navigateTo('page-upload');
  renderUpload(sceneId);
}

function renderUpload(sceneId){
  const scene=sceneRegistry[sceneId];
  if(!scene)return;
  document.getElementById('uploadNavTitle').textContent=scene.name;
  const container=document.getElementById('uploadContent');
  if(!container)return;
  let html='<div class="scene-hero-card"><div class="scene-hero-icon" style="background:'+scene.iconBg+'">'+scene.icon+'</div><div class="scene-hero-title">'+scene.name+'</div><div class="scene-hero-desc">'+scene.description+'</div></div>';
  html+=_buildMockTypeSelector(sceneId);
  html+='<div class="upload-area" id="uploadArea" onclick="simulateUpload()"><div class="upload-area-icon"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg></div><div class="upload-area-text">点击上传文件</div><div class="upload-area-hint">支持拍照、相册选择、文档上传</div></div>';
  html+='<div class="upload-btns"><div class="upload-btn primary" onclick="simulateUpload()">📸 拍照</div><div class="upload-btn secondary" onclick="simulateUpload()">🖼️ 相册</div></div>';
  html+='<div class="features-list">';
  (scene.features||[]).forEach(f=>{
    html+='<div class="feature-item"><div class="feature-check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.42-1.41z"/></svg></div><div class="feature-text">'+f+'</div></div>';
  });
  html+='</div>';
  html+='<div class="cost-bar"><span class="cost-label">本次消耗</span><span class="cost-value">'+(scene.costCredits===0?'免费':scene.costCredits+' 积分')+'</span></div>';
  html+='<div class="submit-btn" onclick="simulateUpload()">开始处理 <span class="cost">'+(scene.costCredits===0?'免费':scene.costCredits+'积分')+'</span></div>';
  container.innerHTML=html;
}

function directUpload(type){
  currentSceneId=null;
  currentMockUploadType=null;
  navigateTo('page-upload');
  renderDirectUpload(type);
}

const _mockTypeOptions=[
  {key:'invoice',label:'发票',icon:'🧾'},
  {key:'lab_report',label:'化验单',icon:'🔬'},
  {key:'medicine_instruction',label:'药品说明书',icon:'💊'},
  {key:'food_label',label:'食品配料表',icon:'🏷️'},
  {key:'old_photo',label:'老照片',icon:'📷'},
  {key:'room_photo',label:'装修空间',icon:'🏠'},
  {key:'product_image',label:'商品图',icon:'🛒'},
  {key:'plant',label:'花草',icon:'🌿'},
  {key:'vegetable',label:'蔬菜水果',icon:'🥬'},
  {key:'animal',label:'动物',icon:'🐾'},
  {key:'unknown_image',label:'未知图片',icon:'❓'},
  {key:'medium_confidence_room',label:'中置信度室内',icon:'🏚️'},
  {key:'mismatch_lab_invoice',label:'错配：选化验单上传发票',icon:'⚠️'},
  {key:'mismatch_product_plant',label:'错配：选商品图上传花草',icon:'⚠️'}
];

function _buildMockTypeSelector(sceneId){
  let html='<div class="mock-selector"><div class="mock-selector-title">🧪 模拟上传内容（测试用）</div><div class="mock-selector-grid">';
  _mockTypeOptions.forEach(opt=>{
    const isActive=currentMockUploadType===opt.key;
    html+='<div class="mock-type-chip'+(isActive?' active':'')+'" onclick="setMockUploadType(\''+opt.key+'\')">'+opt.icon+' '+opt.label+'</div>';
  });
  html+='</div></div>';
  return html;
}

function setMockUploadType(type){
  currentMockUploadType=type;
  if(currentSceneId){
    renderUpload(currentSceneId);
  }else{
    renderDirectUpload('image');
  }
}

function renderDirectUpload(type){
  document.getElementById('uploadNavTitle').textContent=type==='document'?'上传文档':'上传图片';
  const container=document.getElementById('uploadContent');
  if(!container)return;
  let html='<div class="scene-hero-card"><div class="scene-hero-icon" style="background:#FEF3C7">🔍</div><div class="scene-hero-title">AI智能识别</div><div class="scene-hero-desc">上传文件，AI自动判断内容类型并匹配最佳场景</div></div>';
  html+=_buildMockTypeSelector(null);
  html+='<div class="upload-area" id="uploadArea" onclick="simulateUpload()"><div class="upload-area-icon"><svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg></div><div class="upload-area-text">点击上传文件</div><div class="upload-area-hint">支持拍照、相册选择、文档上传</div></div>';
  html+='<div class="upload-btns"><div class="upload-btn primary" onclick="simulateUpload()">📸 拍照</div><div class="upload-btn secondary" onclick="simulateUpload()">🖼️ 相册</div></div>';
  html+='<div class="features-list">';
  html+='<div class="feature-item"><div class="feature-check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.42-1.41z"/></svg></div><div class="feature-text">AI自动识别内容类型</div></div>';
  html+='<div class="feature-item"><div class="feature-check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.42-1.41z"/></svg></div><div class="feature-text">智能匹配最佳处理场景</div></div>';
  html+='<div class="feature-item"><div class="feature-check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.42-1.41z"/></svg></div><div class="feature-text">不确定时推荐通用分析</div></div>';
  html+='</div>';
  html+='<div class="cost-bar"><span class="cost-label">本次消耗</span><span class="cost-value">AI自动评估</span></div>';
  html+='<div class="submit-btn" onclick="simulateUpload()">开始处理 <span class="cost">AI自动识别</span></div>';
  container.innerHTML=html;
}

function simulateUpload(){
  if(!currentMockUploadType){
    showToast('请先选择模拟上传内容类型');
    return;
  }
  const uploadedFile={name:'image_20250519.jpg',size:'1.2MB',type:'image/jpeg'};
  const area=document.getElementById('uploadArea');
  if(area){area.classList.add('has-file');area.innerHTML='<div class="upload-area-icon" style="background:#DCFCE7"><svg viewBox="0 0 24 24" style="fill:#059669"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.42-1.41z"/></svg></div><div class="upload-area-text" style="color:#059669">文件已选择</div><div class="upload-area-hint">模拟上传: '+currentMockUploadType+'</div>'}
  showRoutingIndicator();
  setTimeout(()=>{
    hideRoutingIndicator();
    let selectedSceneId=currentSceneId;
    const routeResult=UniversalVisualRouter.route({
      selectedSceneId:selectedSceneId,
      file:uploadedFile,
      mockUploadType:currentMockUploadType
    });
    if(routeResult._impliedSelectedSceneId){
      selectedSceneId=routeResult._impliedSelectedSceneId;
      delete routeResult._impliedSelectedSceneId;
    }
    if(UniversalVisualRouter.shouldConfirm(routeResult,selectedSceneId)){
      showRouteConfirmDialog(routeResult,selectedSceneId,uploadedFile);
    }else{
      proceedWithRoute(routeResult,selectedSceneId,uploadedFile);
    }
  },500);
}

function showRoutingIndicator(){
  const area=document.getElementById('uploadArea');
  if(area){
    area.innerHTML='<div style="display:flex;align-items:center;justify-content:center;gap:8px;padding:20px"><div class="mini-spinner"></div><span style="color:#A16207;font-size:14px">AI正在识别内容...</span></div>';
  }
}

function hideRoutingIndicator(){}

function showRouteConfirmDialog(routeResult,selectedSceneId,uploadedFile){
  const dialog=document.getElementById('routeConfirmDialog');
  if(!dialog)return;
  const overlay=document.getElementById('routeConfirmOverlay');
  const selectedScene=sceneRegistry[selectedSceneId];
  const suggestedScene=sceneRegistry[routeResult.suggestedSceneId];
  const isMismatch=selectedSceneId&&routeResult.suggestedSceneId!==selectedSceneId;
  let html='<div class="confirm-header">';
  if(isMismatch){
    html+='<div class="confirm-icon warn">⚠️</div>';
    html+='<div class="confirm-title">场景不匹配</div>';
    html+='<div class="confirm-desc">上传内容与所选场景不一致</div>';
  }else if(routeResult.confidence<0.45){
    html+='<div class="confirm-icon">❓</div>';
    html+='<div class="confirm-title">无法确定内容类型</div>';
    html+='<div class="confirm-desc">AI无法高置信度识别上传内容</div>';
  }else{
    html+='<div class="confirm-icon">🔍</div>';
    html+='<div class="confirm-title">请确认场景</div>';
    html+='<div class="confirm-desc">AI识别结果需要您确认</div>';
  }
  html+='</div>';
  html+='<div class="confirm-body">';
  html+='<div class="confirm-row"><span class="confirm-label">识别内容</span><span class="confirm-value">'+routeResult.detectedObject+'</span></div>';
  html+='<div class="confirm-row"><span class="confirm-label">内容类型</span><span class="confirm-value">'+(routeResult.contentType==='document'?'文档':routeResult.contentType==='image'?'图片':'未知')+'</span></div>';
  html+='<div class="confirm-row"><span class="confirm-label">置信度</span><span class="confirm-value '+(routeResult.confidence>=0.75?'green':routeResult.confidence>=0.45?'warn':'red')+'">'+Math.round(routeResult.confidence*100)+'%</span></div>';
  html+='<div class="confirm-row"><span class="confirm-label">AI判断</span><span class="confirm-value">'+routeResult.reason+'</span></div>';
  if(isMismatch&&selectedScene){
    html+='<div class="confirm-mismatch">您选择了「'+selectedScene.name+'」，但上传内容更像「'+routeResult.detectedObject+'」</div>';
  }
  if(routeResult.candidateScenes&&routeResult.candidateScenes.length>0){
    html+='<div class="confirm-candidates"><div class="confirm-candidates-title">候选场景</div>';
    routeResult.candidateScenes.forEach(cs=>{
      const cs2=sceneRegistry[cs.sceneId];
      if(cs2){
        html+='<div class="confirm-candidate-item" onclick="selectCandidateScene(\''+cs.sceneId+'\')">';
        html+='<span class="candidate-icon" style="background:'+cs2.iconBg+'">'+cs2.icon+'</span>';
        html+='<span class="candidate-name">'+cs.name+'</span>';
        html+='<span class="candidate-conf">'+Math.round(cs.confidence*100)+'%</span>';
        html+='</div>';
      }
    });
    html+='</div>';
  }
  html+='</div>';
  html+='<div class="confirm-actions">';
  if(suggestedScene){
    html+='<div class="confirm-btn primary" onclick="confirmRouteChoice(\'suggested\')">'+suggestedScene.icon+' 使用「'+suggestedScene.name+'」</div>';
  }
  if(isMismatch&&selectedScene){
    html+='<div class="confirm-btn secondary" onclick="confirmRouteChoice(\'original\')">仍按「'+selectedScene.name+'」处理</div>';
  }
  html+='<div class="confirm-btn outline" onclick="confirmRouteChoice(\'general\')">🔎 使用通用图片分析</div>';
  html+='</div>';
  dialog.innerHTML=html;
  if(overlay)overlay.classList.add('show');
  dialog.classList.add('show');
  window._pendingRouteResult=routeResult;
  window._pendingSelectedSceneId=selectedSceneId;
  window._pendingUploadedFile=uploadedFile;
}

function selectCandidateScene(sceneId){
  const routeResult=window._pendingRouteResult;
  const uploadedFile=window._pendingUploadedFile;
  closeRouteConfirmDialog();
  const scene=sceneRegistry[sceneId];
  if(!scene){showToast('场景不存在');return}
  currentSceneId=sceneId;
  const resolved=UniversalVisualRouter.resolveRoute(routeResult,window._pendingSelectedSceneId,'suggested');
  resolved.finalSceneId=sceneId;
  resolved.finalReportType=scene.reportType;
  resolved.outputSchemaKey=scene.outputSchemaKey;
  resolved.extractorPromptKey=scene.extractorPromptKey;
  createTaskWithRoute(resolved,uploadedFile);
}

function confirmRouteChoice(choice){
  const routeResult=window._pendingRouteResult;
  const selectedSceneId=window._pendingSelectedSceneId;
  const uploadedFile=window._pendingUploadedFile;
  closeRouteConfirmDialog();
  const resolved=UniversalVisualRouter.resolveRoute(routeResult,selectedSceneId,choice);
  if(choice==='suggested'||choice==='general'){
    currentSceneId=resolved.finalSceneId;
  }
  createTaskWithRoute(resolved,uploadedFile);
}

function closeRouteConfirmDialog(){
  const dialog=document.getElementById('routeConfirmDialog');
  const overlay=document.getElementById('routeConfirmOverlay');
  if(dialog)dialog.classList.remove('show');
  if(overlay)overlay.classList.remove('show');
}

function proceedWithRoute(routeResult,selectedSceneId,uploadedFile){
  const resolved=UniversalVisualRouter.resolveRoute(routeResult,selectedSceneId,null);
  createTaskWithRoute(resolved,uploadedFile);
}

function createTaskWithRoute(resolved,uploadedFile){
  const scene=sceneRegistry[resolved.finalSceneId];
  if(!scene){showToast('场景不存在');return}
  const task=taskManager.createTask(resolved.finalSceneId);
  if(!task){showToast('创建任务失败');return}
  task.inputFiles=[uploadedFile||{name:'image_20250519.jpg',size:'1.2MB',type:'image/jpeg'}];
  task.reportType=resolved.finalReportType;
  task.routeResult=resolved.routeResult;
  task.detectedSceneId=resolved.routeResult?resolved.routeResult.suggestedSceneId:null;
  task.selectedSceneId=resolved.finalSceneId;
  task.confidence=resolved.confidence;
  task.needUserConfirm=resolved.needUserConfirm;
  task.outputSchemaKey=resolved.outputSchemaKey;
  task.extractorPromptKey=resolved.extractorPromptKey;
  task.routeMode=resolved.routeMode||'auto';
  task.userRouteChoice=resolved.userRouteChoice||null;
  currentTaskId=task.taskId;
  setTimeout(()=>{
    navigateTo('page-processing');
    startProcessing(task.taskId);
  },300);
}

function startProcessing(taskId){
  const container=document.getElementById('processingContent');
  if(!container)return;
  container.innerHTML='<div class="processing-center"><div class="processing-spinner"></div><div class="processing-text" id="procText">准备中...</div><div class="processing-step" id="procStep">正在初始化任务</div><div class="processing-bar"><div class="processing-bar-fill" id="procBar" style="width:0%"></div></div></div>';
  mockAIService.processTask(taskId).then(result=>{
    if(result&&result.report){
      openReportDetail(result.report.reportId);
    }else{
      showToast('处理失败，请重试');
      goBack();
    }
  }).catch(err=>{
    showToast('处理异常: '+err);
    goBack();
  });
}

function updateProcessingUI(taskId,stepText){
  const task=taskManager.getTask(taskId);
  if(!task)return;
  const bar=document.getElementById('procBar');
  const step=document.getElementById('procStep');
  const text=document.getElementById('procText');
  if(bar)bar.style.width=task.progress+'%';
  if(step)step.textContent=stepText;
  if(text)text.textContent=task.progress>=100?'处理完成':'处理中 '+task.progress+'%';
}

function openReportDetail(reportId){
  const report=reportManager.getReport(reportId);
  if(!report){showToast('报告不存在');return}
  pageHistory=pageHistory.filter(p=>p!=='page-processing');
  navigateTo('page-report-detail');
  reportTemplate.render(report);
}

function init(){
  renderHome();
  renderTabBar('page-home');
  renderTabBar('page-scan');
  renderTabBar('page-reports');
  renderTabBar('page-profile');
}

document.addEventListener('DOMContentLoaded',init);