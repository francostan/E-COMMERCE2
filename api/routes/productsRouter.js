const express = require("express");

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

router.put("/:id", (req, res, next) => {
  console.log(
    "end point del put, solo hay que ver que es lo que quiero modificar en este path"
  );
});

router.delete("/:id", deleteById);

module.exports = router;
