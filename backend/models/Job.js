const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    trim: true,
    required: [true, "Please add a job title"],
  },
  jobLocation: {
    type: String,
    required: [true, "Please add a job location"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  jobtype: {
    type: String,
    required: [true, "Please enter the job type"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

// Static method to get avg of course tuitions
// JobSchema.statics.getAverageCost = async function (bootcampId) {
//   const obj = await this.aggregate([
//     {
//       $match: { bootcamp: bootcampId },
//     },
//     {
//       $group: {
//         _id: "$bootcamp",
//         averageCost: { $avg: "$tuition" },
//       },
//     },
//   ]);

//   try {
//     await this.model("Bootcamp").findByIdAndUpdate(bootcampId, {
//       averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// Call getAverageCost after save
// CourseSchema.post("save", function () {
//   this.constructor.getAverageCost(this.bootcamp);
// });

// // Call getAverageCost before remove
// CourseSchema.pre("remove", function () {
//   this.constructor.getAverageCost(this.bootcamp);
// });

module.exports = mongoose.model("Job", JobSchema);
