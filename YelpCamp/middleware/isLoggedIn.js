const isLoggedIn = (req, res, next) => {
  req.session.returnUrl = req.originalUrl;
  const isLoggedIn = req.isAuthenticated();
  if (!isLoggedIn) {
    req.flash("error", "please login first");
    res.redirect("/login");
  }
  next();
};

module.exports = isLoggedIn;
