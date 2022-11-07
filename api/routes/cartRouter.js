const express = require("express");
const router = express.Router();

const {
  getAllCart,
  addIntoCart,
  emptyCart,
} = require("../controllers/cartController");

//api/carts/:id
//Trae el carrito del usuario pasado por id con sus productos, devuevle un array
router.get("/:id", getAllCart);

//Necesito recibir del front el producto previamente traido desde el axios y el usuario(redux)
//es decir desde axios post esta ruta necesita que envie un objeto { usuarioDesdeRedux, producto}
//retorna el carrito Actualizado

//api/carts/add
//testeado
//
router.post("/add", addIntoCart);

// api/carts/:id
//Vacia el carrito del id seleccionado
router.delete("/:id", emptyCart);

module.exports = router;
