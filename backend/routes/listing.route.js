const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

// index route
router.get("/listing", async (req, res) => {
  try {
    let listingData = await Listing.find();
    res.render("listings/index.ejs", {listingData})
    console.log(listingData);
  } catch (error) {
    console.log("Issue inside /listing route inside listing.route.js");
    console.error("Error: ", error);
  }
});

module.exports = router