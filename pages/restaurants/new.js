// pages/restaurants/new.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 处理表单提交
     */
    onSubmit(e) {
        console.log("onSubmit", e)
        const page = this
        const formData = e.detail.value

        // 根据地址获取经纬度
        const address = formData.address.replace(' ', '%20')
        const city = formData.city
        const country = formData.country
        const token = 'pk.eyJ1IjoibGlicmEwODA5IiwiYSI6ImNsYXA0Z2NtZDB5NHUzcW4wdzhzbHNpcWUifQ.FIdlGM0w7swLkths6Gx2og'
        wx.request({
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?city=${city}&country=${country}&access_token=${token}`,
            success(res) {
                console.log("geocoding successfully", res)
                if (res.statusCode !== 200 || res.data.features.length === 0) return
                // 发送请求，添加数据
                const geocodeData = res.data.features[0]
                const restaurant = {
                    name: formData.name,
                    description: formData.description,
                    address: formData.address,
                    city: formData.city,
                    country: formData.country,
                    longitude: geocodeData.center[0],
                    latitude: geocodeData.center[1],
                    phone: formData.phone,
                    image: formData.image
                }
               page.onCreateRestaurant(restaurant)
            },
            fail(err) {
                console.log("geocoding faild", err)
            }
        })
    },

    /**
     * 发送请求，添加数据
     */
    onCreateRestaurant(restaurant) {
        wx.request({
            url: 'http://localhost:3000/api/v1/restaurants',
            method: 'POST',
            data: restaurant,
            success(res) {
                console.log("created restaurant successfully", res)
                wx.switchTab({
                    url: '/pages/restaurants/index',
                })
            }
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