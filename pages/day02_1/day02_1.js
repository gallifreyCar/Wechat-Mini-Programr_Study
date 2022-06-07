// pages/day02_1/day02_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info: 'hellow world',
      imgSrc: 'https://gallifrey.asia/images/shizi.png',
      imgSrc2: '/images/bg8.jpg',
      imgMode: 'aspectFit',
      randomNum: Math.random()*10,
      randomNum2: Math.random().toFixed(2),
      count: 0,
      msg: '你好，',
      type: 1,
      flag: false,
      arr1:['苹果','华为','小米'],
      user:[
        {id: 1,name:'苹果'},
        {id: 2,name:'华为'},
        {id: 3,name:'小米'}
      ]
      
  },

    //定义按钮的事件处理函数
  btnTapHandler(e){
    console.log(e)
  },
  CountChange(e){
    this.setData({
      count:this.data.count+1
    })
  },

  //编程式导航，跳转到非TabBar页面
  gotoAB(){
    wx.navigateTo({
      url: '/pages/testbutton/testbutton',
    })
  },

//编程式导航传参
  gotoTest(){
    wx.navigateTo({
      url: '/pages/testbutton/testbutton?name=abc&gender=男',
    })
  },
  //发起GET数据请求
  getInfo(){
    wx.request({
      url: 'https://test-api-roan.vercel.app/api/test',
      method:"GET",
      data:{
        name: '测试GET',
        id: 1
      },
      success:(res)=>{
        console.log(res.data)
      }

    })
  },

  postInfo(){
    wx.request({
      url: 'https://test-api-roan.vercel.app/api/test2',
      method:"POST",
      data:{
        name: '测试POST',
        id: 2
      },
      success:(res)=>{
        console.log(res.data)
      }

    })
  },


  btnTap2(e){
    //打印传参对象dataset，dataset包含data-*所有传参项
    console.log(e.target.dataset)
    //打印具体传参值
    console.log(e.target.dataset.info)
    //使用传参的值
    this.setData({
      count: this.data.count+e.target.dataset.info
    })
  },
//input 输入框的事件处理函数
  inputHandler(e){
    //e.detail.value 是变化后的输入值
    this.setData({
      msg: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.getInfo()
      this.postInfo()
    
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
    console.log('触发下拉刷新')
    wx.stopPullDownRefresh()
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

