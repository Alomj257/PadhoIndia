const router = require("express").Router();
const c = require("../controllers/levelController");

router.post("/", c.createLevel);
router.get("/", c.getAllLevels);
router.post("/promote", c.promoteCandidates);

module.exports = router;
