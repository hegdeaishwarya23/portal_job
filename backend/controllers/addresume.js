const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// const geocoder = require("../utils/geocoder");
const Addresume = require("../models/Addresume");

// @desc      Get all companies
// @route     GET /api/v1/companies
// @access    Public
exports.getAddresume = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Get single Company
// @route     GET /api/v1/companies/:id
// @access    Public
// exports.getCompany = asyncHandler(async (req, res, next) => {
//     const company = await Company.findById(req.params.id);

//     if (!company) {
//     return next(
//         new ErrorResponse(`Company not found with id of ${req.params.id}`, 404)
//     );
//   }

//     res.status(200).json({ success: true, data: company });
// });

// @desc      Create new Company
// @route     POST /api/v1/companies
// @access    Private
exports.createAddresume = asyncHandler(async (req, res, next) => {
    // Add user to req,body
    req.body.user = req.user.id;

    const publishedAddresume = await Addresume.findOne({ user: req.user.id });

    // If the user is not an admin, they can only add one company
    // if (publishedCompany && req.user.role !== "admin") {
    //   return next(
    //     new ErrorResponse(
    //       `The user with ID ${req.user.id} has already created a company`,
    //       400
    //     )
    //   );
    // }

    const addresume = await Addresume.create(req.body);

    res.status(201).json({
        success: true,
        data: addresume,
    });
});

// @desc      Update company
// @route     PUT /api/v1/companies/:id
// @access    Private
exports.updateAddresume = asyncHandler(async (req, res, next) => {
    let addresume = await Addresume.findById(req.params.id);

    if (!addresume) {
        return next(
            new ErrorResponse(`Company not found with id of ${req.params.id}`, 404)
        );
    }

    // Make sure user is employer
    if (addresume.user.toString() !== req.user.id && req.user.role !== "admin") {
        return next(
            new ErrorResponse(
                `User ${req.params.id} is not authorized to update this Company details`,
                401
            )
        );
    }

    addresume = await Addresume.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({ success: true, data: addresume });
});

// @desc      Delete Company
// @route     DELETE /api/v1/companies/:id
// @access    Private
exports.deleteAddresume = asyncHandler(async (req, res, next) => {
    const addresume = await Addresume.findById(req.params.id);

    if (!addresume) {
        return next(
            new ErrorResponse(`Company not found with id of ${req.params.id}`, 404)
        );
    }

    // Make sure user is bootcamp owner
    if (addresume.user.toString() !== req.user.id && req.user.role !== "admin") {
        return next(
            new ErrorResponse(
                `User ${req.params.id} is not authorized to delete this company details`,
                401
            )
        );
    }

    company.remove();

    res.status(200).json({ success: true, data: {} });
});

// // @desc      Get companiess within a radius
// // @route     GET /api/v1/companies/radius/:zipcode/:distance
// // @access    Private
// exports.getCompaniesInRadius = asyncHandler(async (req, res, next) => {
//   const { zipcode, distance } = req.params;

//   // Get lat/lng from geocoder
//   const loc = await geocoder.geocode(zipcode);
//   const lat = loc[0].latitude;
//   const lng = loc[0].longitude;

//   // Calc radius using radians
//   // Divide dist by radius of Earth
//   // Earth Radius = 3,963 mi / 6,378 km
//   const radius = distance / 3963;

//     const companies = await Company.find({
//     location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
//   });

//   res.status(200).json({
//     success: true,
//       count: companies.length,
//       data: companies
//   });
// });

// @desc      Upload photo of the company
// @route     PUT /api/v1/companies/:id/photo
// @access    Private
exports.resumePhotoUpload = asyncHandler(async (req, res, next) => {
    const addresume = await Addresume.findById(req.params.id);

    if (!addresume) {
        return next(
            new ErrorResponse(`Company not found with id of ${req.params.id}`, 404)
        );
    }

    // Make sure user is employer
    if (company.user.toString() !== req.user.id && req.user.role !== "admin") {
        return next(
            new ErrorResponse(
                `User ${req.params.id} is not authorized to update this Company details`,
                401
            )
        );
    }

    if (!req.files) {
        return next(new ErrorResponse(`Please upload a file`, 400));
    }

    const file = req.files.file;

    // Make sure the image is a photo
    if (!file.mimetype.startsWith("image")) {
        return next(new ErrorResponse(`Please upload an image file`, 400));
    }

    // Check filesize
    if (file.size > process.env.MAX_FILE_UPLOAD) {
        return next(
            new ErrorResponse(
                `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
                400
            )
        );
    }

    // Create custom filename
    file.name = `photo_${addresume._id}${path.parse(file.name).ext}`;

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
        if (err) {
            console.error(err);
            return next(new ErrorResponse(`Problem with file upload`, 500));
        }

        await Addresume.findByIdAndUpdate(req.params.id, { photo: file.name });

        res.status(200).json({
            success: true,
            data: file.name,
        });
    });
});

// @desc      Get current logged in user
// @route     POST /api/v1/auth/me
// @access    Private
exports.getMeResume = asyncHandler(async (req, res, next) => {
    const addresume = await Addresume.findOne({ user: req.user.id }).populate({
        path: "subject",
        select: "catname",
    });

    res.status(200).json({
        success: true,
        data: addresume,
    });
});



// @desc      Upload photo for mentor
// @route     Post /api/v1/tutor/photo
// @access    Private
exports.resumePhotoUpload = asyncHandler(async (req, res, next) => {
    if (!req.files) {
        return next(new ErrorResponse(`Please upload a file`, 400));
    }

    const file = req.files.file;
    console.log(file);

    // Make sure the image is a photo
    if (!file.mimetype.startsWith("image")) {
        return next(new ErrorResponse(`Please upload an image file`, 400));
    }

    // Check filesize
    if (file.size > process.env.MAX_FILE_UPLOAD) {
        return next(
            new ErrorResponse(
                `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
                400
            )
        );
    }

    file.mv(`${__dirname}/../../frontend/public/uploads/resume${file.name}`, async (err) => {
        if (err) {
            console.error(err);
            return next(new ErrorResponse(`Problem with file upload`, 500));
        }

        const files = `/uploads/resume${file.name}`;

        res.status(200).json({
            success: true,
            data: files,
        });
    });
});