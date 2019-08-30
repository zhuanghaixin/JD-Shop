//引入接口
const interfaces = require("../../utils/urlconfig.js")
// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [],
    logos: [],
    pageRow: [],
    quicks: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载中
    wx.showLoading({
      title: "加载中",
    });
    //请求数据
    wx.request({
      url: interfaces.homepage,
      header: {
        "content-type": "application/json" //默认 ，返回的数据类型
      },
      success: (res) => {
        console.log(res.data)
        console.log(this)
        this.setData({
          swipers: res.data.swipers,
          logos: res.data.logos,
          pageRow: res.data.pageRow,
          quicks: res.data.quicks,
        })
        wx.hideLoading()
      },

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