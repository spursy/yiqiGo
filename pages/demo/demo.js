let app = getApp();
let common = require('../../common/common.js');

// demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'init data',
    array: [{ msg: '1' }, { msg: '2' }],
    num: 10
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
  
  },

  viewTap: function () {
    console.log('view tap')
  },
  changeNum: function () {
    this.data.num = this.data.num + 1
    this.setData({
      num: this.data.num
    })
  },
  addGlobalName: function () {
    app.globalName.push('YY')
    console.log(JSON.stringify(app.globalName))
    common.sayHello()
  }
})