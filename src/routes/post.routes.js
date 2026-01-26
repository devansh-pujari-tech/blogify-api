const express = require("express");

const router = express.Router();

const postController = require('./controllers/posts.controller.js');

// 2. Use the controller function as the route handler
// The router's job is now just to connect the path '/' to the 'getAllPosts' function.
router.get('/', postController.getAllPosts);

router.post('/', (req, res) => {
  res.send('creating a new blog post...');
});

module.exports = router;