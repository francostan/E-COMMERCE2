const express = require("express");

const router = express.Router();
const {
  getAll,
  getById,
  deleteById,
  addProducts,
  addAll,
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

router.put("/:id", (req, res, next) => {
  console.log(
    "end point del put, solo hay que ver que es lo que quiero modificar en este path"
  );
});

// api/products/:id
router.delete("/:id", deleteById);

module.exports = router;
