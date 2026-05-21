const { sceneRegistry } = require('../../services/sceneRegistry');
const app = getApp();

Page({
  data: {
    capabilities: [
      { iconName: 'book', iconColor: '#2563EB', name: '智能读图', desc: '发票、合同、报告解读', bg: '#DBEAFE' },
      { iconName: 'sparkle', iconColor: '#D97706', name: '照片修复', desc: '老照片修复、增强、上色', bg: '#FEF3C7' },
      { iconName: 'palette', iconColor: '#6366F1', name: '空间设计', desc: '装修效果图、户型、配色', bg: '#E0E7FF' },
      { iconName: 'store', iconColor: '#EA580C', name: '商品图优化', desc: '精修、换背景、主图', bg: '#FFF7ED' },
      { iconName: 'search', iconColor: '#059669', name: '万物识别', desc: '花草、动物、物品识别', bg: '#F0FDF4' },
      { iconName: 'target', iconColor: '#475569', name: '通用分析', desc: '不确定类型？AI帮你分析', bg: '#F1F5F9' }
    ],
    hotScenes: []
  },

  onLoad() {
    var iconMap = {
      oldPhotoRepair: { iconName: 'image', iconColor: '#D97706', iconBg: '#FFF8E7' },
      medicalReport: { iconName: 'chart', iconColor: '#059669', iconBg: '#E8F5E9' },
      drugInstruction: { iconName: 'pill', iconColor: '#DC2626', iconBg: '#FFEBEE' },
      renovationEffect: { iconName: 'sofa', iconColor: '#6366F1', iconBg: '#EDE9FE' },
      productImageOpt: { iconName: 'gem', iconColor: '#EA580C', iconBg: '#FFF3E0' },
      plantIdentify: { iconName: 'leaf', iconColor: '#059669', iconBg: '#E8F5E9' },
      invoiceRecognition: { iconName: 'document', iconColor: '#475569', iconBg: '#F5F5F5' },
      idPhotoOpt: { iconName: 'user', iconColor: '#B87300', iconBg: '#FFF8E7' }
    };
    var hotIds = ['oldPhotoRepair', 'medicalReport', 'drugInstruction', 'renovationEffect', 'productImageOpt', 'plantIdentify', 'invoiceRecognition', 'idPhotoOpt'];
    var hotScenes = hotIds.map(function(id) {
      var scene = sceneRegistry[id];
      if (!scene) return null;
      var iconInfo = iconMap[id] || { iconName: 'document', iconColor: '#475569', iconBg: '#F5F5F5' };
      return Object.assign({}, scene, iconInfo);
    }).filter(Boolean);
    this.setData({ hotScenes: hotScenes });
  },

  goScan() {
    wx.switchTab({ url: '/pages/scan/index' });
  },

  goSceneSelect() {
    wx.navigateTo({ url: '/pages/scene-select/index' });
  },

  goItemManage() {
    wx.navigateTo({ url: '/pages/upload/index?sceneId=itemManagement' });
  },

  selectScene(e) {
    var sceneId = e.currentTarget.dataset.sceneId;
    if (sceneId) {
      wx.navigateTo({ url: '/pages/upload/index?sceneId=' + sceneId });
    }
  }
});
