const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
console.log("mongourl" + MONGO_URL);
mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
