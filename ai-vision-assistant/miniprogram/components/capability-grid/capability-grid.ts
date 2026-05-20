Component({
  properties: {
    capabilities: {
      type: Array,
      value: []
    }
  },

  methods: {
    onItemTap(e: WechatMiniprogram.CustomEvent) {
      const { id } = e.currentTarget.dataset
      this.triggerEvent('select', { id })
    }
  }
})
