module.exports = (app) => {
    const controller = require('../../controllers/payroll/payroll.js')
    const router = require('../../router/router.js')

    router.post('/payroll/create', controller.createPayslip)
    router.get('/payrolls', controller.getPayslips)
    router.get('/payroll', controller.getPayslipByID)
    router.patch('/payroll/update', controller.updatePayslip)
    router.delete('/payroll/delete', controller.deletePayslip)

    app.use('/api', router)
}

