const path = require("path");
//path package is built into Node.js already.

const express = require("express");
const csrf = require("csurf");
const expressSession = require("express-session");

const createSessionConfig = require("./config/session");
// const db = require("./data/database");
const authRoutes = require("./routes/auth-routes");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
//so, it's pretty clear here, app equals express package.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// here set view engine and path.
// join is a method form path package.
// __dirname is global method.

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// Returns middleware that only parses urlencoded bodies and only looks at requests
// where the Content-Type header matches the type option
// set extended to false to support a regular form submission.
const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());
app.use(addCsrfTokenMiddleware);
//csrf protection, all incoming requests(not get)now need to have a CSRF token attached.
//csrf middleware will check the CSRF token.
//any requests that don't have a CSRF token will be denied.
app.use(authRoutes);
//'use' is a built-in method form express app object that allows us to add a middleware.
app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  //add then to execute code if that promise is succeeded.
  //add catch if that promise is failed.
  .catch(function (error) {
    //anonymous function which gets that error object which is generated automatically
    //by the MongoDB package if establishing the connection failed.
    console.log("Failed to connect to database!");
    console.log(error);
  });
