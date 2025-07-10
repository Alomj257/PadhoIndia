const Level = require("../models/Level");
const Result = require("../models/Result");
const Exam = require("../models/Exam");

// ✅ Create a new level (already present)
exports.createLevel = async (req, res) => {
  try {
    const level = await Level.create(req.body);
    res.status(201).json({ success: true, level });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ Get all levels with totalCandidates and winners populated
exports.getAllLevels = async (req, res) => {
  try {
    const levels = await Level.find()
      .populate("winners", "candidateName applicationNumber")
      .sort({ name: 1 });

    res.status(200).json({ success: true, data: levels });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Mark candidates qualified for next level (auto progression)
exports.promoteCandidates = async (req, res) => {
  try {
    const { fromLevel, toLevel, topN } = req.body;

    if (!fromLevel || !toLevel || !topN)
      return res.status(400).json({ success: false, message: "Missing fields" });

    // Get top N from current level
    const topResults = await Result.find({ level: fromLevel })
      .sort({ score: -1 })
      .limit(topN);

    const qualifiedIds = topResults.map(r => r.candidate);

    // Create new level entry or update
    const existing = await Level.findOne({ name: toLevel });
    if (existing) {
      existing.totalCandidates = (existing.totalCandidates || 0) + qualifiedIds.length;
      existing.winners.push(...qualifiedIds);
      await existing.save();
    } else {
      await Level.create({
        name: toLevel,
        totalCandidates: qualifiedIds.length,
        winners: qualifiedIds,
      });
    }

    res.status(200).json({
      success: true,
      message: `Top ${topN} candidates promoted from ${fromLevel} to ${toLevel}`,
      promoted: qualifiedIds.length,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
