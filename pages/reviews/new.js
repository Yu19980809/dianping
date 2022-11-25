// pages/reviews/new.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 表单提交
     */
    onSubmit(e) {
        console.log('new review submit', e)
        const page = this
        const data = {
            content: e.detail.value.content,
            rating: e.detail.value.rating,
            restaurant_id: this.data.restaurant.id
        }

        // 发送请求，添加review
        wx.request({
            url: `http://localhost:3000/api/v1/restaurants/${this.data.restaurant.id}/reviews`,
            method: 'POST',
            data: data,
            success(res) {
                console.log('create review', res)
                wx.navigateTo({
                    url: `/pages/reviews/index?id=${page.data.restaurant.id}`,
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('review new onLoad', options)
        // 将restaurant数据存下来
        this.setData({
            restaurant: {
                id: options.id,
                name: options.name
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