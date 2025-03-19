module.exports = (app) => {
    const controller = require('../../controllers/certificate/certificate.js')
    const router = require('../../router/router.js')

    /**
   * @swagger
   * /:
   *   post:
   *     summary: Create crop certificate
   *     responses:
   *       200:
   *         description: This is where a crop certificate is created
   */
    router.post('/certificate/create', controller.createCertificate)
    router.get('/certificates', controller.getCropCertificates)
    router.get('/certificate', controller.getCropCertificateByID)
    router.put('/certificate/update', controller.updateCropCertificate)
    router.delete('/certificate/delete', controller.deleteCropCertificate)

    app.use('/api', router)
}