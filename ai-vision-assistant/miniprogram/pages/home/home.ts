Page({
  data: {
    searchValue: '',
    bannerList: [
      { id: '1', image: '', title: '老照片修复', subtitle: '让珍贵回忆焕然一新' },
      { id: '2', image: '', title: '装修效果图', subtitle: '一键生成理想家居' },
      { id: '3', image: '', title: '健康观察', subtitle: 'AI守护您的健康' }
    ],
    capabilities: [] as ICapability[],
    hotList: [] as IHotItem[],
    recentList: [] as IRecentItem[]
  },

  onLoad() {
    this.initData()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  initData() {
    this.setData({
      capabilities: [
        { id: 'photo-restore', icon: 'image', label: '照片修复', bgColor: 'var(--color-icon-bg-blue)' },
        { id: 'image-read', icon: 'browse', label: '读图', bgColor: 'var(--color-icon-bg-green)' },
        { id: 'health-check', icon: 'heart', label: '健康观察', bgColor: 'var(--color-icon-bg-pink)' },
        { id: 'decoration', icon: 'home', label: '装修效果', bgColor: 'var(--color-icon-bg-indigo)' },
        { id: 'style-transfer', icon: 'palette', label: '风格转换', bgColor: 'var(--color-icon-bg-purple)' },
        { id: 'more', icon: 'ellipsis', label: '更多', bgColor: 'var(--color-icon-bg-amber)' }
      ],
      hotList: [
        { id: 'h1', icon: 'image', title: '老照片修复', price: '2点/次', bgColor: 'var(--color-icon-bg-blue)' },
        { id: 'h2', icon: 'home', title: '装修效果图', price: '5点/次', bgColor: 'var(--color-icon-bg-indigo)' },
        { id: 'h3', icon: 'heart', title: '健康观察', price: '3点/次', bgColor: 'var(--color-icon-bg-pink)' }
      ],
      recentList: [
        { id: 'r1', icon: 'image', title: '老照片修复', time: '2分钟前' },
        { id: 'r2', icon: 'home', title: '装修效果图', time: '1小时前' }
      ]
    })
  },

  onSearch(e: WechatMiniprogram.CustomEvent) {
    console.log('搜索:', e.detail.value)
  },

  onCapabilityTap(e: WechatMiniprogram.CustomEvent) {
    const { id } = e.currentTarget.dataset
    if (id === 'more') return
    wx.navigateTo({ url: `/pages/function/${id}/${id}` })
  },

  onHotItemTap(e: WechatMiniprogram.CustomEvent) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/function/${id}/${id}` })
  },

  onRecentItemTap(e: WechatMiniprogram.CustomEvent) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/function/${id}/${id}` })
  },

  onBannerTap(e: WechatMiniprogram.CustomEvent) {
    console.log('Banner点击:', e.detail.index)
  }
})
