const controllers = require("../controllers/controller");

const express = require("express");
const router = express.Router();

router.get("/", controllers.home);

router.get("/campgrounds", controllers.getAllCampgrounds);

router.get("/campgrounds/new", controllers.getNewCampground);
router.post("/campgrounds", controllers.allNewCampground);

router.get("/campgrounds/:id", controllers.showOneCampground);

router.get("/campgrounds/:id/edit", controllers.editCampground);
router.put("/campgrounds/:id/", controllers.updateCampground);
router.delete("/campgrounds/:id/", controllers.deleteCampground);

module.exports = router;
