const path = require("path");
//path package is built into Node.js already.

const express = require("express");
const app = express();
//here import express package and define it as app.
//so, it's pretty clear here, app equals express package.

const db = require("./data/database");
// here import database form other file with a path.
const authRoutes = require("./routes/auth-routes");
//here import authRoutes from other file with a path.

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// here set view engine and path.
// join is a method form path package.
// __dirname is global method.

app.use(express.static("public"));

app.use(authRoutes);
//'use' is a built-in method form express app object that allows us to add a middleware.

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
