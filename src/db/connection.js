const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose
  .connect("mongodb://localhost:27017/student-info")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));