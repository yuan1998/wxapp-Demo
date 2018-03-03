// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:false,
  },


  /**
   * Login Method . sync to app
   * @return {[type]} [description]
   */
  login(){
    wx.login({

      success(res)
      {
        console.log(res);
      },
      fail(res)
      {
        console.log(res);
      }
    })
  },
})