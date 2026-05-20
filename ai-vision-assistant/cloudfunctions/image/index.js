const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

const processWithAI = async (type, imageUrl, options) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        outputUrl: '',
        message: 'AI处理完成（模拟）'
      })
    }, 2000)
  })
}

exports.main = async (event, context) => {
  const { action, data } = event
  const { OPENID } = cloud.getWXContext()

  switch (action) {
    case 'process': {
      const { type, inputImage, options } = data

      const { data: userList } = await db.collection('users').where({ _openid: OPENID }).get()
      if (userList.length === 0) return { error: 'User not found' }
      const user = userList[0]

      const creditsCost = data.creditsCost || 2
      if (user.credits < creditsCost && !user.isVip) {
        return { error: 'Insufficient credits', required: creditsCost, current: user.credits }
      }

      await db.collection('tasks').add({
        data: {
          _openid: OPENID,
          type,
          options: options || {},
          status: 'processing',
          inputImage,
          outputImage: '',
          creditsCost,
          createdAt: db.serverDate(),
          completedAt: null
        }
      })

      if (!user.isVip) {
        await db.collection('users').doc(user._id).update({
          data: { credits: db.command.inc(-creditsCost) }
        })
      }

      const result = await processWithAI(type, inputImage, options)

      return {
        success: true,
        taskId: 'mock-task-id',
        status: 'processing',
        message: '任务已提交，AI正在处理中'
      }
    }

    default:
      return { error: 'Unknown action' }
  }
}
