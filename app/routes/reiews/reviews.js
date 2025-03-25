module.exports = (app) => {
    const router = require('../../router/router.js')
    const controller = require('../../controllers/reviews/reviews.js')

    router.post('review/create', controller.createReview)
    router.get('/reviews', controller.getReviews)
    router.get('/review', controller.getReviewsByID)
    router.patch('/review/update', controller.updateReview)
    router.delete('/review/delete', controller.deleteReview)

    app.use('/api', router)
}