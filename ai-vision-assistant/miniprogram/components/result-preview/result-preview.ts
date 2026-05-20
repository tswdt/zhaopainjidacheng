Component({
  properties: {
    originalUrl: {
      type: String,
      value: ''
    },
    resultUrl: {
      type: String,
      value: ''
    }
  },

  methods: {
    onRetry() {
      this.triggerEvent('retry')
    },

    onSave() {
      this.triggerEvent('save')
    },

    onPreviewOriginal() {
      if (this.data.originalUrl) {
        wx.previewImage({ urls: [this.data.originalUrl] })
      }
    },

    onPreviewResult() {
      if (this.data.resultUrl) {
        wx.previewImage({ urls: [this.data.resultUrl] })
      }
    }
  }
})
