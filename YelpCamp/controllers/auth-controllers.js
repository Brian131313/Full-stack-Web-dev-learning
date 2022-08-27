const User = require("../models/user");

getSignup = (req, res) => {
  res.render("auth/signup");
};

signupUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });
    // always remember new User({}), {} is important!
    const signupUser = await User.register(user, password);
    req.login(signupUser, (err) => {
      if (err) return next(err);
      req.session.user = signupUser;
      req.flash("success", "Sign up successfully, Welcome to YelpCamp!");
      res.redirect("/campgrounds");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

getLogin = (req, res) => {
  res.render("auth/login");
};

loginUser = (req, res) => {
  req.flash("success", `Welcome back! ${req.body.username}`);
  res.redirect("/campgrounds");
};

logout = (req, res) => {
  req.logout((err) => {
    req.flash("success", `Log out! Goodbye!`);
    res.redirect("/campgrounds");
  });
};

module.exports = {
  getSignup,
  signupUser,
  getLogin,
  loginUser,
  logout,
};
