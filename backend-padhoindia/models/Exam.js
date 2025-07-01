const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const educationSchema = new mongoose.Schema({
  qualification: { type: String, required: true },
  boardOrUniversity: { type: String, required: true },
  yearOfPassing: { type: String, required: true },
  percentageOrCGPA: { type: String, required: true },
});

const examSchema = new mongoose.Schema({
  applicationNumber: {
    type: String,
    default: () => "APP-" + uuidv4().slice(0, 8).toUpperCase(),
    unique: true,
  },
  candidateName: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  category: { type: String, enum: ["General", "OBC", "SC", "ST", "Other"], required: true },
  mobileNumber: { type: String, required: true, unique: true },
  emailId: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  pincode: { type: String },
  photo: { type: String },
  signature: { type: String },
  educationDetails: [educationSchema],
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Exam", examSchema);
