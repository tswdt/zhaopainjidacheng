Component({
  properties: {
    maxSize: {
      type: Number,
      value: 10 * 1024 * 1024
    }
  },

  methods: {
    onChooseImage() {
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album', 'camera'],
        sizeType: ['compressed'],
        success: (res) => {
          const tempFile = res.tempFiles[0]
          if (tempFile.size > this.data.maxSize) {
            wx.showToast({ title: '图片大小不能超过10MB', icon: 'none' })
            return
          }
          this.triggerEvent('choose', { url: tempFile.tempFilePath })
        }
      })
    },

    onTakePhoto() {
      wx.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['camera'],
        sizeType: ['compressed'],
        success: (res) => {
          const tempFile = res.tempFiles[0]
          this.triggerEvent('choose', { url: tempFile.tempFilePath })
        }
      })
    }
  }
})
