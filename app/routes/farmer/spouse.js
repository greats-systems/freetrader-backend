module.exports = (app) => {
    const controller = require('../../controllers/farmer/spouse.js')
    const router = require('../../router/router.js')

    router.post('/spouse/create', controller.createSpouse)
    router.get('/spouses', controller.getSpouses)
    router.get('/spouse', controller.getSpouseByID)
    router.patch('/spouse/update', controller.updateSpouse)
    router.delete('/spouse/delete', controller.deleteSpouse)

    app.use('/api', router)
}