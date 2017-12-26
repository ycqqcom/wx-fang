// pages/main/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    phone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://192.168.171.1/jd/w.php/api/index/fangShow/',
      headers: { 'Content-Type': 'application/json' },
      data:{
        id:options.id
      },
      success(res){
        that.setData({fang:res.data})
        // that.setData({phone:res.data[1].phone})
        // console.log(res.data[1].phone)
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