const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const productsRouter = require("./productsRouter");

//centralizamos las rutas de products y users
router.use("/users", userRouter);
router.use("/products", productsRouter);
module.exports = router;
