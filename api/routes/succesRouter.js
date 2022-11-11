const express = require("express");

const router = express.Router();
const { sendMail } = require("../config/emailer");

router.post("/", (req, res, next) => {
  console.log(req.body);
  sendMail(req.body.email);
  res.send("Pago exitoso");
});

module.exports = router;
