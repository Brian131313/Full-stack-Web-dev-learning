const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

const { reviewSchema } = require("../schemas.js");
const { ExpressError } = require("../utils/ExpressError&catchAsync");
const { catchAsync } = require("../utils/ExpressError&catchAsync");

const reviewControllers = require("../controllers/review-controllers");

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

router.post(
  "/campgrounds/:id/reviews",
  isLoggedIn,
  validateReview,
  catchAsync(reviewControllers.create_review)
);

router.delete(
  "/campgrounds/:id/reviews/:reviewId",
  isLoggedIn,
  catchAsync(reviewControllers.delete_review)
);

module.exports = router;
