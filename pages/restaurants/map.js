// pages/restaurants/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('map onLoad', options)
        const page = this

        // 根据id请求restaurant数据
        wx.request({
            url: `http://localhost:3000/api/v1/restaurants/${options.id}`,
            success(res) {
                console.log('get restaurant on map', res)
                // 将请求的数据保存在dataObject中
                page.setData({
                    restaurant: res.data,
                    markers: [{
                        id: res.data.id,
                        latitude: res.data.latitude,
                        longitude: res.data.longitude,
                        title: res.data.name,
                        callout: {
                            content: res.data.name,
                            padding: 4,
                            borderRadius: 4,
                            borderWidth: 1,
                            borderColor: '#0000ff',
                            display: 'ALWAYS'
                        }
                    }]
                })

                // 设置map
                page.mapCtx = wx.createMapContext(`map${res.data.id}`)
            }
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})