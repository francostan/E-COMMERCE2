const express = require("express");

const router = express.Router();
const {
  getAll,
  getById,
  deleteById,
  addProducts,
  addAll,
  modifyProduct,
} = require("../controllers/productsController");

// find all api/products
//Ya testeado
router.get("/", getAll);

// api/products/:id
//testeado
router.get("/:id", getById);

// api/products/add
//Ya testeado
router.post("/add", addProducts);

///api/products/addAll
router.post("/addAll", addAll);

router.put("/productmod", modifyProduct);

// api/products/:id
router.delete("/:id", deleteById);

module.exports = router;
