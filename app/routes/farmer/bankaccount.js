module.exports = (app) => {
    const controller = require('../../controllers/farmer/bankaccount.js')
    const router = require('../../router/router.js')

    router.post('/bank-details/create', controller.createBankDetails)
    router.get('/bank-details', controller.getBankDetails)
    router.get('/farmer-bank-details', controller.getBankDetailsByID)
    router.put('/bank-details/update', controller.updateBankDetails)
    router.delete('/bank-details/delete', controller.deleteBankDetails)

    app.use('api', router)
}