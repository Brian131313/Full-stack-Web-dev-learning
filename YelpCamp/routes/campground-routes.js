const express = require("express");
const router = express.Router();
const { campgroundSchema } = require("../schemas.js");
const { ExpressError } = require("../utils/ExpressError&catchAsync");
const { catchAsync } = require("../utils/ExpressError&catchAsync");
const campgroundControllers = require("../controllers/campground-controllers");
const isLoggedIn = require("../middleware/isLoggedIn");

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/campgrounds", catchAsync(campgroundControllers.getCampgrounds));

router.get(
  "/campgrounds/new",
  isLoggedIn,
  campgroundControllers.getNewCampground
);

router.post(
  "/campgrounds",
  isLoggedIn,
  validateCampground,
  catchAsync(campgroundControllers.createNewCampground)
);

router.get(
  "/campgrounds/:id",
  catchAsync(campgroundControllers.getOneCampground)
);

router.get(
  "/campgrounds/:id/edit",
  isLoggedIn,
  catchAsync(campgroundControllers.getOne_EditCampground)
);

router.put(
  "/campgrounds/:id",
  isLoggedIn,
  validateCampground,
  catchAsync(campgroundControllers.updateCampground)
);

router.delete(
  "/campgrounds/:id",
  isLoggedIn,
  catchAsync(campgroundControllers.deleteCampground)
);

module.exports = router;
