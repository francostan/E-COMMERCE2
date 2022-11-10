const express = require("express");
const router = express.Router();

const { getByMarca, getByPrecio } = require("../controllers/categoryController");

router.get("/bodega/:marca", getByMarca);

router.get("/precio/:precio", getByPrecio);

module.exports = router;