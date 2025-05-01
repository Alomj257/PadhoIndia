const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    // Common Fields
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    dateOfBirth: {
        type: Date,
        required: function () {
          return this.userType === 'STUDENT';
        }
      },
    userType: {
      type: String,
      required: true,
      enum: ["STUDENT", "ADMIN"]
    },

    // Student Specific Fields
    whatsappNumber: { type: Number },
    address: { type: String },
    district: { type: String },
    state: { type: String },
    pin: { type: String },
    schoolName: { type: String },
    studentClass: { type: String},
    schoolAddress: { type: String },
    aadharCardNumber: { type: String },
    registrationNumber: { type: String, unique: true, sparse: true },

    // OTP Reset
    resetOtp: { type: String },
    otpExpiry: { type: Date }
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
