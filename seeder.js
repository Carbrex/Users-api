const connectDB = require("./db/connect");
const dotenv = require("dotenv");
dotenv.config();
const userData = require("./data/users-new.json");

const User = require("./models/User");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // delete all users
    await User.deleteMany();
    // add users from the json file
    for (const user of userData) {
      await User.create(user);
    }
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
