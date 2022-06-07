// pages/testbutton/testbutton.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    //导航传递过来的参数对象
    query: {},
    //字符串类型数据
    info: 'init data',
    //数组类型数据
    msgList:[{msg:'hello'},{msg: 'world'}]
  },
  //通过编程式导航跳转到tabBar页面
  gotoTabBar(){
    wx.switchTab({
      url: '/pages/day02_1/day02_1',
    })
  },

  //编程式导航，后退导航
  goBack(){
    wx.navigateBack({
      delta: 1,
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    this.setData({
      query:options
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('触发上拉触底事件')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})