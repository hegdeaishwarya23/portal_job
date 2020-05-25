const mongoose = require("mongoose");
const slugify = require("slugify");
// const geocoder = require("../utils/geocoder");

const AddresumeSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: [true, "Please add a First name"],
            unique: true,
            trim: true,
            maxlength: [50, "Name can not be more than 50 characters"],
        },
        lname: {
            type: String,
            required: [true, "Please add a last name"],
            unique: true,
            trim: true,
            maxlength: [50, "Name can not be more than 50 characters"],
        },
       
        email: {
            type: String,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please add a valid email",
            ],
        },
        address: {
            type: String,
            required: [true, "Please add an address"],
        },
        contactnumber: {
            type: String,
            maxlength: [20, "Phone number can not be longer than 20 characters"],
        },

        skills: {
            type: String,
            required: [true, "Please add a skills"],
            maxlength: [500, "skills can not be more than 500 characters"],
        },
        collegename: {
            type: String,
            required: [true, "Please add a college name"],
            trim: true,
            maxlength: [50, "Name can not be more than 50 characters"],
        },
        qualification: {
            type: String,
            required: [true, "Please add a qualification"],
            maxlength: [50, "qualification can not be more than 50 characters"],
        },
        percentage: {
            type: String,
            required: [true, "Please add a percentage"],
            maxlength: [500, "percentage can not be more than 500 characters"],
        },

    
       
      

       
        cname: {
            type: String,
            required: [true, "Please add a company name"],
            unique: true,
            trim: true,
            maxlength: [50, "Name can not be more than 50 characters"],
        },
        jobtitle: {
            type: String,
            required: [true, "Please add a job title"],
        },
        
        experience: {
            type: String,
            required: [true, "Please enter the experience"],
        },
        
        photo: {
            type: String,
            required: [true, "Please add a photo"]
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
// AddresumeSchema.pre("save", function (next) {
//     this.slug = slugify(this.name, { lower: true });
//     next();
// });

// Cascade delete jobs when a company is deleted
AddresumeSchema.pre("remove", async function (next) {
    console.log(`Jobs being removed  ${this._id}`);
    await this.model("Job").deleteMany({ addresume: this._id });
    next();
});

// Reverse populate with virtuals
AddresumeSchema.virtual("jobs", {
    ref: "Job",
    localField: "_id",
    foreignField: "addresume",
    justOne: false,
});

module.exports = mongoose.model("Addresume", AddresumeSchema);
