Page({

  /**
   * 页面的初始数据
   * key:value
   * 
   * 谢娜的老公:张杰
   * 
   * 
   * 页面A：key:张杰
   * 页面B:getKey
   * 页面C:getKey
   */
  data: {

  },
  /**
   * 监听页面跳转
   * ../ 返回一级
   */
  bindTapName:function(){
    // wx.navigateTo({
    //   url: '/pages/post/post',
    // })
    // wx.redirectTo({
    //   url: '/pages/posts/post',
    // })
    wx.switchTab({
      url: '/pages/posts/post',
    })
  },
  bindTap:function(){
    console.log("父容器：bindTap")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // console.log("onHide():当前页面已隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("onUnload():当前页面已销毁");
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