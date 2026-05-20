interface IAppOption {
  globalData: {
    userInfo: WechatMiniprogram.UserInfo | null
    credits: number
    vipExpireTime: number | null
  }
  onLaunch(): void
}

interface ICapability {
  id: string
  icon: string
  label: string
  bgColor: string
}

interface IScene {
  id: string
  icon: string
  title: string
  count: number
  desc: string
  tags: string[]
  bgColor: string
}

interface IHotItem {
  id: string
  icon: string
  title: string
  price: string
  bgColor: string
}

interface IRecentItem {
  id: string
  icon: string
  title: string
  time: string
}

interface ITask {
  _id: string
  userId: string
  type: string
  options: Record<string, any>
  status: 'pending' | 'processing' | 'completed' | 'failed'
  inputImage: string
  outputImage: string
  creditsCost: number
  createdAt: number
  completedAt: number | null
}

interface IOption {
  id: string
  name: string
  desc: string
  price: number
  priceUnit: string
}

interface IMenuItem {
  id: string
  icon: string
  label: string
}
