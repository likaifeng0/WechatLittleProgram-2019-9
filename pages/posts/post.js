var local_datas = require("../../data/local-data");
Page({

  /**
   * 页面的初始数据
   * 
   * 数组
   * 
   * int[] arr = {3,54,2,11};
   *              0  1 2  3
   * 
   * 54     arr[1]
   * 
   */
  data: {
   
  },
  onSwiperItemTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '/pages/posts/post-detail/post-detail?id=' + postId
    })
  },
  postDetailTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    // console.log("postId="+postId);
   
    wx.navigateTo({
      url: '/pages/posts/post-detail/post-detail?id=' + postId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      post_key : local_datas.postList
    })
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