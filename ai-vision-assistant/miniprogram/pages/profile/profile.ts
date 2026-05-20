Page({
  data: {
    isLogin: false,
    userInfo: null as WechatMiniprogram.UserInfo | null,
    credits: 10,
    isVip: false,
    menuList: [
      { id: 'recharge', icon: 'wallet', label: '充值点数' },
      { id: 'vip', icon: 'vip', label: '会员中心' },
      { id: 'history', icon: 'time', label: '使用记录' },
      { id: 'feedback', icon: 'chat', label: '意见反馈' },
      { id: 'about', icon: 'info-circle', label: '关于我们' }
    ] as IMenuItem[]
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 3 })
    }
  },

  onLoginTap() {
    wx.getUserProfile({
      desc: '用于完善个人资料',
      success: (res) => {
        this.setData({
          isLogin: true,
          userInfo: res.userInfo
        })
      },
      fail: () => {
        console.log('用户拒绝授权')
      }
    })
  },

  onMenuTap(e: WechatMiniprogram.CustomEvent) {
    const { id } = e.currentTarget.dataset
    switch (id) {
      case 'recharge':
        console.log('充值点数')
        break
      case 'vip':
        console.log('会员中心')
        break
      case 'history':
        wx.switchTab({ url: '/pages/task/task' })
        break
      case 'feedback':
        console.log('意见反馈')
        break
      case 'about':
        console.log('关于我们')
        break
    }
  }
})
