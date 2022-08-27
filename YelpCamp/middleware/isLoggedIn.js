const isLoggedIn = (req, res, next) => {
  const isLoggedIn = req.isAuthenticated();
  if (!isLoggedIn) {
    req.flash("error", "please login first");
    res.redirect("/login");
  }
};

module.exports = isLoggedIn;
