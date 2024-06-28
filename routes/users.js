const express = require("express");
const paginateMiddleware = require("../middleware/paginate");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.route("/").get(paginateMiddleware, getAllUsers).post(createUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
