const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const productsRouter = require("./productsRouter");
const cartRouter = require("./cartRouter");
const favoritosRouter = require("./favoritosRouter");
const payRouter = require("./payRouter");
const categoryRouter = require("./categoryRouter");
const orderDetailsRouter = require("./orderDetailsRouter");
const orderItemsRouter = require("./orderItemsRouter");
const succesRouter = require("./succesRouter");
//centralizamos las rutas de products y users
router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/carts", cartRouter);
router.use("/favoritos", favoritosRouter);
router.use("/pay", payRouter);
router.use("/category", categoryRouter);

router.use("/orderDetail", orderDetailsRouter);
router.use("/orderItems", orderItemsRouter);

router.use("/success", succesRouter);
module.exports = router;
