var post_detail_data = require("../../../data/local-data");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   * 
   * 三目运算符
   * 
   * 语法结构：表达式?值1:值2;
   * 运算步骤：如果表达式为true，此三目运算的返回值为值1；
   *          如果表达式为false，此三目运算的返回值为值2。
   * 例如： int a = 4;
   *        int b = 5;
   *  a > b ? "是的，您是对滴！":"no，a不大于b！"; 
   */
  data: {
    isPlayingMusic: false
  },
  onAudioTap: function() {
    var isPlayingMusic = this.data.isPlayingMusic; //自定义一个控制变量
    if (isPlayingMusic) { //isPlayingMusic为true时，说明音乐正在播放，那么我们就可以调用 停止播放音乐的方法 
      wx.stopBackgroundAudio(); //停止播放音乐的方法
      this.setData({ //更改变量布尔值
        isPlayingMusic: false
      });
    } else {
      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        title: "此时此刻",
        coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
      })
      this.setData({
        isPlayingMusic: true
      });
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postId = options.id; //利用options对象获取到从post页面传递过来的id
    // console.log("postId=" + postId);
    this.setData({
      posts_key: post_detail_data.postList[postId]
      /**
       * post_detail_data.postList[postId]:获取到item对象，换句话说就是获取到数组中对应元素的对象
       */

    });

    var that = this;
    wx.onBackgroundAudioPlay(function() {
        that.setData({
          isPlayingMusic: true
        });
      }

    );
    wx.onBackgroundAudioPause(function() {
      that.setData({
        isPlayingMusic: false
      });
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})