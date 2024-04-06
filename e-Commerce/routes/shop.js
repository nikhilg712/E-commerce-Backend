const express = require("express");
const path = require("path");
const router = express.Router();
const productsController = require('../controller/products')
const adminRoute = require("./admin");

router.get("/", productsController.getProducts);

module.exports = router;
