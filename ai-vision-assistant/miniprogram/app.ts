App({
  onLaunch() {
    console.log('AI视觉助手启动')
  },
  globalData: {
    userInfo: null as WechatMiniprogram.UserInfo | null,
    credits: 0,
    vipExpireTime: null as number | null
  }
})
