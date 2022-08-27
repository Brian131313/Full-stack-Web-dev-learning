const flash = require("connect-flash");
const flash_middleware = (req, res, next) => {
  res.locals.loggedIn_User = req.user;
  //here's an exception, just for convenience.
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
};

const error_handler = (err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";
  res.status(statusCode).render("error", { err });
};

module.exports = { flash_middleware, error_handler };
