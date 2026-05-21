const { sceneRegistry } = require('../../services/sceneRegistry');
const app = getApp();

Page({
  data: {
    quickScenes: []
  },

  onLoad() {
    var iconMap = {
      invoiceRecognition: { iconName: 'document', iconColor: '#475569' },
      medicalReport: { iconName: 'chart', iconColor: '#DC2626' },
      drugInstruction: { iconName: 'pill', iconColor: '#2563EB' },
      oldPhotoRepair: { iconName: 'image', iconColor: '#D97706' },
      plantIdentify: { iconName: 'leaf', iconColor: '#059669' },
      productImageOpt: { iconName: 'gem', iconColor: '#EA580C' }
    };
    var quickIds = ['invoiceRecognition', 'medicalReport', 'drugInstruction', 'oldPhotoRepair', 'plantIdentify', 'productImageOpt'];
    var quickScenes = quickIds.map(function(id) {
      var scene = sceneRegistry[id];
      if (!scene) return null;
      var iconInfo = iconMap[id] || { iconName: 'document', iconColor: '#475569' };
      return Object.assign({}, scene, iconInfo);
    }).filter(Boolean);
    this.setData({ quickScenes: quickScenes });
  },

  takePhoto() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera'],
      success: function() {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      },
      fail: function() {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      }
    });
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: function() {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      },
      fail: function() {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      }
    });
  },

  chooseDocument() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: function() {
        wx.navigateTo({ url: '/pages/upload/index?directType=document' });
      },
      fail: function() {
        wx.navigateTo({ url: '/pages/upload/index?directType=document' });
      }
    });
  },

  batchProcess() {
    wx.navigateTo({ url: '/pages/upload/index?directType=image&batch=true' });
  },

  selectScene(e) {
    var sceneId = e.currentTarget.dataset.sceneId;
    if (sceneId) {
      wx.navigateTo({ url: '/pages/upload/index?sceneId=' + sceneId });
    }
  }
});
