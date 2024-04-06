const express = require("express");
const path = require("path");
const router = express.Router();
const errorController = require('../controller/error')

router.use(errorController.notFound404);

module.exports = router;
