module.exports = (app) => {
    const controller = require('../../controllers/farmer/farmer.js')
    const router = require('../../router/router.js')

    router.post('/farmer/create', controller.createFarmer)
    router.get('/farmers', controller.getFarmers)
    router.get('/farmer', controller.getFarmerByID)
    router.patch('/farmer/update', controller.updateFarmer)
    router.delete('/farmer/delete', controller.deleteFarmer)

    app.use('/api', router)
}