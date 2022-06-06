const express = require('express');
const ctrlimp = require('../controller/controller')

const router = express.Router();

router.post("/shri",ctrlimp.addbook)































module.exports = router;
// adding this comment for no reason