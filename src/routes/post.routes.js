const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
  res .send('feching all blog posts from the modular router!');
});
router.post('\/', (req, res) => {
  res.send('creating a new blog post...');
});
module.exports = router;