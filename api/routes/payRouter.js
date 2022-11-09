const express = require("express");
const router = express.Router();
const { User, Products} = require("../models/index");
const payController = require("../controllers/payController");


// get payment
router.post("/payment", payController.createPayment);

module.exports = router;