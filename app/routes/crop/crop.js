module.exports = (app) => {
    const controller = require('../../controllers/crop/crop.js')
    const router = require('../../router/router.js')

    router.post('/crop/create', controller.createCrop)
    router.get('/crops', controller.getCrops)
    router.get('/crop', controller.getCropByID)
    router.patch('/crop/update', controller.updateCrop)
    router.delete('/crop/delete', controller.deleteCrop)

    app.use('/api', router)
}