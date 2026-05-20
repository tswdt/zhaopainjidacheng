Page({
  data: {
    activeTab: 0,
    tabs: ['全部', '处理中', '已完成'],
    tasks: [] as ITask[],
    filteredTasks: [] as ITask[]
  },

  onLoad() {
    this.initTasks()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 })
    }
  },

  onPullDownRefresh() {
    this.initTasks()
    wx.stopPullDownRefresh()
  },

  initTasks() {
    const tasks: ITask[] = [
      {
        _id: 't1', userId: 'u1', type: 'photo-restore',
        options: { style: 'colorize' }, status: 'completed',
        inputImage: '', outputImage: '',
        creditsCost: 2, createdAt: Date.now() - 3600000, completedAt: Date.now() - 3540000
      },
      {
        _id: 't2', userId: 'u1', type: 'decoration',
        options: { room: 'living', style: 'modern' }, status: 'processing',
        inputImage: '', outputImage: '',
        creditsCost: 5, createdAt: Date.now() - 60000, completedAt: null
      },
      {
        _id: 't3', userId: 'u1', type: 'health-check',
        options: { type: 'skin' }, status: 'completed',
        inputImage: '', outputImage: '',
        creditsCost: 3, createdAt: Date.now() - 86400000, completedAt: Date.now() - 86340000
      }
    ]
    this.setData({ tasks, filteredTasks: tasks })
  },

  onTabChange(e: WechatMiniprogram.CustomEvent) {
    const index = e.detail.value
    let filtered = this.data.tasks
    if (index === 1) {
      filtered = this.data.tasks.filter(t => t.status === 'processing' || t.status === 'pending')
    } else if (index === 2) {
      filtered = this.data.tasks.filter(t => t.status === 'completed')
    }
    this.setData({ activeTab: index, filteredTasks: filtered })
  },

  onTaskTap(e: WechatMiniprogram.CustomEvent) {
    const { id } = e.currentTarget.dataset
    console.log('任务点击:', id)
  },

  getTypeLabel(type: string): string {
    const map: Record<string, string> = {
      'photo-restore': '照片修复',
      'decoration': '装修效果图',
      'health-check': '健康观察',
      'image-read': '读图',
      'style-transfer': '风格转换'
    }
    return map[type] || type
  },

  getStatusLabel(status: string): string {
    const map: Record<string, string> = {
      'pending': '排队中',
      'processing': '处理中',
      'completed': '已完成',
      'failed': '失败'
    }
    return map[status] || status
  },

  formatTime(timestamp: number): string {
    const diff = Date.now() - timestamp
    if (diff < 60000) return '刚刚'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`
    return `${Math.floor(diff / 86400000)}天前`
  }
})
