module.exports = (app) => {
    const controller = require('../../controllers/farmer/livestock.js')
    const router = require('../../router/router.js')

    router.post('/livestock/create', controller.createLivestock)
    router.get('/livestock', controller.getLivestock)
}