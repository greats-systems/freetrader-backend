module.exports = (app) => {
    const controller = require('../../controllers/inputs/inputsutilization.js')
    const router = require('../../router/router.js')

    router.post('/input/create', controller.createInputsUtilization)
    router.get('/inputs', controller.getInputsUtilization)

    app.use('/api', router)
}

