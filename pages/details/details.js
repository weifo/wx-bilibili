// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommandedList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options 可以拿到url中传递的参数
    let videoId=options.id;
    this.getCurrentVideo(videoId);
    this.getOtherList(videoId);
    this.getCommentList(videoId);
  },
  getCurrentVideo(videoId){
    wx.request({
      url:'xxx/bili?id='+videoId,
      success(res){
        if(res.statusCOde===200){

        }
      }
    })
  },
  getOtherList(videoId){
    let _this=this;
    ex.request({
      url:'XXX.com'+videoId,
      success(res){
        _this.setData({
          recommandedList:res.data.data.otherList
        })
      }
    })
  },
  getCommentList(videoId){
    wx.request({
      url:'xxx',
      success(res){
        if(res.statusCode===200){
          this.setData({
            comments:res.data.commentList
          })
        }
      }
    })
  }
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