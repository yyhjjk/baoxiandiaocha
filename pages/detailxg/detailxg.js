wx.cloud.init({
  env: 'tianya-e3038b',
  traceUser: true
})
const db = wx.cloud.database()
const _ = db.command


Page({
  data: {
    id: '',
    username: '',
   countA:0,
   countB:0,
   countC:0,
   countD:0
  },
  onLoad: function (options) {
    var that = this;
    var id = options.id;

    that.getuserinfo(id);//读取信息
    //  console.log('onLoad')
    //调用应用实例的方法获取全局数据



  },



  getuserinfo: function (id) {
    var that = this

    db.collection('xingge').doc(id).get({

      success: function (res) {


        that.setData({
          countA:res.data.countA,
          countB:res.data.countB,
          countC:res.data.countC,
          countD:res.data.countD,
          username: res.data.username
        })
       

      }
    })



  }
})