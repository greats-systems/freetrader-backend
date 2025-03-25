module.exports = (app) => {
    const router = require('../../router/router.js')
    const controller = require('../../controllers/products/products.js')

    router.post('/product/create', controller.createProduct)
    router.get('/products', controller.getProducts)
    router.get('/products/market', controller.getMarketProducts)
    router.get('/products/business', controller.getBusinessProducts)
    router.get('/product', controller.getProductByID)
    router.get('/products/category', controller.getProductsCategories)
    router.get('/products/category/filter', controller.filterByProductCategory)   
    router.get('/products/location', controller.getProductsLocation) 
    router.patch('/product/update', controller.updateProduct)
    router.patch('/product/update/barcode', controller.updateProductBarCode)
    router.patch('/product/update/images', controller.uploadImages)
    router.delete('product/delete', controller.deleteProduct)

    app.use('/api', router)
}