const { reportManager } = require('../../services/managers');
const app = getApp();

Page({
  data: {
    credits: 100,
    statReports: 0,
    statProcessing: 0
  },

  onLoad() {
    reportManager._loadFromStorage();
  },

  onShow() {
    this.setData({
      credits: app.globalData.credits,
      statReports: reportManager.reports.filter(r => r.status === 'done').length,
      statProcessing: reportManager.reports.filter(r => r.status === 'processing').length
    });
  },

  rechargeCredits() {
    wx.showModal({
      title: '充值积分',
      content: '该功能即将上线，敬请期待',
      showCancel: false
    });
  },

  goCreditsDetail() {
    wx.showModal({
      title: '积分明细',
      content: '该功能即将上线，敬请期待',
      showCancel: false
    });
  },

  subscribeMember() {
    wx.showModal({
      title: '会员订阅',
      content: '该功能即将上线，敬请期待',
      showCancel: false
    });
  },

  goOrders() {
    wx.showModal({
      title: '订单记录',
      content: '该功能即将上线，敬请期待',
      showCancel: false
    });
  },

  goSettings() {
    wx.showModal({
      title: '设置',
      content: '该功能即将上线，敬请期待',
      showCancel: false
    });
  },

  goAbout() {
    wx.showModal({
      title: '关于我们',
      content: 'AI视觉分析平台 v1.0\n拍照即识别，智能分析一切',
      showCancel: false
    });
  }
});
