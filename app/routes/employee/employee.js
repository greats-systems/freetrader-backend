module.exports = (app) => {
    const controller = require('../../controllers/employee/employee.js')
    const router = require('../../router/router.js')

    router.post('/employee/create', controller.createEmployee)
    router.get('/employees', controller.getEmployees)
    router.get('/employee', controller.getEmployeeByID)
    router.patch('/employee/update', controller.updateEmployee)
    router.delete('/employee/delete', controller.deleteEmployee)

    app.use('api', router)
}