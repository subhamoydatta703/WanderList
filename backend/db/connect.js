const mongoose = require("mongoose");
require("dotenv").config({path: "../.env"});
let connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB not connected");
    console.error(error);
  }
};

module.exports=connectDB;
