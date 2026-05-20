const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  const { action, data } = event
  const { OPENID } = cloud.getWXContext()

  switch (action) {
    case 'login': {
      const userCollection = db.collection('users')
      const { data: userList } = await userCollection.where({ _openid: OPENID }).get()
      if (userList.length === 0) {
        await userCollection.add({
          data: {
            _openid: OPENID,
            credits: 10,
            isVip: false,
            vipExpireTime: null,
            createdAt: db.serverDate(),
            updatedAt: db.serverDate()
          }
        })
        return { credits: 10, isVip: false }
      }
      const user = userList[0]
      return { credits: user.credits, isVip: user.isVip }
    }

    case 'getUserInfo': {
      const { data: userList } = await db.collection('users').where({ _openid: OPENID }).get()
      if (userList.length === 0) return null
      const user = userList[0]
      return { credits: user.credits, isVip: user.isVip, vipExpireTime: user.vipExpireTime }
    }

    case 'updateProfile': {
      const { data: userList } = await db.collection('users').where({ _openid: OPENID }).get()
      if (userList.length === 0) return { success: false }
      await db.collection('users').doc(userList[0]._id).update({
        data: { ...data, updatedAt: db.serverDate() }
      })
      return { success: true }
    }

    default:
      return { error: 'Unknown action' }
  }
}
