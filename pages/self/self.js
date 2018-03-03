// pages/self/self.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:false,
    app:false,
  },


  /**
   * On click Avatar . check is Login. is login call readUser Method . else call login Method.
   */
    avatarEvent()
    {
        this.user ? this.readUser() : this.login();
    },


    /**
    * Login Method . sync to app
    * @return {[type]} [description]
    */
    login(){
        var that = this;

        wx.login({
            success(res)
            {
                wx.getUserInfo({
                    success(res)
                    {

                        app.user = res.userInfo;

                        that.setData({
                            user: app.user
                        })

                    }
                })
            },
            fail(res)
            {
                console.log(res,'fail');
            }
        })
    },


    /**
     *  Click user avatar router to user info page.
     */
    readUser()
    {

    },


    /**
     * On Page Show . life cycle
     */
    onShow(){
        this.setData({
            user: app.user,
        })
    }
})