// pages/restaurants/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 跳转到详情页
     */
    onNavigateToRestaurant(e) {
        console.log('onNavigateToRestaurant', e)

        wx.navigateTo({
          url: `/pages/restaurants/show?id=${e.currentTarget.dataset.id}`,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
        const page = this
        // 请求所有restaurants数据
        wx.request({
            url: 'http://localhost:3000/api/v1/restaurants',
            success(res) {
                console.log("get all restaurants", res)
                if (res.statusCode !== 200) return
                // 将获取到的数据保存在dataObject中
                page.setData({ restaurants: res.data.restaurants.reverse() })
          }
        })
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