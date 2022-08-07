const User = require("../models/user-model");

function getSignup(req, res) {
  res.render("customer/auth/signup");
  // render will render a template, parses it with ejs language, and replaces all the
  // dynamic parts with text, and once the HTML code is finished, it will sent HTML to visitors.
}

async function signup(req, res) {
  //   do the validation

  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.phonenumber,
    req.body.address
  );

  await user.signup();

  res.redirect("/login");
}

function getLogin(req, res) {
  res.render("customer/auth/login");
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
};
//here exports multiple functions live in the auth-controller file.
