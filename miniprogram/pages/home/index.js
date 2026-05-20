const { sceneRegistry } = require('../../services/sceneRegistry');
const app = getApp();

Page({
  data: {
    capabilities: [
      { icon: '📖', name: '看懂一张图', desc: '识别/读图/解读', bg: '#DBEAFE' },
      { icon: '✨', name: '修复一张图', desc: '修复/增强/上色', bg: '#FEF3C7' },
      { icon: '🏠', name: '设计一个空间', desc: '装修/户型/配色', bg: '#E0E7FF' },
      { icon: '🛒', name: '优化商品图', desc: '精修/换底/主图', bg: '#FFF7ED' },
      { icon: '🔍', name: '识别万物', desc: '花草/动物/物品', bg: '#F0FDF4' },
      { icon: '🔎', name: '通用分析', desc: '不确定？AI帮你', bg: '#F1F5F9' }
    ],
    hotScenes: []
  },

  onLoad() {
    const hotIds = ['oldPhotoRepair', 'medicalReport', 'drugInstruction', 'renovationEffect', 'productImageOpt', 'plantIdentify', 'invoiceRecognition', 'idPhotoOpt'];
    const hotScenes = hotIds.map(id => sceneRegistry[id]).filter(Boolean);
    this.setData({ hotScenes });
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
    const sceneId = e.currentTarget.dataset.sceneId;
    if (sceneId) {
      wx.navigateTo({ url: '/pages/upload/index?sceneId=' + sceneId });
    }
  }
});
