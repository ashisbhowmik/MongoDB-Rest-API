const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLen: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "mail id already exists"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },

  phone: {
    type: Number,
    minLen: 10,
  },
  address: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
