const { sceneRegistry, categoryMap, categoryOrder } = require('../../services/sceneRegistry');

var categoryIconMap = {
  document: { iconName: 'document', iconColor: '#475569' },
  health: { iconName: 'chart', iconColor: '#DC2626' },
  photo: { iconName: 'image', iconColor: '#D97706' },
  space: { iconName: 'palette', iconColor: '#6366F1' },
  ecommerce: { iconName: 'store', iconColor: '#EA580C' },
  life: { iconName: 'leaf', iconColor: '#059669' },
  general: { iconName: 'target', iconColor: '#475569' }
};

var sceneIconMap = {
  invoiceRecognition: { iconName: 'document', iconColor: '#475569' },
  contractRead: { iconName: 'document', iconColor: '#475569' },
  medicalReport: { iconName: 'chart', iconColor: '#DC2626' },
  drugInstruction: { iconName: 'pill', iconColor: '#2563EB' },
  foodLabel: { iconName: 'testTube', iconColor: '#059669' },
  oldPhotoRepair: { iconName: 'image', iconColor: '#D97706' },
  idPhotoOpt: { iconName: 'user', iconColor: '#B87300' },
  renovationEffect: { iconName: 'sofa', iconColor: '#6366F1' },
  colorScheme: { iconName: 'palette', iconColor: '#6366F1' },
  productImageOpt: { iconName: 'gem', iconColor: '#EA580C' },
  productBackground: { iconName: 'image', iconColor: '#EA580C' },
  plantIdentify: { iconName: 'leaf', iconColor: '#059669' },
  animalIdentify: { iconName: 'eye', iconColor: '#059669' },
  generalAnalysis: { iconName: 'target', iconColor: '#475569' }
};

Page({
  data: {
    searchText: '',
    searchFocused: false,
    categories: []
  },

  onLoad() {
    this._buildCategories('');
  },

  onSearchFocus() {
    this.setData({ searchFocused: true });
  },

  onSearchBlur() {
    this.setData({ searchFocused: false });
  },

  clearSearch() {
    this.setData({ searchText: '' });
    this._buildCategories('');
  },

  _buildCategories(search) {
    var categories = [];
    categoryOrder.forEach(function(catKey) {
      var cat = categoryMap[catKey];
      if (!cat) return;
      var catIcon = categoryIconMap[catKey] || { iconName: 'folder', iconColor: '#475569' };
      var scenes = Object.values(sceneRegistry).filter(function(s) {
        if (s.category !== catKey) return false;
        if (search) {
          return s.name.includes(search) || s.description.includes(search);
        }
        return true;
      }).map(function(s) {
        var sceneIcon = sceneIconMap[s.sceneId] || { iconName: 'document', iconColor: '#475569' };
        return Object.assign({}, s, sceneIcon);
      });
      if (scenes.length > 0) {
        categories.push({
          key: catKey,
          name: cat.name,
          iconName: catIcon.iconName,
          iconColor: catIcon.iconColor,
          scenes: scenes
        });
      }
    });
    this.setData({ categories: categories });
  },

  onSearch(e) {
    var searchText = e.detail.value;
    this.setData({ searchText: searchText });
    this._buildCategories(searchText);
  },

  selectScene(e) {
    var sceneId = e.currentTarget.dataset.sceneId;
    if (sceneId) {
      wx.navigateTo({ url: '/pages/upload/index?sceneId=' + sceneId });
    }
  }
});
