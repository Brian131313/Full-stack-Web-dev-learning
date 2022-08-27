const express = require("express");
const router = express.Router();
const passport = require("passport");

const { catchAsync } = require("../utils/ExpressError&catchAsync");
const auth_controllers = require("../controllers/auth-controllers");

router.get("/signup", auth_controllers.getSignup);

router.post("/signup", catchAsync(auth_controllers.signupUser));

router.get("/login", auth_controllers.getLogin);

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  auth_controllers.loginUser
);

router.get("/logout", auth_controllers.logout);

module.exports = router;
