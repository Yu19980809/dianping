// pages/restaurants/show.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 跳转到review新增页面
     */
    onNavigateToReviewNew() {
        wx.navigateTo({
            url:`/pages/reviews/new?id=${this.data.restaurant.id}&name=${this.data.restaurant.name}`,
        })
    },

    /**
     * 跳转到map页面
     */
    onNavigateToMap() {
        wx.navigateTo({
            url: `/pages/restaurants/map?id=${this.data.restaurant.id}`,
        })
    },

    /**
     * 跳转到reviews页面
     */
    onNavigateToReviews() {
        wx.navigateTo({
            url: `/pages/reviews/index?id=${this.data.restaurant.id}`,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log("restaurant show onLoad", options)
        const page = this
        const id = options.id

        // 根据id获取到当前restaurant所有信息
        wx.request({
            url: `http://localhost:3000/api/v1/restaurants/${id}`,
            success(res) {
                console.log('get restaurant', res)
                if (res.statusCode !== 200) return
                // 将请求到的数据保存在dataObject中
                page.setData({ restaurant: res.data })
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