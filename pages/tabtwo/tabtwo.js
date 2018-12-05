// pages/tabtwo/tabtwo.js
//index.js
//获取应用实例
var util = require("../../utils/util.js")
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
    xinggejg:'',
    checkbox: false,
    countA:0,
    countB:0,
    countC:0,
    countD:0,
    check: false,
    tijiao:false,
    repetition: false
  },

xingge:function(a){
  var that=this;
   switch(a){
     case 0:
       that.setData({
        xinggejg: "红色性格"
       })
     break;
     case 1:
       that.setData({
         xinggejg: "蓝色性格"
       })
     break;
     case 2:
       that.setData({
         xinggejg: "黄色性格"
       })
     break;
     case 3:
       that.setData({
         xinggejg: "绿色性格"
       })
     break;
     default:
       that.setData({
         xinggejg: "多变性格"
       })
     break;

   }

},

//统计A,B,C,D各项选择具体的数目
  calcABCD:function(j){
    var that=this;
    var countA=that.data.countA;
    var countB=that.data.countB;
    var countC=that.data.countC;
    var countD=that.data.countD;
    switch (j) {
      case "1":
        countA=countA+1;
        that.setData({
          countA: countA
        })
        break;
      case "2":
        countB=countB+1;
        that.setData({
          countB: countB
        })
        break;
      case "3":
        countC=countC+1;
        that.setData({
          countC: countC
        })
        break;
      case "4":
        countD=countD+1; 
        that.setData({
          countD: countD
        })
        break;

        default:
         break;
      
        }

  },

  onload: function () {

    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      //console.log(userInfo);
      that.setData({
        userInfo: userInfo
      })
    })


  },



  usercheck: function () {

    var that = this;
    var username = that.data.username;
    var userphone = that.data.userphone;
    var repetition = that.data.repetition;
    const db = wx.cloud.database();
    const _ = db.command;
    db.collection('xingge').where({
      userphone: _.eq(userphone)
    }).get({
      success: function (res) {
        if (res.data.length == 1) {
          that.setData({
            repetition: true
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

    var that = this;

    var repetition = that.data.repetition;
    var thetime = util.formatTime(new Date())
    const db = wx.cloud.database();

    const _ = db.command;
    const userphone = e.detail.value.userphone;
    const username = e.detail.value.username;
    const one=e.detail.value.one;
    const two=e.detail.value.two;
    const three=e.detail.value.three;
    const four=e.detail.value.four;
    const five=e.detail.value.five;
    const  six=e.detail.value.six;
    const seven= e.detail.value.seven;
    const eight=e.detail.value.eight;
    const nine=e.detail.value.nine;
    const ten=e.detail.value.ten;
    const eleven=e.detail.value.eleven;
    const twelve=e.detail.value.twelve;
    const thirteen=e.detail.value.thirteen;
    const  fourteen=e.detail.value.fourteen;
    const fifteen= e.detail.value.fifteen;
    const  sixtenn=e.detail.value.sixtenn;
    const seventeen= e.detail.value.seventeen;
    const eighteen=e.detail.value.eighteen;
    const ninteen=e.detail.value.ninteen;
    const twenty=e.detail.value.twenty;

    var cont = 0;
    

    that.usercheck();

   

    
    
    




    if (username.length == 0 || userphone.length == 0) {

      wx.showToast({

        title: '用户名或手机号码不得为空!',
        icon: 'none'

      })
    } else if (repetition === true) {

      console.log(repetition);

      wx.showToast({
        title: '手机号已存在',
        icon: 'none',
      })


    } else {

      //统计A，B,C,D各项选择
      that.calcABCD(one);
      that.calcABCD(two);
      that.calcABCD(three);
      that.calcABCD(four);
      that.calcABCD(five);
      that.calcABCD(six);
      that.calcABCD(seven);
      that.calcABCD(eight);
      that.calcABCD(nine);
      that.calcABCD(ten);
      that.calcABCD(eleven);
      that.calcABCD(twelve);
      that.calcABCD(thirteen);
      that.calcABCD(fourteen);
      that.calcABCD(fifteen);
      that.calcABCD(sixtenn);
      that.calcABCD(seventeen);
      that.calcABCD(eighteen);
      that.calcABCD(ninteen);
      that.calcABCD(twenty);


      var arr = [that.data.countA, that.data.countB, that.data.countC, that.data.countD]
      //   console.log(arr)
      var count = arr.indexOf(Math.max.apply(Math, arr))
      that.xingge(count)

     
      db.collection('xingge').add({
        data: {
          ctreated: thetime,
          countA: that.data.countA,
          countB: that.data.countB,
          countC: that.data.countC,
          countD: that.data.countD,
          xingge:that.data.xinggejg,
          
          username: e.detail.value.username,
          userphone: e.detail.value.userphone
        },
        success: res => {
          // 在返回结果中会包含新创建的记录的 _id
          that.setData({
            repetition: false,
            tijiao: true
          })
          wx.showToast({
            icon: 'none',
            title: '谢谢您的参与，您是' + that.data.xinggejg,
          })
          console.log(thetime + '' + repetition + '[xingge] [新增记录] 成功，记录 _id: ', res._id)
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
      title: '性格色彩测试',
      path: '/pages/tabtwo/tabtwo',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }

  }
})