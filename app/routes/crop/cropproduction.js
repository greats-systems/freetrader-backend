module.exports = (app) => {
    const controller = require('../../controllers/crop/cropproduction.js')
    const router = require('../../router/router.js')

    router.post('/crop-production/create', controller.createCropProduction)
    router.get('/crop-productions', controller.getCropProductions)
    router.get('/crop-production', controller.getCropProductionByID)
    router.put('/crop-production/update', controller.updateCropProduction)
    router.delete('/crop-production/delete', controller.deleteCropProduction)

    app.use('/api', router)
}