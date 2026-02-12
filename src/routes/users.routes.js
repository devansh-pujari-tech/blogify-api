const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("./controllers/users.controller.js");
router.use((req, res, next) => {
  console.log("users route hit: ", req.method, req.originalUrl);
  next();
});

const registrationRules = [
  body("email").isEmail().withMessage("please provide a valid email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 characters long"),
];

router.get("/", (req, res) => {
  res.json({ message: "user route is working!" });
});

router.post("/register", registrationRules, userController.registerUser);

module.exports = router;
