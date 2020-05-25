const express = require("express");
const {
  getUsers,
  getUserss,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAllUser
} = require("../controllers/users");

const User = require("../models/User");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// router.use(protect);
// router.use(authorize("admin"));

// router.route("/").get(advancedResults(User), getUsers).post(createUser);

// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

// **************************

router.use(protect);
router.use(authorize("admin"));

router.route("/").get(advancedResults(User), getUsers).post(createUser);

router.route("/employer").get(advancedResults(User), getAllUser);

router.route("/user").get(advancedResults(User), getUserss);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);


module.exports = router;
