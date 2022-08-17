const { request } = require("express");
const Campground = require("../models/campground");

function home(req, res) {
  res.render("home");
}

async function getAllCampgrounds(req, res) {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/all", { campgrounds });
}

function getNewCampground(req, res) {
  res.render("campgrounds/new");
}

async function allNewCampground(req, res) {
  const newCampground = new Campground(req.body.campground);
  await newCampground.save();
  res.redirect(`/campgrounds/${newCampground._id}`);
}

async function showOneCampground(req, res) {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show-one", { campground });
}

async function editCampground(req, res) {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/edit", { campground });
}
async function updateCampground(req, res) {
  const { id } = req.params;
  const updateCampground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/campgrounds/${updateCampground._id}`);
}
async function deleteCampground(req, res) {
  const { id } = req.params;
  const deleteCampground = await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
}

module.exports = {
  home: home,
  getAllCampgrounds: getAllCampgrounds,
  getNewCampground: getNewCampground,
  allNewCampground: allNewCampground,
  showOneCampground: showOneCampground,
  editCampground: editCampground,
  updateCampground: updateCampground,
  deleteCampground: deleteCampground,
};
