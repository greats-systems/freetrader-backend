module.exports = (app) => {
    const controller = require('../../controllers/contract/contract.js')
    const router = require('../../router/router.js')

    router.post('/contract/create', controller.createContract)
    router.get('/contracts', controller.getContracts)
    router.get('/contract', controller.getContractByID)
    router.patch('/contract/update', controller.updateContract)
    router.delete('/contract/delete', controller.deleteContract)

    app.use('/api', router)
}