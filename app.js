App({

  	user:false,

	onLaunch(){
		var that = this;

	    wx.checkSession({
	    	success(){
	    		wx.getUserInfo({success(res){that.user = res.userInfo}})
	    	}
	    })

  	}
})
