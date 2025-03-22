module.exports = (app) => {
    const controller = require('../../controllers/inputs/inputsinventory.js')
    const router = require('../../router/router.js')

    router.post('/input-inventory/create', controller.createInputsInventory)
    router.get('/input-inventories', controller.getInputsInventory)

    app.use('/api', router)
}

