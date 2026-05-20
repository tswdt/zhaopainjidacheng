const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  const { action, data } = event
  const { OPENID } = cloud.getWXContext()

  switch (action) {
    case 'create': {
      const taskData = {
        _openid: OPENID,
        type: data.type,
        options: data.options || {},
        status: 'pending',
        inputImage: data.inputImage || '',
        outputImage: '',
        creditsCost: data.creditsCost || 0,
        createdAt: db.serverDate(),
        completedAt: null
      }
      const { _id } = await db.collection('tasks').add({ data: taskData })
      return { taskId: _id, status: 'pending' }
    }

    case 'list': {
      const { status } = data || {}
      let query = db.collection('tasks').where({ _openid: OPENID })
      if (status) {
        query = query.where({ status })
      }
      const { data: tasks } = await query.orderBy('createdAt', 'desc').limit(50).get()
      return { list: tasks }
    }

    case 'detail': {
      const { taskId } = data
      const { data: task } = await db.collection('tasks').doc(taskId).get()
      return task
    }

    default:
      return { error: 'Unknown action' }
  }
}
