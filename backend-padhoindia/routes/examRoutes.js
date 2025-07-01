const express = require("express");
const router = express.Router();
const examController = require("../controllers/examController");

router.post("/", examController.registerExam);
router.get("/", examController.getAllRegistrations);

router.post("/verify", examController.verifyExamApplication);  // <-- move here, before routes with :id

router.put("/:id", examController.updateRegistration);
router.delete("/:id", examController.deleteRegistration);
router.get("/:id", examController.getRegistrationById);

module.exports = router;
