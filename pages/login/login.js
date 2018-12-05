// pages/login/login.js
var app = getApp()
Page({
  config: {
    telephone: '13177313298',
    yzm: '998877'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '快速登录'
    })
  },


  formSubmit: function (e) {
    var that = this;
    if (e.detail.value.yzm.length == 0) {
      wx.showModal({
        title: '密码不得为空',
        showCancel: false
      })
    }
    if (e.detail.value.phone == that.config.telephone && e.detail.value.yzm == that.config.yzm) {
      wx.showModal({
        title: '登录成功',
        showCancel: false
      })
      wx.navigateTo({
        url: '../search/search'
      });
 
    } else {
      wx.showModal({
        title: '密码错误',
        showCancel: false
      })
    }
  }
})
