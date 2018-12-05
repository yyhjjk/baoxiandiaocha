



Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    select2:false,
    show:false,
    tihuoWay: '1月',
    tihuoday:'20日',
    dateyue: 1,
    dateriqi:20,
    xingzuotext:"",
    xingzuo: ["水瓶座的人很聪明，他们最大的特点是创新，追求独一无二的生活，个人主义色彩很浓重的星座。他们对人友善又注重隐私。水瓶座绝对算得上是”友谊之星“，他喜欢结交每一类朋友，但是确很难与他们交心", "双鱼座是十二宫最后一个星座，他集合了所有星座的优缺点于一身，同时受水象星座的情绪化影响，使他们原来复杂的性格又添加了更复杂的一笔。双鱼座的人最大的优点是有一颗善良的心，他们愿意帮助别人", "白羊座有一种让人看见就觉得开心的感觉，因为总是看起来都是那么地热情、阳光、乐观、坚强，对朋友也慷概大方，性格直来直往，就是有点小脾气。白羊男有大男人主义的性格，而白羊女就是女汉子的形象", "金牛座很保守，喜欢稳定，一旦有什么变动就会觉得心里不踏实，性格也比较慢热，但你是理财高手，对于投资理财都有着独特的见解。金牛男的性格有点儿自我，而金牛女就喜欢投资自己，想要过得更好。", "双子座喜欢追求新鲜感，有点儿小聪明，就是耐心不够，往往做事都是三分钟热度，难以坚持，但是你的可爱性格会让很多人都喜欢跟你做朋友。双子男表面很花心，其实深情，而双子女就喜欢求新和求变。", "巨蟹座的情绪容易敏感，也缺乏安全感，容易对一件事情上心，做事情有坚持到底的毅力，为人重情重义，对朋友、家人都特别忠实，巨蟹男是一等一的好男人，顾家爱家人，巨蟹女充满母性光环，非常有爱心。", "狮子座有着宏伟的理想，总想靠自己的努力成为人上人，你向往高高在上的优越感，也期待被仰慕被崇拜的感觉，有点儿自信有点儿自大。狮子男的大男人气息很重，爱面子，狮子女热情阳光，对朋友讲义气。", "处女座虽然常常被黑，但你还是依然坚持追求自己的完美主义，因为在你看来，生活不能将就，追求的完美更不能将就，有目标才有进步，当然也需要鼓励。处女男的毅力很强，能坚持，处女女的求知欲很强。", "天秤座常常追求平等、和谐，擅于察言观色，交际能力很强，因此真心朋友不少，因为你也足够真诚，但是最大的缺点就是面对选择总是犹豫不决。天秤男容易在乎自己而忽略别人，天秤女就喜欢被陪伴的感觉。", "天蝎座精力旺盛、占有欲极强，对于生活很有目标，不达到目的誓不罢休，复仇心理重，记仇会让自己不顾一切报复曾经伤害过你的人。天蝎男自我主义色彩很强烈，天蝎女的自我保护意识很强，不容易接近。", "射手座崇尚自由，勇敢、果断、独立，身上有一股勇往直前的劲儿，不管有多困难，只要想，就能做，你的毅力和自信是难以击倒的。射手男酷爱自由，讨厌被束缚，射手女性格简单直接，不耍心计，可是任性。","摩羯座是十二星座中最有耐心，为事最小心、也是最善良的星座。他们做事脚踏实地，也比较固执，不达目的是不会放手的。他们的忍耐力也是出奇的强大，同时也非常勤奋。他们心中总是背负着很多的责任感，"]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select,
    })
  },

  bindShowMsg1() {
    this.setData({
      select2: !this.data.select2
    })
  },

  look:function(){
    var that=this
    var exp=that.data.tihuoWay
    var qi=that.data.dateriqi
    var xingzuo = that.data.xingzuo
    
   that.setData({
     show:true
   })

    switch (exp) {
      case "1月":
        if(qi > 20){
        that.setData({
          xingzuotext:"水瓶座,"+xingzuo[0]
        })

        } else {
          that.setData ({
            xingzuotext: "摩蝎座," + xingzuo[11]
          })
        }
        break;
      case "2月":
        if (qi > 17) {
          that.setData({
            xingzuotext: "双鱼座," + xingzuo[1]
          })
        } else {
          that.setData({
            xingzuotext: "水瓶座," + xingzuo[0]
          })
        }
        break;
      case "3月":
        if (qi > 20) {
          that.setData({
            xingzuotext: "白羊座," + xingzuo[2]
          })
        } else {
          that.setData({
            xingzuotext: "双鱼座," + xingzuo[1]
          })
        }

        break;
      case "4月":
        if (qi > 19) {
          that.setData({
            xingzuotext: "金牛座," + xingzuo[3]
          })
        } else {
          that.setData({
            xingzuotext: "白羊座," + xingzuo[2]
          })
        }
        
        break;
      case "5月":
        if (qi > 20) {
          that.setData({
            xingzuotext: "双子座," + xingzuo[4]
          })
        } else {
          that.setData({
            xingzuotext: "金牛座," + xingzuo[3]
          })
        }
        break;
      case "6月":
        if (qi > 21) {
          that.setData({
            xingzuotext: "巨蟹座," + xingzuo[5]
          })
        } else {
          that.setData({
            xingzuotext: "双子座," + xingzuo[4]
          })
        }

        break;
      case "7月":
        if (qi > 22) {
          that.setData({
            xingzuotext: "狮子座," + xingzuo[6]
          })
        } else {
          that.setData({
            xingzuotext: "巨蟹座," + xingzuo[5]
          })
        }
        break;
      case "8月":
        if (qi > 22) {
          that.setData({
            xingzuotext: "处女座," + xingzuo[7]
          })
        } else {
          that.setData({
            xingzuotext: "狮子座," + xingzuo[6]
          })
        }
        console.log("您出生在8月");
        break;
      case "9月":
        if (qi > 22) {
          that.setData({
            xingzuotext: "天平座," + xingzuo[8]
          })
        } else {
          that.setData({
            xingzuotext: "处女座," + xingzuo[7]
          })
        }
       
        break;
      case "10月":
        if (qi > 23) {
          that.setData({
            xingzuotext: "天蝎座," + xingzuo[9]
          })
        } else {
          that.setData({
            xingzuotext: "天平座," + xingzuo[8]
          })
        }
        console.log("您出生在10月");
        break;
      case "11月":
        if (qi > 22) {
          that.setData({
            xingzuotext: "射手座," + xingzuo[10]
          })
        } else {
          that.setData({
            xingzuotext: "天蝎座," + xingzuo[9]
          })
        }
        
        break;
      case "12月":
        if (qi > 21) {
          that.setData({
            xingzuotext: "摩羯座," + xingzuo[11]
          })
        } else {
          that.setData({
            xingzuotext: "射手座," + xingzuo[10]
          })
        }
        
        break;
      default:
        console.log("default");
    }
  },

  lookxingge:function(){

    wx.navigateTo({
      url: '../tabtwo/tabtwo'
    });

  },
  
  mySelect(e) {
    
    var name = e.currentTarget.dataset.name
    var datatext = e.target.dataset.text
    this.setData({
      tihuoWay: datatext,
      select: false
    })
  },

  mySelect2(e) {
    var name = e.currentTarget.dataset.name
    var datenum=e.target.dataset.text
    this.setData({
      tihuoday: name,
      dateriqi: datenum,
      select2: false
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})