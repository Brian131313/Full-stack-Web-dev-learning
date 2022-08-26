const express = require("express");
const router = express.Router();
const { catchAsync } = require("../utils/ExpressError&catchAsync");
const User = require("../models/user");

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
      console.log(signupUser);
      req.flash("success", "Sign up successfully, Welcome to YelpCamp!");
      res.redirect("/campgrounds");
    } catch (err) {
      req.flash("error", err.message);
      res.redirect("/signup");
    }
  })
);

module.exports = router;
