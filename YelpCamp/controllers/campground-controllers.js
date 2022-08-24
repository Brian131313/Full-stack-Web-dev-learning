const { Campground } = require("../models/campground&review");

getCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

getNewCampground = (req, res) => {
  res.render("campgrounds/new");
};

createNewCampground = async (req, res, next) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  req.flash("success", "Successfully made a new campground!");
  res.redirect(`/campgrounds/${campground._id}`);
};

getOneCampground = async (req, res) => {
  const campground = await Campground.findById(req.params.id).populate(
    "reviews"
  );
  if (!campground) {
    req.flash("error", "No campground found!");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/show", { campground });
};

getOne_EditCampground = async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  if (!campground) {
    req.flash("error", "No campground found!");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/edit", { campground });
};

updateCampground = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  req.flash("success", "Successfully updated campground!");
  res.redirect(`/campgrounds/${campground._id}`);
};

deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
};

module.exports = {
  getCampgrounds,
  getNewCampground,
  createNewCampground,
  getOneCampground,
  getOne_EditCampground,
  updateCampground,
  deleteCampground,
};
