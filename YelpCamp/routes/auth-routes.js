const express = require("express");
const router = express.Router();
const passport = require("passport");

const { catchAsync } = require("../utils/ExpressError&catchAsync");
const User = require("../models/user");
const { request } = require("express");

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post(
  "/signup",
  catchAsync(async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email });
      // always remember new User({}), {} is important!
      const signupUser = await User.register(user, password);
      req.flash("success", "Sign up successfully, Welcome to YelpCamp!");
      res.redirect("/campgrounds");
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("success", `Welcome back! ${req.body.username}`);
    res.redirect("/campgrounds");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", `Log out! Goodbye ${req.body.username}`);
  res.redirect("/campgrounds");
});

module.exports = router;
