const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const productsRouter = require("./productsRouter");
const cartRouter = require("./cartRouter");
const favoritosRouter = require("./favoritosRouter");
const payRouter = require("./payRouter");
//centralizamos las rutas de products y users
router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/carts", cartRouter);
router.use("/favoritos", favoritosRouter);
router.use("/pay", payRouter);
module.exports = router;
