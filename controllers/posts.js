const posts = require("../models/Posts");

const controllers = {
  postTitle: async (req, res) => {
    const post = await new posts({
      title: req.body.title,
    });
    await post.save();
    res.json(post);
  },
  getPost: async (req, res) => {
    const getPost = await posts.find({})
    res.json(getPost)
  },
  getPostId: async (req, res) => {
    const postId = await posts.findById(req.params.id)
    res.json(postId)
  },
  getCategory: async (req, res) => {
    const categoryId = await posts.findById(req.params.category.id)
    res.json(categoryId)
  },
  deletePost: async (req, res) => {
    const delPost = await posts.deleteOne(req.params.id)
    res.json(delPost)
  },
  patchPost: async (req, res) => {
    const patch = await posts.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(patch)
  }
};
module.exports = controllers