Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    swiperList:[],
    videoList:[],
    //被点击导航项
    currentIndex:0
  },
  //获取首页导航数据
  getNavList(){
    let that=this;
    wx.request({
      url: 'http://localhost:3000/navList',
      success(res){
        if(res.statusCode==200){
          that.setData({
            navList:res.data.navs
          })
        }
        // console.log(res)
      }
    })
  },
  // 获取轮播图列表
getSwiperList(){
  let that=this;
  wx.request({
    url:'',
    success(res){
      if(res.statusCode===200){
        that.setData({
          swiperList:res.data.swiperList
        })
      }
    }
  })
},
// 获取视频列表
getVideoList(){
  wx.request({
    url:'',
    success(res){
      console.log(res)
    }
  })
},
  //点击首页导航按钮
  activeNav(e){
   this.setData({
     currentIndex:e.target.dataset.index
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})