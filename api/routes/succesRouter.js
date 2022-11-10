const express = require("express");

const router = express.Router();
const { sendMail } = require("../config/emailer");

router.get("/", (req, res, next) => {
  sendMail();
  res.send("Pago exitoso");
});

module.exports = router;
