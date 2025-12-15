const connectDB = require("./connect");
const Listing = require("../models/listing");
const initData = require("./data");

require("dotenv").config({ path: "../.env" });

connectDB();
async function initDB() {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data is initialized");
    console.log(initData.data);
    
  } catch (error) {
    console.error("Error while initialize DB: ", error);
  }
}
initDB();
module.exports = initDB;
