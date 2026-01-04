const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/lmsDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const CourseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  category: String,
  publishedYear: Number,
  availableSeats: Number
});

const Course = mongoose.model("Course", CourseSchema);

app.get("/", (req, res) => {
  res.send("LMS MongoDB Project");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
