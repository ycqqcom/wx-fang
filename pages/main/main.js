// pages/main/main.js
// var comm = require('../comm/comm.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fangCount:[],
  },

  aaa:function(){
    console.log('生命周期函数--监听页面加载');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      var that = this
      wx.request({
        url: 'http://127.0.0.1/jd/w.php/api/index',
        headers: {'Content-Type':'application/json'},
        success: function (res) {
          //将获取到的json数据，存在名字叫zhihu的这个数组中
          that.setData({
            fang:res.data
            //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
          })
          // console.log(res.data)
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
        url: 'http://127.0.0.1/jd/w.php/api/index/fangCount',
        headers: { 'Content-Type': 'application/json' },
        success:function(res){
          that.setData({counts:res.data})
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