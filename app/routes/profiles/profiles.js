module.exports = (app) => {
    const router = require('../../router/router.js')
    const controller = require('../../controllers/profiles/profiles.js')

    router.post('/profile/create', controller.createProfile)
    router.get('/profiles', controller.getProfiles)
    router.get('/profile', controller.getProfileByID)
    router.patch('/profile/update', controller.updateProfile)
    router.delete('/profile/delete', controller.deleteProfile)

    app.use('/api', router)
}