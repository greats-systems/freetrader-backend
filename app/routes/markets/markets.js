module.exports = (app) => {
    const router = require('../../router/router.js')
    const controller = require('../../controllers/markets/markets.js')

    router.post('/markets/create', controller.createMarket)
    router.get('/markets', controller.getMarkets)
    router.get('/market', controller.getMarketByCategory)
    router.get('/marketplace-slider-commodities', controller.getMarketplaceSliderCommodities)
    router.get('/marketplace-commodities', controller.getMarketplaceCommodities)
    router.get('/marketplace-products', controller.searchMarketplaceProducts)

    app.use('/api', router)
}