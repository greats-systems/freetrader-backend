module.exports = (app) => {
    const controller = require('../../controllers/farmer/farm.js')
    const router = require('../../router/router.js')

    router.post('/farm/create', controller.createFacilityDetails)
    router.get('/farms', controller.getFacilityDetails)
    router.get('/farm', controller.getFacilityDetailsByID)
    router.put('/farm/update', controller.updateFacilityDetails)
    router.delete('/farm/delete', controller.deleteFacilityDetails)

    app.use('/api', router)
}