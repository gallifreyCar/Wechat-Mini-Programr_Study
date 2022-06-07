// pages/day04/day04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    latitude:0,
    longitude:0,
    speed:0,
    accuracy:0,

  },


  syncCount(e){
    console.log(e.detail.value)
    this.setData({
        count:e.detail.value
    })
  },
  GetLoc(){
    wx.getLocation({
        type: 'wgs84',
        success:(res) =>{
            const latitude = res.latitude
            const longitude = res.longitude
            const speed = res.speed
            const accuracy = res.accuracy
            this.setData({
                latitude: res.latitude,
                longitude: res.longitude,
                speed:res.speed,
                accuracy:res.accuracy
        })

        }
     

    })

  },


  getChild(){
    // const child =this.selectComponent('.customA')
    const child =this.selectComponent('#cA') //也可以用id选择器
    // child.setData({
    //     count:child.properties.count+1
    // })
    child.addCount()//可以使用子组件的方法
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})