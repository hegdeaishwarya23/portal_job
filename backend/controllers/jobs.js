const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Job = require("../models/Job");
const Company = require("../models/Company");

// @desc      Get jobs
// @route     GET /api/v1/jobs
// @route     GET /api/v1/companies/:companyId/jobs
// @access    Public
exports.getJobs = asyncHandler(async (req, res, next) => {
  if (req.params.companyId) {
    const jobs = await Job.find({ company: req.params.companyId });

    return res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single job
// @route     GET /api/v1/jobs/:id
// @access    Public
exports.getJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.params.id).populate({
    path: "company",
    select: "name description"
  });

  if (!job) {
    return next(
      new ErrorResponse(`No job with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: job
  });
});

// @desc      Add job
// @route     POST /api/v1/companies/:companyId/jobs
// @access    Private
exports.addJob = asyncHandler(async (req, res, next) => {
  req.body.company = req.params.companyId;
  req.body.user = req.user.id;

  const company = await Company.findById(req.params.companyId);

  if (!company) {
    return next(
      new ErrorResponse(`No company with the id of ${req.params.companyId}`),
      404
    );
  }

  // Make sure user is company owner
  if (company.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add a job to the company ${company._id}`,
        401
      )
    );
  }

  const job = await Job.create(req.body);

  res.status(200).json({
    success: true,
    data: job
  });
});

// @desc      Update job
// @route     PUT /api/v1/jobs/:id
// @access    Private
exports.updateJob = asyncHandler(async (req, res, next) => {
  let job = await Job.findById(req.params.id);

  if (!job) {
    return next(
      new ErrorResponse(`No job with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is employer
  if (job.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update job ${job._id}`,
        401
      )
    );
  }

  job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: job
  });
});

// @desc      Delete job
// @route     DELETE /api/v1/jobs/:id
// @access    Private
exports.deleteJob = asyncHandler(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(
      new ErrorResponse(`No jobs with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is employer
  if (job.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete the job ${job._id}`,
        401
      )
    );
  }

  await job.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});
