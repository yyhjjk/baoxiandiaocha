// pages/listxg/listxg.js
// pages/login/login.js
var app = getApp()
var util = require("../../utils/util.js")
wx.cloud.init({
  env: 'tianya-e3038b',
  traceUser: true
})
const db = wx.cloud.database()
const _ = db.command


Page({
  data: {
    id: '',//修改用来保存_id
    iSshow: true,
    username: '',
    userphone: '',
    pageindex: 1,
    pagesize: 10,
    totalcount: {},
    totalpage: 1,
    select: false,
    pagetotal: [1, 2, 3, 4, 5, 6],
    userInfo: {},
    
    list: []
  },
  onLoad: function () {
    var that = this
    var info = {}
    that.getUserMsg()//读取信息  

  },

  bindShowMsg() {
    var that = this
    var totalcount = that.data.totalcount.pages
    // console.log(totalcount)
    var arr = []
    for (let i = 1; i < totalcount + 1; ++i) {
      arr.push(i)
    }
    //  for(i=0;i++;i<totalcount){
    // arr[i]=i+1

    //}
    // console.log(arr)
    that.setData({
      select: !that.data.select,
      pagetotal: arr

    })

  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name

    this.setData({
      pageindex: name,
      select: false
    })
    this.getUserMsg()
  },



  //获取信息
  getUserMsg() {
    var that = this
    var pageindex = that.data.pageindex
    var pagesize = that.data.pagesize

    var countresult
    var dateriqi
    //分页显示
    db.collection('xingge').count().then((data) => {
      data.totalcount = data.total;
      data.pages = Math.ceil(data.totalcount / 10)
      that.setData({ totalcount: data });
      //console.log(data.totalcount)
    }).catch((res) => { console.log("数据记录读取失败!") })


    db.collection('xingge').orderBy('ctreated', 'desc').skip((pageindex - 1) * pagesize).limit(pagesize).get({
      success: function (res) {


        that.setData({
          list:res.data
        })

      }
    })
  },

  //删除信息
  delUserMsg(e) {
    var that = this
    var id = e.currentTarget.dataset.id
    db.collection('xingge').doc(id).remove({
      success: function (res) {
        wx.showToast({
          title: "删除数据成功！"
        })
        that.getUserMsg()

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
  //修改回显
  detailMsg(e) {
    var that = this
    var id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: '../detailxg/detailxg?id=' + id
    });

    db.collection('xingge').doc(id).get({
      success: function (res) {
        that.setData({
          username: res.data.username,
          userphone: res.data.userphone,
          show: false,
          id: res.data._id
        })
      }
    })

  },
  //更新提交
  /*
  updetMsg(e) {
    var that = this
    var id = e.currentTarget.dataset.id
    db.collection('diaocha').doc(id).update({
      data: {
        username: that.data.username,
        userphone: that.data.userphone
      },
      success: function (res) {
        that.getUserMsg()
        that.setData({
          username: '',
          userphone: '',
          show: true
        })
      }
    })
  },
  */
})