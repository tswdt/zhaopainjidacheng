const mockTypeOptions = [
  { key: 'invoice', label: '发票', icon: '🧾' },
  { key: 'lab_report', label: '化验单', icon: '🔬' },
  { key: 'medicine_instruction', label: '药品说明书', icon: '💊' },
  { key: 'food_label', label: '食品配料表', icon: '🏷️' },
  { key: 'old_photo', label: '老照片', icon: '📷' },
  { key: 'room_photo', label: '装修空间', icon: '🏠' },
  { key: 'product_image', label: '商品图', icon: '🛒' },
  { key: 'plant', label: '花草', icon: '🌿' },
  { key: 'vegetable', label: '蔬菜水果', icon: '🥬' },
  { key: 'animal', label: '动物', icon: '🐾' },
  { key: 'unknown_image', label: '未知图片', icon: '❓' },
  { key: 'medium_confidence_room', label: '中置信度室内', icon: '🏚️' },
  { key: 'mismatch_lab_invoice', label: '错配：选化验单上传发票', icon: '⚠️' },
  { key: 'mismatch_product_plant', label: '错配：选商品图上传花草', icon: '⚠️' }
];

module.exports = { mockTypeOptions };
