const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



const app = express();
app.use(cors());
app.use(express.json());




mongoose
  .connect("mongodb://127.0.0.1:27017/Ecome")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started on: http://localhost:3000/");
    });
  })
  .catch(() => {
    console.log("Could not connect to database.");
  });