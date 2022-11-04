const express = require("express");
const CarritoDeCompras = require("../models/ShoppingCart");

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

// api/products/:id
router.delete("/:id", deleteById);

//Ruta para testear las relaciones de la db, de momento solo ignorar

router.post("/test", (req, res, next) => {
  const { lastname, email, name, id } = req.body;

  CarritoDeCompras.create({ cantidad: 10 })
    .then((carrito) => {
      console.log(carrito);
    })
    .catch((err) => console.log("entro al catch", err));
  res.sendStatus(201);
});

module.exports = router;
