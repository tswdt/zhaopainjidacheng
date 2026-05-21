const { reportManager } = require('../../services/managers');

Page({
  data: {
    reportId: '',
    report: {},
    result: {}
  },

  onLoad(options) {
    const reportId = options.reportId;
    if (!reportId) {
      wx.showToast({ title: '报告不存在', icon: 'none' });
      return;
    }
    const report = reportManager.getReport(reportId);
    if (!report) {
      wx.showToast({ title: '报告不存在', icon: 'none' });
      return;
    }
    this.setData({
      reportId,
      report,
      result: report.resultData || report.result || {}
    });
    wx.setNavigationBarTitle({ title: report.title || '报告详情' });
  },

  shareReport() {
    wx.showModal({
      title: '分享报告',
      content: '分享功能即将上线，敬请期待',
      showCancel: false
    });
  },

  exportReport() {
    wx.showModal({
      title: '导出报告',
      content: 'PDF导出功能即将上线，敬请期待',
      showCancel: false
    });
  },

  reProcess() {
    wx.showModal({
      title: '重新处理',
      content: '是否重新处理该任务？',
      success: (res) => {
        if (res.confirm && this.data.report.sceneId) {
          wx.navigateTo({ url: '/pages/upload/index?sceneId=' + this.data.report.sceneId });
        }
      }
    });
  },

  goToScene(e) {
    const sceneId = e.currentTarget.dataset.sceneId;
    if (sceneId) {
      wx.navigateTo({ url: '/pages/upload/index?sceneId=' + sceneId });
    }
  }
});
