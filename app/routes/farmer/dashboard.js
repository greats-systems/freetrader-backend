module.exports = (app) => {
    const controller = require('../../controllers/farmer/dashboard.js')
    const router = require('../../router/router.js')

    router.get('/farmer-dashboard', controller.populateFarmerDashboard)

    app.use('/api', router)
}