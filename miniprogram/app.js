App({
  onLaunch() {
    const stored = wx.getStorageSync('app_state') || {};
    this.globalData = {
      credits: stored.credits !== undefined ? stored.credits : 100,
      currentSceneId: null,
      currentTaskId: null,
      currentMockUploadType: null
    };
  },
  globalData: {
    credits: 100,
    currentSceneId: null,
    currentTaskId: null,
    currentMockUploadType: null
  },
  saveState() {
    wx.setStorageSync('app_state', {
      credits: this.globalData.credits
    });
  }
});
