const router = require("express").Router();
const rc = require("../controllers/resultController");

router.post("/submit", rc.submitResult);
router.get("/", rc.getAllResults);
router.post("/block/prizes", rc.assignBlockPrizes);
router.post("/district/prizes", rc.assignDistrictPrizes);

module.exports = router;
