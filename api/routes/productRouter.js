const express = require("express");
const Products = require("../models/Products");
const router = express.Router();
const {
  getAll,
  getById,
  deleteById,
  addProducts,
} = require("../controllers/productsController");

// find all /products
//Ya testeado
router.get("/", getAll);

// /products/:id
//testeado
router.get("/:id", getById);

// /products/add
//Ya testeado
router.post("/add", addProducts);

router.put("/:id", (req, res, next) => {});

router.delete("/:id", deleteById);

module.exports = router;