const express = require("express");
const router = express.Router();

const {
  getFavs,
  add,
  borrar,
  verify,
} = require("../controllers/favoritosController");

router.get("/:id", getFavs);

router.post("/verify", verify);

router.post("/add", add);

router.delete("/delete", borrar);

module.exports = router;
