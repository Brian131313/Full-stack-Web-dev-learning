const express = require("express");
const router = express.Router();
// here define router, router Object is part of express package.
const authController = require("../controllers/auth-controller");
// here import authController from other file with a path.

router.get("/signup", authController.getSignup);

router.post("/signup", authController.signup);

router.get("/login", authController.getLogin);

module.exports = router;
// here exports router to other files.
