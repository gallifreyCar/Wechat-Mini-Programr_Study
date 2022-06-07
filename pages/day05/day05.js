// pages/day05/day05.js
import{createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  btnHandler1(e){
    console.log(e)
    this.updataNum1(e.target.dataset.step)
  },


  async getInfo(){
    const {data: res}= await wx.p.request({
      method:'Get',
      url:'https://test-api-roan.vercel.app/api/test',
      data: {
        name: '测试',
        id: 1412
      }
    })
    console.log(res)
  },

  // 一样的 
  // async getInfo(){
  //   const res= await wx.p.request({
  //     method:'Get',
  //     url:'https://test-api-roan.vercel.app/api/test',
  //     data: {
  //       name: '测试',
  //       id: 1412
  //     }
  //   })
  //   console.log(res.data)
  // },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.StoreBindings=createStoreBindings(this,{
      store,
      fields:['numA','numB','sum'],
      actions:['updataNum1','updataNum2']
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
    this.StoreBindings.destroyStoreBindings()
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