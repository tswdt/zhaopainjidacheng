const { sceneRegistry, categoryMap, categoryOrder } = require('../../services/sceneRegistry');

Page({
  data: {
    searchText: '',
    categories: []
  },

  onLoad() {
    this._buildCategories('');
  },

  _buildCategories(search) {
    const categories = [];
    categoryOrder.forEach(catKey => {
      const cat = categoryMap[catKey];
      if (!cat) return;
      const scenes = Object.values(sceneRegistry).filter(s => {
        if (s.category !== catKey) return false;
        if (search) {
          return s.name.includes(search) || s.description.includes(search);
        }
        return true;
      });
      if (scenes.length > 0) {
        categories.push({
          key: catKey,
          name: cat.name,
          icon: cat.icon,
          scenes
        });
      }
    });
    this.setData({ categories });
  },

  onSearch(e) {
    const searchText = e.detail.value;
    this.setData({ searchText });
    this._buildCategories(searchText);
  },

  selectScene(e) {
    const sceneId = e.currentTarget.dataset.sceneId;
    if (sceneId) {
      wx.navigateTo({ url: '/pages/upload/index?sceneId=' + sceneId });
    }
  }
});
