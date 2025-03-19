module.exports = (app) => {
    const controller = require('../../controllers/farmer/cooperative.js')
    const router = require('../../router/router.js')

    router.post('/facility-cooperative/create', controller.createFacilityCooperative)
    router.get('/facility-cooperatives', controller.getFacilityCooperatives)
    router.get('/facility-cooperative', controller.getFacilityCooperativeByID)
    router.patch('/facility-cooperative/update', controller.updateFacilityCooperative)
    router.delete('/facility-cooperative/delete', controller.deleteFacilityCooperative)

    app.use('/api', router)
}