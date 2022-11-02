const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRouter");

//centralizamos las rutas de pages y users
 router.use("/users", UserRouter);

module.exports = router;