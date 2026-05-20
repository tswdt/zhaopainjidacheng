const capabilities: ICapability[] = [
  { id: 'photo-restore', icon: 'image', label: '照片修复', bgColor: 'var(--color-icon-bg-blue)' },
  { id: 'image-read', icon: 'browse', label: '读图', bgColor: 'var(--color-icon-bg-green)' },
  { id: 'health-check', icon: 'heart', label: '健康观察', bgColor: 'var(--color-icon-bg-pink)' },
  { id: 'decoration', icon: 'home', label: '装修效果', bgColor: 'var(--color-icon-bg-indigo)' },
  { id: 'style-transfer', icon: 'palette', label: '风格转换', bgColor: 'var(--color-icon-bg-purple)' },
  { id: 'more', icon: 'ellipsis', label: '更多', bgColor: 'var(--color-icon-bg-amber)' }
]

const scenes: IScene[] = [
  { id: 's1', icon: 'image', title: '老照片修复', count: 3, desc: '修复破损、褪色的老照片', tags: ['黑白上色', '清晰化', '去划痕'], bgColor: 'var(--color-icon-bg-blue)' },
  { id: 's2', icon: 'image', title: '人像修复', count: 2, desc: '修复模糊、受损的人像照片', tags: ['人脸增强', '去噪'], bgColor: 'var(--color-icon-bg-blue)' },
  { id: 's3', icon: 'browse', title: '植物识别', count: 1, desc: '识别花草树木的种类', tags: ['花卉', '树木'], bgColor: 'var(--color-icon-bg-green)' },
  { id: 's4', icon: 'browse', title: '动物识别', count: 1, desc: '识别动物的品种', tags: ['宠物', '野生动物'], bgColor: 'var(--color-icon-bg-green)' },
  { id: 's5', icon: 'browse', title: '菜品识别', count: 1, desc: '识别菜品名称和热量', tags: ['热量', '菜名'], bgColor: 'var(--color-icon-bg-green)' },
  { id: 's6', icon: 'heart', title: '皮肤观察', count: 2, desc: 'AI分析皮肤状况', tags: ['痘痘', '色斑'], bgColor: 'var(--color-icon-bg-pink)' },
  { id: 's7', icon: 'heart', title: '体型观察', count: 1, desc: 'AI分析体型变化', tags: ['BMI', '体态'], bgColor: 'var(--color-icon-bg-pink)' },
  { id: 's8', icon: 'home', title: '客厅效果图', count: 2, desc: '生成客厅装修效果图', tags: ['现代', '北欧'], bgColor: 'var(--color-icon-bg-indigo)' },
  { id: 's9', icon: 'home', title: '卧室效果图', count: 2, desc: '生成卧室装修效果图', tags: ['温馨', '简约'], bgColor: 'var(--color-icon-bg-indigo)' },
  { id: 's10', icon: 'palette', title: '油画风格', count: 1, desc: '将照片转为油画风格', tags: ['印象派', '古典'], bgColor: 'var(--color-icon-bg-purple)' },
  { id: 's11', icon: 'palette', title: '动漫风格', count: 1, desc: '将照片转为动漫风格', tags: ['日漫', '国漫'], bgColor: 'var(--color-icon-bg-purple)' }
]

const hotList: IHotItem[] = [
  { id: 'h1', icon: 'image', title: '老照片修复', price: '2点/次', bgColor: 'var(--color-icon-bg-blue)' },
  { id: 'h2', icon: 'home', title: '装修效果图', price: '5点/次', bgColor: 'var(--color-icon-bg-indigo)' },
  { id: 'h3', icon: 'heart', title: '健康观察', price: '3点/次', bgColor: 'var(--color-icon-bg-pink)' }
]

const recentList: IRecentItem[] = [
  { id: 'r1', icon: 'image', title: '老照片修复', time: '2分钟前' },
  { id: 'r2', icon: 'home', title: '装修效果图', time: '1小时前' }
]

const tasks: ITask[] = [
  {
    _id: 't1', userId: 'u1', type: 'photo-restore',
    options: { style: 'colorize' }, status: 'completed',
    inputImage: '', outputImage: '',
    creditsCost: 2, createdAt: Date.now() - 3600000, completedAt: Date.now() - 3540000
  },
  {
    _id: 't2', userId: 'u1', type: 'decoration',
    options: { room: 'living', style: 'modern' }, status: 'processing',
    inputImage: '', outputImage: '',
    creditsCost: 5, createdAt: Date.now() - 60000, completedAt: null
  },
  {
    _id: 't3', userId: 'u1', type: 'health-check',
    options: { type: 'skin' }, status: 'completed',
    inputImage: '', outputImage: '',
    creditsCost: 3, createdAt: Date.now() - 86400000, completedAt: Date.now() - 86340000
  }
]

export { capabilities, scenes, hotList, recentList, tasks }
