Page({
  data: {
    activeTab: 0,
    tabs: ['全部', '照片修复', '读图', '健康', '装修', '风格'],
    scenes: [] as IScene[],
    filteredScenes: [] as IScene[]
  },

  onLoad() {
    this.initScenes()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  },

  initScenes() {
    const scenes: IScene[] = [
      { id: 's1', icon: 'image', title: '老照片修复', count: 3, desc: '修复破损、褪色的老照片', tags: ['黑白上色', '清晰化', '去划痕'], bgColor: 'var(--color-icon-bg-blue)' },
      { id: 's2', icon: 'image', title: '人像修复', count: 2, desc: '修复模糊、受损的人像照片', tags: ['人脸增强', '去噪'], bgColor: 'var(--color-icon-bg-blue)' },
      { id: 's3', icon: 'browse', title: '植物识别', count: 1, desc: '识别花草树木的种类', tags: ['花卉', '树木'], bgColor: 'var(--color-icon-bg-green)' },
      { id: 's4', icon: 'browse', title: '动物识别', count: 1, desc: '识别动物的品种', tags: ['宠物', '野生动物'], bgColor: 'var(--color-icon-bg-green)' },
      { id: 's5', icon: 'browse', title: '菜品识别', count: 1, desc: '识别菜品名称和热量', tags: ['热量', '菜名'], bgColor: 'var(--color-icon-bg-green)' },
      { id: 's6', icon: 'heart', title: '皮肤观察', count: 2, desc: 'AI分析皮肤状况', tags: ['痘痘', '色斑'], bgColor: 'var(--color-icon-bg-pink)' },
      { id: 's7', icon: 'heart', title: '体型观察', count: 1, desc: 'AI分析体型变化', tags: ['BMI', '体态'], bgColor: 'var(--color-icon-bg-pink)' },
      { id: 's8', icon: 'home', title: '客厅效果图', count: 2, desc: '生成客厅装修效果图', tags: ['现代', '北欧'], bgColor: 'var(--color-icon-bg-indigo)' },
      { id: 's9', icon: 'home', title: '卧室效果图', count: 2, desc: '生成卧室装修效果图', tags: ['温馨', '简约'], bgColor: 'var(--color-icon-bg-indigo)' },
      { id: 's10', icon: 'palette', title: '油画风格', count: 1, desc: '将照片转为油画风格', tags: ['印象派', '古典'], bgColor: 'var(--color-icon-bg-purple)' },
      { id: 's11', icon: 'palette', title: '动漫风格', count: 1, desc: '将照片转为动漫风格', tags: ['日漫', '国漫'], bgColor: 'var(--color-icon-bg-purple)' }
    ]
    this.setData({ scenes, filteredScenes: scenes })
  },

  onTabChange(e: WechatMiniprogram.CustomEvent) {
    const index = e.detail.value
    const tabName = this.data.tabs[index]
    let filtered = this.data.scenes
    if (index > 0) {
      const filterMap: Record<string, string> = {
        '照片修复': 'image', '读图': 'browse', '健康': 'heart', '装修': 'home', '风格': 'palette'
      }
      const filterIcon = filterMap[tabName]
      filtered = this.data.scenes.filter(s => s.icon === filterIcon)
    }
    this.setData({ activeTab: index, filteredScenes: filtered })
  },

  onSceneTap(e: WechatMiniprogram.CustomEvent) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/function/${id}/${id}` })
  }
})
