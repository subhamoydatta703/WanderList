const connectDB = require("./connect");
const Listing = require("../models/listing");
const initData = require("./data");

async function initDB() {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data, { ordered: false });
    console.log("Data is initialized");
    
  } catch (error) {
    console.error("Error while initialize DB: ", error);
  }
}

module.exports = initDB