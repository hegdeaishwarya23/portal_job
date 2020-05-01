const express = require("express");
const {
  getJobs,
  getJob,
  addJob,
  updateJob,
  deleteJob
} = require("../controllers/jobs");

const Job = require("../models/Job");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Job,{
      path: "company",
      select: "name description"
    }),
    getJobs
  )
  .post(protect, authorize("employer", "admin"), addJob);

router
  .route("/:id")
  .get(getJob)
  .put(protect, authorize("employer", "admin"), updateJob)
  .delete(protect, authorize("employer", "admin"), deleteJob);

module.exports = router;
