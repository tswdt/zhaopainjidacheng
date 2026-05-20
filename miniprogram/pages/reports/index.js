const { reportManager } = require('../../services/managers');

Page({
  data: {
    currentFilter: 'all',
    reports: []
  },

  onLoad() {
    reportManager._loadFromStorage();
  },

  onShow() {
    this._loadReports();
  },

  _loadReports() {
    const reports = reportManager.getFilteredReports(this.data.currentFilter);
    this.setData({ reports });
  },

  filterReports(e) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({ currentFilter: filter });
    this._loadReports();
  },

  openReportDetail(e) {
    const reportId = e.currentTarget.dataset.reportId;
    if (reportId) {
      wx.navigateTo({ url: '/pages/report-detail/index?reportId=' + reportId });
    }
  }
});
