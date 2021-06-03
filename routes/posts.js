const { Router } = require('express');
const router = Router()
const controllers = require('../controllers/posts')


// GET /posts
// GET /posts/:id
// GET /categories/:id/posts
// POST /posts
// DELETE /posts/:id
// PATCH /posts/:id
router.post('/posts', controllers.postTitle)

router.get('/posts', controllers.getPost)
router.get('/posts/:id',controllers.getPostId)
router.get('/categories/:id/posts', controllers.getCategory)

router.delete('/posts/:id', controllers.deletePost)

router.put('/posts/:id', controllers.patchPost)

module.exports = router