module.exports = (app) => {
    const controller = require('../../controllers/ward/ward.js')
    const router = require('../../router/router.js')

    router.post('/ward/create', controller.createWard)
    router.get('/wards', controller.getWards)

    app.use('/api', router)
}