// pages/main/fang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages:[],
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
 
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://127.0.0.1/jd/w.php/api/index/fang',
      data:{
        pageSize:10,
        page:1
      },
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          fang: res.data
        })
      }
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
    var that = this
    wx.request({
      url: 'http://127.0.0.1/jd/w.php/api/index/getPage/pagename/fang/num/20',
      headers: { 'Content-Type': 'application/json' },
      success:function(res){
        that.setData({pages:res.data})
      }
    })
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
    this.onLoad()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    that.setData({
      page:++that.data.page
    })
    wx.request({
      url: 'http://127.0.0.1/jd/w.php/api/index/fang',
      data:{
        pageSize: 10,
        page:that.data.page
      },
      headers: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          fang: that.data.fang.concat(res.data)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
 
  }
})