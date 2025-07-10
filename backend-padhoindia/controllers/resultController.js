const Result = require("../models/Result");
const Exam = require("../models/Exam");

// Create or update result for a candidate
exports.submitResult = async (req, res) => {
  try {
    const { candidateId, level, score } = req.body;

    if (!candidateId || !level || score == null) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const result = await Result.findOneAndUpdate(
      { candidate: candidateId, level },
      { score, evaluatedAt: new Date() },
      { new: true, upsert: true }
    );

    res.status(200).json({ success: true, message: "Result submitted", result });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to submit result", error });
  }
};

// Get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find().populate("candidate").sort({ evaluatedAt: -1 });
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving results", error });
  }
};

// Assign Block Level Prizes
exports.assignBlockPrizes = async (req, res) => {
  try {
    const results = await Result.find({ level: "block" }).sort({ score: -1 });

    for (let i = 0; i < Math.min(results.length, 92); i++) {
      results[i].rank = i + 1;

      if (i === 0) results[i].prize = "₹1 Lakh";
      else if (i <= 10) results[i].prize = "₹25,000";
      else results[i].prize = "₹10,000";

      await results[i].save();
    }

    res.json({ success: true, message: "Block prizes assigned." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Assign District Prizes
exports.assignDistrictPrizes = async (req, res) => {
  try {
    const top23 = await Result.find({ level: "district" }).sort({ score: -1 }).limit(23);

    for (let i = 0; i < top23.length; i++) {
      top23[i].rank = i + 1;

      if (i === 0)
        top23[i].prize = "₹10L + 3BHK + Hyundai Exter + 50g Gold";
      else if (i === 1)
        top23[i].prize = "₹7L + 2BHK + Bike + 10g Gold";
      else if (i === 2)
        top23[i].prize = "₹5L + KTM Bike";
      else
        top23[i].prize = "Honour Listing";

      await top23[i].save();
    }

    res.json({ success: true, message: "District prizes assigned." });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
