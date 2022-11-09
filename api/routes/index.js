const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const productsRouter = require("./productsRouter");
const cartRouter = require("./cartRouter");
const favoritosRouter = require("./favoritosRouter");
//centralizamos las rutas de products y users
router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/carts", cartRouter);
router.use("/favoritos", favoritosRouter);
module.exports = router;
