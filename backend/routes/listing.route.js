const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

router.get("/listing", async (req, res) => {
  try {
    let listingData = await Listing.find();
    res.render("show.ejs", {listingData})
    console.log(listingData);
  } catch (error) {
    console.log("Issue inside /listing route inside listing.route.js");
    console.error("Error: ", error);
  }
});

module.exports = router