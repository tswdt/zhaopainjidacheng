const callCloudFunction = (name: string, data: Record<string, any> = {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name,
      data,
      success: (res) => resolve(res.result),
      fail: (err) => reject(err)
    })
  })
}

export const userService = {
  login(): Promise<any> {
    return callCloudFunction('user', { action: 'login' })
  },

  getUserInfo(): Promise<any> {
    return callCloudFunction('user', { action: 'getUserInfo' })
  },

  updateProfile(data: Record<string, any>): Promise<any> {
    return callCloudFunction('user', { action: 'updateProfile', data })
  }
}

export const taskService = {
  createTask(data: Record<string, any>): Promise<any> {
    return callCloudFunction('task', { action: 'create', data })
  },

  getTaskList(status?: string): Promise<any> {
    return callCloudFunction('task', { action: 'list', data: { status } })
  },

  getTaskDetail(taskId: string): Promise<any> {
    return callCloudFunction('task', { action: 'detail', data: { taskId } })
  }
}

export const imageService = {
  processImage(data: Record<string, any>): Promise<any> {
    return callCloudFunction('image', { action: 'process', data })
  },

  uploadImage(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const cloudPath = `uploads/${Date.now()}-${Math.random().toString(36).substr(2, 8)}.jpg`
      wx.cloud.uploadFile({
        cloudPath,
        filePath,
        success: (res) => resolve(res.fileID),
        fail: (err) => reject(err)
      })
    })
  }
}

export const paymentService = {
  createOrder(data: Record<string, any>): Promise<any> {
    return callCloudFunction('payment', { action: 'createOrder', data })
  },

  getOrderList(): Promise<any> {
    return callCloudFunction('payment', { action: 'getOrders' })
  }
}
