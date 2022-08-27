const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local");
const flash = require("connect-flash");

const User = require("./models/user");
const sessionConfig = require("./config/session");
const db = require("./models/database");
const authRoutes = require("./routes/auth-routes");
const campgroundsRoutes = require("./routes/campground-routes");
const reviewsRoutes = require("./routes/review-routes");
const { flash_middleware } = require("./middleware/flash&error-middleware");
const { error_handler } = require("./middleware/flash&error-middleware");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash_middleware);
// order is important!

app.use(authRoutes);
app.use(campgroundsRoutes);
app.use(reviewsRoutes);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use(error_handler);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Serving on port 3000");
  });
});
