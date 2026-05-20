const { sceneRegistry } = require('../../services/sceneRegistry');
const app = getApp();

Page({
  data: {
    quickScenes: []
  },

  onLoad() {
    const quickIds = ['invoiceRecognition', 'medicalReport', 'drugInstruction', 'oldPhotoRepair', 'plantIdentify', 'productImageOpt'];
    const quickScenes = quickIds.map(id => sceneRegistry[id]).filter(Boolean);
    this.setData({ quickScenes });
  },

  takePhoto() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera'],
      success: () => {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      },
      fail: () => {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      }
    });
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: () => {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      },
      fail: () => {
        wx.navigateTo({ url: '/pages/upload/index?directType=image' });
      }
    });
  },

  chooseDocument() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: () => {
        wx.navigateTo({ url: '/pages/upload/index?directType=document' });
      },
      fail: () => {
        wx.navigateTo({ url: '/pages/upload/index?directType=document' });
      }
    });
  },

  batchProcess() {
    wx.navigateTo({ url: '/pages/upload/index?directType=image&batch=true' });
  },

  selectScene(e) {
    const sceneId = e.currentTarget.dataset.sceneId;
    if (sceneId) {
      wx.navigateTo({ url: '/pages/upload/index?sceneId=' + sceneId });
    }
  }
});
