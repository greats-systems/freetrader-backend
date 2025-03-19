module.exports = (app) => {
    const controller = require('../../controllers/commodity/commodity.js')
    const router = require('../../router/router.js')

    router.post('/commodity/create', controller.createCommodity)
    router.get('/commodities', controller.getCommodities)

    app.use('/api', router)
}

