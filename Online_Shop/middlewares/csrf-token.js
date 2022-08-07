//middleware is just a function in the end.
function addCsrfToken(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  //csrfToken() method is available thanks to the CSRF middleware package in app.js file.
  next();
  //once this addCsrfToken middleware is executed, then is able to reach the next middleware
  //or route handler in line, that can be achieved by calling next().
}

module.exports = addCsrfToken;
