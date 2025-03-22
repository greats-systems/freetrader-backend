module.exports = (app) => {
    const controller = require('../../controllers/commodity/commodityproduction.js')
    const router = require('../../router/router.js')

    router.post('/commodity-production/create', controller.createCommodityProduction)
    router.get('/commodity-productions', controller.getCommodityProductions)

    app.use('/api', router)
}

