const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo db connected");
  } catch (error) {
    console.log(`Error in Connecting DB:${error}`);
    process.exit(1);
  }
};
module.exports = connectDB;
