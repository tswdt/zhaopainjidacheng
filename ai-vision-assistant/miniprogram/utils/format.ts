const formatTime = (date: Date): string => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  return `${year}-${month}-${day} ${hour}:${minute}`
}

const formatRelativeTime = (timestamp: number): string => {
  const diff = Date.now() - timestamp
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`
  if (diff < 604800000) return `${Math.floor(diff / 86400000)}天前`
  return formatTime(new Date(timestamp))
}

const getTypeLabel = (type: string): string => {
  const map: Record<string, string> = {
    'photo-restore': '照片修复',
    'decoration': '装修效果图',
    'health-check': '健康观察',
    'image-read': '读图',
    'style-transfer': '风格转换'
  }
  return map[type] || type
}

const getStatusLabel = (status: string): string => {
  const map: Record<string, string> = {
    'pending': '排队中',
    'processing': '处理中',
    'completed': '已完成',
    'failed': '失败'
  }
  return map[status] || status
}

export { formatTime, formatRelativeTime, getTypeLabel, getStatusLabel }
