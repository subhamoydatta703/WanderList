const mongoose = require("mongoose");
const initDB = require("./seed")
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

initDB();

module.exports=connectDB;
