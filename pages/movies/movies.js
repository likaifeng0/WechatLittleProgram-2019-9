// pages/movies/movies.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onMoreBindTap: function() {
    wx.navigateTo({
      url: '/pages/movies/movies-more/movies-more',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /**
     * 1.在onLoad方法中，
     *    (1)获取成员变量doubanMoviesData=域名
     *      在js文件顶行： var app = getApp();
     *      在onLoad方法中：var doubanMoviesData = app.globalData.doubanMoviesData;
     *     (2)拼接request方法中的url值
     *    分别获取正在热映、即将上映和top250的url，并且分别赋值给自定义的变量inTheatersUrl、comingSoonUrl、                top250Url
     *  var inTheatersUrl = doubanMoviesData + "/v2/movie/in_theaters";
        var comingSoonUrl = doubanMoviesData + "/v2/movie/coming_soon";
        var top250Url = doubanMoviesData + "/v2/movie/top250";
     */
    var doubanMoviesData = app.globalData.doubanMoviesData;
    var inTheatersUrl = doubanMoviesData + "/v2/movie/in_theaters?start=0&count=3";
    var comingSoonUrl = doubanMoviesData + "/v2/movie/coming_soon?start=0&count=3";
    var top250Url = doubanMoviesData + "/v2/movie/top250?start=0&count=3";
    /**
     * (3)调用getMoviesListData(url),返回所有数据对象，并赋值给对应的变量
     *  var inTheaters = this.getMoviesListData(inTheatersUrl);
        var comingSoon = this.getMoviesListData(comingSoonUrl);
        var top250 = this.getMoviesListData(top250Url);
     */
    this.getMoviesListData(inTheatersUrl, "inTheaters", "正在热映");
    this.getMoviesListData(comingSoonUrl, "comingSoon", "即将上映");
    this.getMoviesListData(top250Url, "top250", "Top250");


  },
  /**
   * 自定义getMoviesListData(url),网络请求
   */
  getMoviesListData: function(url, settedKey, categoryData) {
    var that = this;
    wx.request(
      {
      url: url,
      method: "GET",
      header: {
        "Content-Type": "appliction/xml"
      },
      success: function(res) {

        console.log(res);
        //调用processDoubanMoviesData(args)方法
        that.processDoubanMoviesData(res.data, settedKey, categoryData);
      },
      fail: function(res) {
        console.log("fail");
      }
    })
  },
  /**
   * 自定义processDoubanMoviesData(args),用来接收数据，并处理数组
   */
  processDoubanMoviesData: function(moviesDoubanData, settedKey, categoryData) {
    //1.声明一个空数组
    var movies = [];
    //2.遍历数组获取item对象（元素对象），再获取对应数据
    for (var idx in moviesDoubanData.subjects) {
      //获取到subjects数组的一个元素对象，可以理解为item对象，并把item对象赋值给subject变量
      var subject = moviesDoubanData.subjects[idx]; 
      //获取数据：获取电影名称title，获取到title数据，并赋值给title变量  
      var title = subject.title;
      //对获取的数据进行处理：获取到的电影名称，如果超过6个字符，就只截取前6个字符。
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      // var temp = {
      //   title: title,
      //   average: subject.rating.average,
      //   coverageUrl: subject.images.large,
      //   movieId: subject.id,
      // }
      // movies.push(tmp);
      //3.把获取的数据以键值对的形式push到movies数组中
      movies.push({
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
      });
    }
    // this.setData({
    //   movies:movies
    // });
    var readyData = {};
    // readyData[settedKey] = movies;
    readyData[settedKey] = {
      movies: movies,
      categoryData: categoryData
    };
    this.setData(readyData);
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