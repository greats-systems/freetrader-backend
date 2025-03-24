module.exports = (app) => {
    const router = require('../../router/router.js')
    const controller = require('../../controllers/products/products.js')

    router.post('/product/create', controller.createProduct)
    router.get('/products', controller.getProducts)
    router.get('/product', controller.getProductByID)
    router.get('/product-categories', controller.getProductsCategories)
    router.patch('/product/update', controller.updateProduct)
    router.delete('product/delete', controller.deleteProduct)

    app.use('/api', router)
}