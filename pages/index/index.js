//index.js
//获取应用实例
var util=require("../../utils/util.js")
const app = getApp()
wx.cloud.init({
  env: 'tianya-e3038b',
  traceUser: true
})
// 初始化数据库





Page({

  data: {
    username: '',
    userphone: '',
    checkbox: false,
    check:false,
    repetition: false
  },

  onload:function(){

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo: userInfo
      })
    })


  },

  usercheck: function (userphone) {

    var that = this;
    var repetition = that.data.repetition;
    const db = wx.cloud.database();
    const _ = db.command;
    db.collection('diaocha').where({
      userphone: _.eq(userphone)
    }).get({
      success: function (res) {
        console.log(res.data.length)
        if (res.data.length >= 1) {
          that.setData({
            repetition:true
          });
        } else {
          that.setData({
            repetition: false
          });

        }

      }
    })
  },

  userNameInput: function (e) {
    this.setData({
      username: e.detail.value
    });
  },

  userPhoneInput: function (e) {
    this.setData({
      userphone: e.detail.value
    });
  },



  


  res: function (e) {

    var that=this;
    var repetition=that.data.repetition;
    const db = wx.cloud.database();

    const _ = db.command;
    const userphone = e.detail.value.userphone;
    const username  =e.detail.value.username;
    var cont=0;

    that.usercheck(userphone);
    console.log(repetition);

    
    if (username.length == 0 || userphone.length == 0) {

      wx.showToast({

        title: '用户名或手机号码不得为空!',
        icon:'none'

      })
    } else if (repetition==true)  {


      wx.showToast({
        title: '您已经成功提交',
        icon: 'none',
      })
     
     
    } else {

    var thetime = util.formatTime(new Date())
    db.collection('diaocha').add({
      data: {
        ctreated:thetime,
        one:e.detail.value.one,
        two: e.detail.value.two,
        three: e.detail.value.three,
        four: e.detail.value.four,
        five: e.detail.value.five,
        six: e.detail.value.six,
        seven: e.detail.value.seven,
        eight: e.detail.value.eight,
        username: e.detail.value.username,
        userphone: e.detail.value.userphone
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        that.setData({
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          six: '',
          seven: '',
          eight: '',
          username: '',
          userphone:''
         

        })
        wx.showToast({
          title: '谢谢您的参与！',
        })
        console.log(thetime +''+ repetition+'[diaocha] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '提交失败，请您再试一次'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
   
  }
  },

  onShareAppMessage: function () {

    return {
      title: '市民保险需求调查',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }

  }
})