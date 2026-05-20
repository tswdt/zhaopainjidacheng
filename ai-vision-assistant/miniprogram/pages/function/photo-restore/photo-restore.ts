Page({
  data: {
    step: 1,
    imageUrl: '',
    selectedOption: 'colorize',
    options: [
      { id: 'colorize', name: '黑白上色', desc: '为黑白照片添加色彩', price: 2, priceUnit: '点' },
      { id: 'enhance', name: '清晰化增强', desc: '提升照片清晰度和细节', price: 2, priceUnit: '点' },
      { id: 'scratch', name: '去划痕修复', desc: '修复照片上的划痕和破损', price: 3, priceUnit: '点' }
    ] as IOption[],
    isProcessing: false,
    resultUrl: ''
  },

  onImageChoose(e: WechatMiniprogram.CustomEvent) {
    this.setData({
      imageUrl: e.detail.url,
      step: 2
    })
  },

  onOptionChange(e: WechatMiniprogram.CustomEvent) {
    this.setData({ selectedOption: e.detail.value })
  },

  onSubmit() {
    this.setData({ isProcessing: true, step: 3 })

    setTimeout(() => {
      this.setData({
        isProcessing: false,
        step: 4,
        resultUrl: ''
      })
    }, 3000)
  },

  onRetry() {
    this.setData({ step: 1, imageUrl: '', resultUrl: '' })
  },

  onSave() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.resultUrl,
      success: () => {
        wx.showToast({ title: '已保存到相册', icon: 'success' })
      }
    })
  },

  getCurrentPrice(): number {
    const opt = this.data.options.find(o => o.id === this.data.selectedOption)
    return opt ? opt.price : 0
  }
})
