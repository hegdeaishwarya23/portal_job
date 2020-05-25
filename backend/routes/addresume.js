const express = require("express");

const {
    getAddresume,
    getCompany,
    createAddresume,
    updateCompany,
    deleteCompany,
    getMeResume,
    getCompaniesInRadius,
    resumePhotoUpload
} = require("../controllers/addresume");

const Addresume = require("../models/Addresume");

// Include other resource routers
const jobRouter = require("./jobs");
// const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect } = require("../middleware/auth");

// Re-route into other resource routers
router.use("/:CompanyId/jobs", jobRouter);
// router.use("/:bootcampId/reviews", reviewRouter);

// router.route("/radius/:zipcode/:distance").get(getCompaniesInRadius);

// router
//     .route("/:id/photo")
//     .put(protect,companyPhotoUpload);

router
    .route("/")
    .get(advancedResults(Addresume, { path: "category" }), getAddresume)
    .post(protect, createAddresume);

// router
//     .route("/me")
//     .get(getMe)
//     .put(protect,updateCompany)
//     .delete(protect,  deleteCompany);

router.route("/me").get(protect, getMeResume);

router.route("/photo").post(protect, resumePhotoUpload);

module.exports = router;
