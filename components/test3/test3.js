// components/test3/test3.js
Component({
  options:{
    pureDataPattern: /^_/
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
    _rgb:{
        r: 0,
        g: 0,
        b: 0

    },
    fullColor:'0, 0, 0'
        

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _randomColor(){
        this.setData({
            _rgb:{
                r:Math.floor(Math.random()*256),
                g:Math.floor(Math.random()*256),
                b:Math.floor(Math.random()*256),
            }
        })
    },

    changeR(){
        this.setData({
            '_rgb.r':this.data._rgb.r+5>=255 ? 255 : this.data._rgb.r+5
        })
    },
    changeG(){
        this.setData({
            '_rgb.g':this.data._rgb.g+5>=255 ? 255 : this.data._rgb.g+5
        })
    },
    changeB(){
        this.setData({
            '_rgb.b':this.data._rgb.b+5>=255 ? 255 : this.data._rgb.b+5
        })
    },
  },
  observers :{
    // 'rgb.r, rgb.g, rgb.b':function(r,g,b){
    //     this.setData({
    //         fullColor:`${r},${g},${b}`
    //     })
    // }
    '_rgb.**':function(obj){
        this.setData({
            fullColor:`${obj.r},${obj.g},${obj.b}`
        })
    }
  },
  //旧方式定义生命周期函数
  // created(){
  //   console.log('created')
  // },
  // attached(){
  //   console.log('attached')
  // },

  //推荐用法 定义生命周期函数
  lifetimes:{
    created(){
      console.log('created')
    },
    attached(){
      console.log('attached')
    }
  },

  pageLifetimes:{
      show(){
        console.log('show')
        this._randomColor()
      },
      hide(){
        console.log('hide')
      },
      resize(){
          console.log('resize')
      }
  }
})
