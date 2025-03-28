module.exports = (app) => {
    const controller = require('../../controllers/buckets/buckets.js')
    const router = require('../../router/router.js')

    router.post('/image/upload', controller.uploadImages)

    app.use('/api', router)

}