const checkLogin = (): Promise<WechatMiniprogram.UserInfo> => {
  return new Promise((resolve, reject) => {
    wx.getUserProfile({
      desc: '用于完善个人资料',
      success: (res) => resolve(res.userInfo),
      fail: (err) => reject(err)
    })
  })
}

const ensureLogin = async (): Promise<WechatMiniprogram.UserInfo> => {
  const app = getApp<IAppOption>()
  if (app.globalData.userInfo) {
    return app.globalData.userInfo
  }
  const userInfo = await checkLogin()
  app.globalData.userInfo = userInfo
  return userInfo
}

export { checkLogin, ensureLogin }
