module.exports = (app) => {
    const controller = require('../../controllers/certificate/certificate.js')
    const router = require('../../router/router.js')
    router.post('/certificate/create', controller.createCertificate);
    router.get('/certificates', controller.getCropCertificates)
    router.get('/certificate', controller.getCropCertificateByID)
    router.patch('/certificate/update', controller.updateCropCertificate)
    router.delete('/certificate/delete', controller.deleteCropCertificate)

    app.use('/api', router)
}