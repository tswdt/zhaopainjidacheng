const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  const { action, data } = event
  const { OPENID } = cloud.getWXContext()

  switch (action) {
    case 'createOrder': {
      const orderData = {
        _openid: OPENID,
        type: data.type,
        amount: data.amount,
        credits: data.credits,
        status: 'pending',
        createdAt: db.serverDate()
      }
      const { _id } = await db.collection('orders').add({ data: orderData })
      return { orderId: _id, status: 'pending' }
    }

    case 'getOrders': {
      const { data: orders } = await db.collection('orders')
        .where({ _openid: OPENID })
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get()
      return { list: orders }
    }

    default:
      return { error: 'Unknown action' }
  }
}
