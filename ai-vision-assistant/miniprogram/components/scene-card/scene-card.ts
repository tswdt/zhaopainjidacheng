Component({
  properties: {
    scene: {
      type: Object,
      value: {}
    }
  },

  methods: {
    onCardTap() {
      this.triggerEvent('tap', { id: this.data.scene.id })
    }
  }
})
