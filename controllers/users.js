const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllUsers = async (req, res) => {
  const sortBy = req.query.sort ?? "firstName"; // sortOrder will be like +age or -age
  const search = req.query.search ?? "";
  const { skip, limit } = req.pagination; // pagination is added in the middleware

  const users = await User.find({
    $or: [
      { firstName: { $regex: search, $options: "i" } },
      { lastName: { $regex: search, $options: "i" } },
    ],
  })
    .sort(sortBy)
    .skip(skip)
    .limit(limit);

  res
    .status(StatusCodes.OK)
    .json({ users, nbHits: users.length, msg: "Users successfully fetched" });
};

// Get a user by id
const getUserById = async (req, res) => {
  const userId = req.params.id;

  const user = await User.findById(userId);

  if (!user) {
    throw new NotFoundError(`No user with id : ${userId}`);
  }

  res
    .status(StatusCodes.OK)
    .json({ user, msg: "User with given id fetched successfully" });
};

// Create a new user
const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    companyName,
    age,
    city,
    state,
    zip,
    email,
    web,
  } = req.body;// destructuring the request body
  if (
    !firstName ||
    !lastName ||
    !companyName ||
    !age ||
    !city ||
    !state ||
    !zip ||
    !email ||
    !web
  ) {
    throw new BadRequestError("Please provide all fields");
  }
  const user = await User.create({
    firstName,
    lastName,
    companyName,
    age,
    city,
    state,
    zip,
    email,
    web,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ user, msg: "User successfully created" });
};

// Update an existing user
const updateUser = async (req, res) => {
  const { id } = req.params;

  // only update the provided fields don't change the non provided ones
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  }); // new is to return the updated user and runValidators is to run the validators in the schema

  if (!user) {
    throw new NotFoundError(`No user with id : ${id}`);
  }

  res.status(StatusCodes.OK).json({ user, msg: "User successfully updated" });
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new NotFoundError(`No user with id : ${id}`);
  }

  res.status(StatusCodes.OK).json({ user, msg: "User successfully deleted" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
