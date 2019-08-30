//获取应用实例
const appInstance = new getApp()
// console.log(appInstance)
// pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (appInstance.globalData.userInfo) {
      this.setData({
        userInfo: appInstance.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      //由于getUserInfo是网络请求，可能在Page.onLoad之后才会返回，
      //为防止这样的事情发生，加入callback
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },

  //获取用户信息
  getUserInfo(e) {
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }


})