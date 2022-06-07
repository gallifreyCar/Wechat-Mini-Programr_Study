//在这个js文件中，专门创建Store的实例对象
import {observable,action} from "mobx-miniprogram"

export const store= observable({
  //数字字段
  numA: 1,
  numB: 2,

  //计算属性
  get sum(){
    return this.numA+this.numB
  },

  //actions 方法，用来修改store中的数据
  updataNum1: action(function (step) {
      this.numA+=step
  }),
  updataNum2:action(function (step) {
    this.numB+=step
  })
})