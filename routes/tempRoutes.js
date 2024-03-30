const express = require("express");
const router = express.Router();

const {signUp} = require("../controllers/signUp")

router.post("/signin", signUp);

module.exports = router;