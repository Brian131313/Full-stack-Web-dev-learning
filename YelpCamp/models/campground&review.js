const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// here defined CampgroundSchema
const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

// here defined reviewSchema
const reviewSchema = new Schema({
  body: String,
  rating: Number,
});

const Review = mongoose.model("Review", reviewSchema);
const Campground = mongoose.model("Campground", CampgroundSchema);

module.exports = {
  Review: Review,
  Campground: Campground,
};
