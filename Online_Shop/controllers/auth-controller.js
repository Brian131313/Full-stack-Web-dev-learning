function getSignup (req, res) {
    res.render('customer/auth/signup');
// render will render a template, parses it with ejs language, and replaces all the
// dynamic parts with text, and once the HTML code is finished, it will sent HTML to visitors.
}


function getLogin (req, res) {
    //...
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
};
//here exports multiple functions live in the auth-controller file.