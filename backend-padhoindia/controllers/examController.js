const Exam = require("../models/Exam");

exports.registerExam = async (req, res) => {
  try {
    const { emailId, mobileNumber } = req.body;

    // Create a copy of req.body to modify before saving
    const examData = { ...req.body };

    // Format dateOfBirth to "yyyy-mm-dd" string if it exists
    if (examData.dateOfBirth) {
      const d = new Date(examData.dateOfBirth);
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      examData.dateOfBirth = `${yyyy}-${mm}-${dd}`;
    }

    // Check if email or mobile already exists
    const existingExam = await Exam.findOne({
      $or: [{ emailId }, { mobileNumber }],
    });

    if (existingExam) {
      return res.status(400).json({
        success: false,
        message: `An application already exists with this ${
          existingExam.emailId === emailId ? "email" : "mobile number"
        }.`,
      });
    }

    // Save new exam form with formatted examData
    const exam = new Exam(examData);
    await exam.save();

    res.status(201).json({
      success: true,
      message: "Exam registration successful",
      registrationSummary: {
        applicationNumber: exam.applicationNumber,
        candidateName: exam.candidateName,
        fatherName: exam.fatherName,
        motherName: exam.motherName,
        emailId: exam.emailId,
        mobileNumber: exam.mobileNumber,
        category: exam.category,
        dob: exam.dateOfBirth,
        gender: exam.gender,
        address: exam.address,
        city: exam.city,
        state: exam.state,
        pincode: exam.pincode,
        submittedOn: exam.createdAt,
        educationDetails: exam.educationDetails,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to register",
      error: error.message || error,
    });
  }
};


// Get all registrations
exports.getAllRegistrations = async (req, res) => {
  try {
    const data = await Exam.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, registrations: data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving registrations", error });
  }
};

// Get registration by ID
exports.getRegistrationById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ success: false, message: "Form not found" });

    res.status(200).json({ success: true, registration: exam });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching details", error });
  }
};

// Update registration (if allowed)
exports.updateRegistration = async (req, res) => {
  try {
    const updated = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, message: "Updated successfully", updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating registration", error });
  }
};

// Delete registration
exports.deleteRegistration = async (req, res) => {
  try {
    const deleted = await Exam.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting registration", error });
  }
};
exports.verifyExamApplication = async (req, res) => {
  try {
    const { applicationNumber, dob } = req.body;
    console.log(applicationNumber);
    console.log(dob);

    if (!applicationNumber || !dob) {
      return res.status(400).json({ success: false, message: "Application number and DOB are required." });
    }

    const exam = await Exam.findOne({ applicationNumber });

    if (!exam) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }

    // Compare DOB using UTC year, month, date to avoid timezone mismatch
    const dobFromDb = new Date(exam.dateOfBirth);
    const dobInput = new Date(dob);

    const isSameDate =
      dobFromDb.getUTCFullYear() === dobInput.getUTCFullYear() &&
      dobFromDb.getUTCMonth() === dobInput.getUTCMonth() &&
      dobFromDb.getUTCDate() === dobInput.getUTCDate();

    if (!isSameDate) {
      return res.status(400).json({ success: false, message: "DOB does not match" });
    }

    return res.status(200).json({ success: true, message: "Verified", registration: exam });
  } catch (error) {
    console.error("Error in verifyExamApplication:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};



