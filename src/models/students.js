const mongoose = require("mongoose");
const validator = require("validator");

const studentinfoSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "This email already exist"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid. Please enter a valid email");
      }
    },
  },
  phone: {
    type: Number,
    minlength: 11,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    minlength: 3,
  },
});

// collection making using model
const StudentInfo = new mongoose.model("StudentInfo", studentinfoSchema);

module.exports = StudentInfo;
