const express = require("express");

const {
    getCompanies,
    getCompany,
    createCompany,
    updateCompany,
    deleteCompany,
    getMe,
    getCompaniesInRadius,
    companyPhotoUpload
} = require("../controllers/companies");

const Company = require("../models/Company");

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
    .get(advancedResults(Company,{path:"category"}), getCompanies)
    .post(protect, createCompany);

// router
//     .route("/me")
//     .get(getMe)
//     .put(protect,updateCompany)
//     .delete(protect,  deleteCompany);

router
    .route("/:companyId")
    .get(getCompany)
    .put(protect, updateCompany)
    .delete(protect, deleteCompany);


router.route("/me").get(protect, getMe);

router.route("/photo").post(protect, companyPhotoUpload);

module.exports = router;
