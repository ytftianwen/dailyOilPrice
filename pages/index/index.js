//index.js
//获取应用实例
var app = getApp()
var http = require('../../utils/http.js')
var util = require('../../utils/util.js')
Page({
  data: {
    now: '',
    list: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let _self = this
    let url = 'https://apis.juhe.cn/cnoil/oil_city'
    wx.request({
      url: url,
      data: {
        key: '49dae5f01f5eade0e30f4cac400f3ab9'
      },
      success: res => {
        _self.setData({
          now: util.formatTime(new Date()),
          list: res.data.result
        })
      },
      fail: error => {
        console.log('err:', error)
      }
    })
  }
})
