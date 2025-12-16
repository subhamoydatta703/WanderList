const express = require("express");
const app = express();
const path= require("path")
const connectDB = require("./db/connect")
const listingRoute = require("./routes/listing.route");
require("dotenv").config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(listingRoute);


connectDB();
app.get("/",(req, res)=>{
    res.send("Main route...")
})

app.listen(8080, ()=>{
    console.log("Listening on 8080");
    
})