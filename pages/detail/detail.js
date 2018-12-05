wx.cloud.init({
  env: 'tianya-e3038b',
  traceUser: true
})
const db = wx.cloud.database()
const _ = db.command


Page({
  data: {
   id:'',
   username:'',
   one:'',
   two:'',
   three:'',
   four:'',
   five:'',
   six:'',
   seven:'',
   eight:'',
   onex:''
   
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;

    that.getuserinfo(id);//读取信息
    //  console.log('onLoad')
    //调用应用实例的方法获取全局数据
   
    

  },

onecheck:function(){
   var that=this
   var a=that.data.one
   var b=3
   b = parseInt(a)
  
   if(b==1){
     that.setData({
       one:"买过"

     })
   } else {
     that.setData({
       one: "没买过"
     })

   }
},

twocheck:function(){

  var that = this
  var a = that.data.two
  var b = parseInt(a)
  if(b==1){
    that.setData({
      two: "不了解"
    })
  } else if(b==2) {

    that.setData({
      two: "不相信 "
    })
  } else if(b==3){
    that.setData({
      two: "经济原因"
    })
  } else {
    that.setData({
      two: "健康原因"
    })

  }


},

  threecheck: function () {

    var that = this
    var a = that.data.three
    var b = parseInt(a)
    if (b == 1) {
      that.setData({
        three: "有"
      })
    } else if (b == 2) {

      that.setData({
        three: "没有 "
      })
    } else if (b == 3) {
      that.setData({
        three: "缓段时间"
      })
    } else {
      that.setData({
        three: "说不定"
      })

    }


  },

  fourcheck: function () {

    var that = this
    var a = that.data.four
    var b = parseInt(a)
    if (b == 1) {
      that.setData({
        four: "保险的意义和作用"
      })
    } else if (b == 2) {

      that.setData({
        four: "保险条款 "
      })
    } else if (b == 3) {
      that.setData({
        four: "保险公司"
      })
    } else {
      that.setData({
        four: "投保手续和程序"
      })

    }


  },

  fivecheck: function () {

    var that = this
    var a = that.data.five
    var b = parseInt(a)
    if (b == 1) {
      that.setData({
        five: "自己"
      })
    } else if (b == 2) {

      that.setData({
        five: "配偶"
      })
    } else if (b == 3) {
      that.setData({
        five: "子女"
      })
    } else {
      that.setData({
        five: "父母"
      })

    }


  },

  sixcheck: function () {

    var that = this
    var a = that.data.six
    var b = parseInt(a)
    if (b == 1) {
      that.setData({
        six: "健康医疗保险"
      })
    } else if (b == 2) {

      that.setData({
        six: "养老保险"
      })
    } else if (b == 3) {
      that.setData({
        six: "教育保险"
      })
    } else {
      that.setData({
        six: "投资理财保险"
      })

    }


  },

  sevencheck: function () {

    var that = this
    var a = that.data.seven
    var b = parseInt(a)
    if (b == 1) {
      that.setData({
        seven: "10年"
      })
    } else if (b == 2) {

      that.setData({
        seven: "15年"
      })
    } else if (b == 3) {
      that.setData({
        seven: "20年"
      })
    } else {
      that.setData({
        seven: "3或5年"
      })

    }


  },

  eightcheck: function () {

    var that = this
    var a = that.data.eight
    var b = parseInt(a)
    if (b == 1) {
      that.setData({
        eight: "满意"
      })
    } else if (b == 2) {

      that.setData({
        eight: "不满意"
      })
    } else {
      that.setData({
        eight: "没做了"
      })

    }


  },


getuserinfo: function(id){
    var that=this

  db.collection('diaocha').doc(id).get({
   
    success: function (res) {

      
      that.setData({
        one: res.data.one,
        two: res.data.two,
        three: res.data.three,
        four: res.data.four,
        five: res.data.five,
        six: res.data.six,
        seven: res.data.seven,
        eight: res.data.eight,
        username: res.data.username
      })
      that.onecheck()
      that.twocheck()
      that.threecheck()
      that.fourcheck()
      that.fivecheck()
      that.sixcheck()
      that.sevencheck()
      that.eightcheck()
      
    }
  })
     


}
})