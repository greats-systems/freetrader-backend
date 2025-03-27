module.exports = (app) => {
    const router = require('../../router/router.js')
    const controller = require('../../controllers/markets/markets.js')

    router.post('/markets/create', controller.createMarket)
    router.get('/markets', controller.getMarkets)
    // router.get('/marketplace/city-or-category', controller.getMarketplaceProductsByCategoryOrCity)
    router.get('/marketplace-slider-commodities', controller.getMarketplaceSliderCommodities)
    router.get('/marketplace-commodities', controller.getMarketplaceCommodities)
    router.get('/marketplace-products', controller.getMarketplaceProducts)
    router.get('/marketplace-products/category-city', controller.getMarketplaceProductsByCategoryOrCity)

    app.use('/api', router)
}