const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");
const postRoutes = require("./post.routes");

router.get("/about", (req, res) => {
  res.send("About page");
});

router.get("/error-test", (req, res, next) => {
  next(new Error("Internal server error"));
});

router.use("/users", usersRoutes);
router.use("/posts", postRoutes);

module.exports = router;
