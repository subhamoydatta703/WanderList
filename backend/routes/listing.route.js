const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

// index route
router.get("/listings", async (req, res) => {
  try {
    let listingData = await Listing.find();
    res.render("listings/index.ejs", { listingData });
    // console.log(listingData);
  } catch (error) {
    console.log("Issue inside /listings route(index route)");
    console.error("Error: ", error);
  }
});

// form(get method) for adding new data
router.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// form(post) for adding new data
router.post("/listings", async (req, res) => {
  try {
    let newlisting = await new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
    console.log(newlisting);
  } catch (error) {
    console.log("Error in /listing route of post method");
    console.error(error);
  }
});

// read route(show single data)
router.get("/listings/:_id", async (req, res) => {
  try {
    let { _id } = req.params;
    let idData = await Listing.findById(_id);
    console.log("ID data: ", idData);
    res.render("listings/show.ejs", { idData });
  } catch (error) {
    console.log("Issue inside /listing/:_id route inside listing.route.js");
    console.error("Error: ", error);
  }
});

module.exports = router;
