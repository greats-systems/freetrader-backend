module.exports = (app) => {
    const controller = require('../../controllers/posts/posts.js')
    const router = require('../../router/router.js')

    router.post('/post/create', controller.createPost)
    router.get('/posts', controller.getPosts)
    router.get('/posts/type', controller.getPostsByType)
    router.get('/post', controller.getPostsByID)
    router.patch('/post/update', controller.updatePost)
    router.delete('post/delete', controller.deletePost)

    app.use('/api', router)
}