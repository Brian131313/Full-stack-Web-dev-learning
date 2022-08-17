const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
const app = express();

const dbConnection = require("./data/database");
const router = require("./routes/route");
const Campground = require("./models/campground");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(router);

dbConnection.on("error", console.error.bind(console, "connection error"));
dbConnection.once("open", () => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("listening on port 3000,GREAT");
  });
});
