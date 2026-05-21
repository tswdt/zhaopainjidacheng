const { taskManager, reportManager } = require('../../services/managers');
const { mockAIService } = require('../../services/mockAIService');

Page({
  data: {
    taskId: '',
    progress: 0,
    progressText: '准备中...',
    stepText: '正在初始化任务',
    done: false
  },

  _pollTimer: null,

  onLoad(options) {
    const taskId = options.taskId;
    if (!taskId) {
      wx.showToast({ title: '任务不存在', icon: 'none' });
      return;
    }
    this.setData({ taskId });
    this._startProcessing(taskId);
  },

  onUnload() {
    if (this._pollTimer) {
      clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
  },

  cancelProcessing() {
    var self = this;
    wx.showModal({
      title: '确认取消',
      content: '取消后当前处理进度将丢失，确定要取消吗？',
      confirmText: '取消处理',
      cancelText: '继续等待',
      confirmColor: '#DC2626',
      success: function(res) {
        if (res.confirm) {
          if (self._pollTimer) {
            clearInterval(self._pollTimer);
            self._pollTimer = null;
          }
          if (self.data.taskId) {
            var task = taskManager.getTask(self.data.taskId);
            if (task) {
              taskManager.updateTask(self.data.taskId, { status: 'cancelled' });
            }
          }
          wx.navigateBack();
        }
      }
    });
  },

  _startProcessing(taskId) {
    mockAIService.processTask(taskId).then(result => {
      if (result && result.report) {
        this.setData({
          progress: 100,
          progressText: '处理完成',
          stepText: '正在跳转报告详情...',
          done: true
        });
        if (this._pollTimer) {
          clearInterval(this._pollTimer);
          this._pollTimer = null;
        }
        setTimeout(() => {
          wx.redirectTo({ url: '/pages/report-detail/index?reportId=' + result.report.reportId });
        }, 500);
      } else {
        wx.showToast({ title: '处理失败，请重试', icon: 'none' });
        setTimeout(() => wx.navigateBack(), 1500);
      }
    }).catch(err => {
      wx.showToast({ title: '处理异常: ' + err, icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
    });

    this._pollProgress(taskId);
  },

  _pollProgress(taskId) {
    this._pollTimer = setInterval(() => {
      const task = taskManager.getTask(taskId);
      if (!task) {
        clearInterval(this._pollTimer);
        this._pollTimer = null;
        return;
      }
      const progress = task.progress || 0;
      let stepText = '正在初始化任务';
      if (progress >= 30) stepText = 'AI正在分析内容...';
      if (progress >= 50) stepText = '正在生成报告...';
      if (progress >= 70) stepText = '正在校验数据...';
      if (progress >= 90) stepText = '即将完成...';
      if (progress >= 100) stepText = '处理完成';

      this.setData({
        progress,
        progressText: progress >= 100 ? '处理完成' : '处理中 ' + progress + '%',
        stepText,
        done: progress >= 100
      });

      if (progress >= 100 || task.status === 'done' || task.status === 'failed') {
        clearInterval(this._pollTimer);
        this._pollTimer = null;
      }
    }, 200);
  }
});
