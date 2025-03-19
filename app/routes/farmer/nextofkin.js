module.exports = (app) => {
    const controller = require('../../controllers/farmer/nextofkin.js')
    const router = require('../../router/router.js')

    router.post('/next-of-kin/create', controller.createNextOfKin)
    router.get('/next-of-kins', controller.getNextOfKins)
    router.get('/next-of-kin', controller.getNextOfKinByID)
    router.patch('/next-of-kin/update', controller.updateNextOfKin)
    router.delete('/next-of-kin/delete', controller.deleteNextOfKin)

    app.use('/api', router)
}