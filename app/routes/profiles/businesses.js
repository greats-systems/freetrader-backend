module.exports = (app) => {
    const controller = require('../../controllers/profiles/businesses.js')
    const router = require('../../router/router.js')

    router.post('/business/create', controller.createBusiness)
    router.get('/businesses', controller.getBusinesses)
    router.get('/businesses/profile', controller.getProfileBusinessList)
    router.get('/businesses/local/category', controller.getLocalCategoryBusinessList)
    router.get('/businesses/verified', controller.getVerifiedBusinessList)
    router.get('businesses/local', controller.getLocalMarketBusinessList)
    router.get('/businesses/market/subscribing', controller.getMarketSubscribingBusinessList)
    router.get('/business', controller.getBusinessByID)
    router.patch('/business/update', controller.updateBusiness)
    router.delete('/business/delete', controller.deleteBusiness)

    app.use('/api', router)
}