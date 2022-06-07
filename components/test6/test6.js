// components/test6/test6.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  behaviors:[storeBindingsBehavior],
  storeBindings: {
    //数据源
    store,
    fields:{
      // numA:()=>store.numA //方法1
      // numA:(store)=>store.numA //方法2
      numA:'numA',        //方法3
      numB:'numB',
      sum:'sum'
    },
    actions:{
      updataNum2:'updataNum2'
    }
  },
     

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandler2(e){
      console.log(e)
      this.updataNum2(e.target.dataset.step)
    }
  
  }
})
