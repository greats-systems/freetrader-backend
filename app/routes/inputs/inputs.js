module.exports = (app) => {
    const controller = require('../../controllers/inputs/inputs.js')
    const router = require('../../router/router.js')

    router.post('/input/create', controller.createInputs)
    router.get('/inputs', controller.getInputs)

    app.use('/api', router)
}

