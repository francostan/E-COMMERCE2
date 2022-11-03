const express = require("express");
const ShoppingCart = require("../models/ShoppingCart");
const Products = require("../models/Products");

const router = express.Router();
const {
  getAll,
  getById,
  deleteById,
  addProducts,
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

router.put("/:id", (req, res, next) => {
  console.log(
    "end point del put, solo hay que ver que es lo que quiero modificar en este path"
  );
});

router.post("/test", (req, res, next) => {
  const { lastname, email, name } = req.body;

  ShoppingCart.findOrCreate({
    where: {
      id: req.params.id,
    },
  }).then(() => {});
});

// api/products/:id
router.delete("/:id", deleteById);

module.exports = router;
