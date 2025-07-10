const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  level: {
    type: String,
    enum: ["qualify", "school", "block", "district"],
    required: true,
  },
  score: { type: Number, required: true },
  rank: Number,
  prize: String,
  evaluatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", resultSchema);
