const mongoose = require("mongoose");
const slugify = require("slugify");
// const geocoder = require("../utils/geocoder");

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    slug: String,
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },

    companyname: {
      type: String,
      required: [true, "Please add a company name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    tagline: {
      type: String,
      required: [true, "Please add a tagline"],
      maxlength: [50, "Taglines can not be more than 50 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [500, "Description can not be more than 500 characters"],
    },

    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Please use a valid URL with HTTP or HTTPS",
      ],
    },
    contactnumber: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"],
    },

    address: {
      type: String,
      required: [true, "Please add an address"],
    },

    photo: {
      type: String,
      required:[true,"Please add a photo"]
    },
    jobTitle: {
      type: String,
      trim: true,
      required: [true, "Please add a job title"],
    },
    jobLocation: {
      type: String,
      required: [true, "Please add a job location"],
    },
    subject: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
    jobtype: {
      type: String,
      required: [true, "Please enter the job type"],
    },
    jobdescription: {
      type: String,
      required: [true, "Please add a description"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create company slug from the name
CompanySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Cascade delete jobs when a company is deleted
CompanySchema.pre("remove", async function (next) {
  console.log(`Jobs being removed  ${this._id}`);
  await this.model("Job").deleteMany({ company: this._id });
  next();
});

// Reverse populate with virtuals
CompanySchema.virtual("jobs", {
  ref: "Job",
  localField: "_id",
  foreignField: "company",
  justOne: false,
});

module.exports = mongoose.model("Company", CompanySchema);
