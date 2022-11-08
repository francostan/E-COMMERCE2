const express = require("express");
const router = express.Router();

const {
  getUserCart,
  addIntoCart,
  emptyCart,
} = require("../controllers/cartController");

//api/carts/:id
//Trae el carrito del usuario pasado por id con sus productos, devuevle un array
router.get("/", getUserCart);

//api/carts/add
//testeado
//Necesito recibir del front el producto previamente traido desde el axios y el usuario(redux)
//es decir desde axios post esta ruta necesita que envie un objeto, opcionalmente le puedo agregar el stock { usuarioDesdeRedux, producto,stock}
//retorna el carrito Actualizado

router.post("/add", addIntoCart);

// api/carts/
//Vacia el TODO el carrito con el id del usuario logueado
router.delete("/", emptyCart);

module.exports = router;
