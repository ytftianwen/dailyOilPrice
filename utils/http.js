let factory = (type, url, params) => {
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: type,
      data: params,
      success: res => {
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
  return promise
}
let http = {
  get: function (url, params) {
    return factory('get', url, params)
  },
  post: function (url, params) {
    return factory('post', url, params)
  }
}

module.exports = {http: http}