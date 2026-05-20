Component({
  properties: {
    credits: {
      type: Number,
      value: 0
    }
  },

  lifetimes: {
    attached() {
      const app = getApp<IAppOption>()
      this.setData({ credits: app.globalData.credits || 10 })
    }
  }
})
