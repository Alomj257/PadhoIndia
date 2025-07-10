const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["qualify", "school", "block", "district"],
    required: true,
  },
  roomNumber: Number,
  totalCandidates: Number,
  winners: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam" }],
  isOnline: Boolean,
});

module.exports = mongoose.model("Level", levelSchema);
