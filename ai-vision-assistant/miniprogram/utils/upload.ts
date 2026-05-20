const chooseAndUpload = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      sizeType: ['compressed'],
      success: async (res) => {
        const tempPath = res.tempFiles[0].tempFilePath
        try {
          const cloudPath = `uploads/${Date.now()}-${Math.random().toString(36).substr(2, 8)}.jpg`
          const uploadRes = await new Promise<string>((resolveUpload, rejectUpload) => {
            wx.cloud.uploadFile({
              cloudPath,
              filePath: tempPath,
              success: (r) => resolveUpload(r.fileID),
              fail: (e) => rejectUpload(e)
            })
          })
          resolve(uploadRes)
        } catch (err) {
          reject(err)
        }
      },
      fail: (err) => reject(err)
    })
  })
}

export { chooseAndUpload }
