module.exports = (app) => {
    const controller = require('../../controllers/certificate/certificateissuer.js')
    const router = require('../../router/router.js')

    router.post('/certificate-issuer/create', controller.createCropCertificateIssuer)
    router.get('/certificate-issuers', controller.getCropCertificateIssuers)
    router.get('/certificate-issuer', controller.getCropCertificateIssuerByID)
    router.put('/certificate-issuer/update', controller.updateCropCertificateIssuer)
    router.delete('/certificate-issuer/delete', controller.deleteCropCertificateIssuer)

    app.use('/api', router)
}