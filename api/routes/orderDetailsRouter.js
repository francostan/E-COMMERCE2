const express = require("express");
const router = express.Router();
const { OrderDetails, User, Products, OrderItems } = require("../models/");
const {
  getAllOrdDetails,
  addCheckOut,
} = require("../controllers/orderDetailsController");
// EL CHECKOUT PARTE DESDE ACA, "orderDetails" SERÍA EL TICKET Y "orderItems" SERÍAN LOS PRODUCTOS/ITEMS QUE VAN DENTRO

// ESTA RUTA GET LO QUE HACE ES RECIBIR POR PARAMETRO EL ID DE NUESTRO USUARIO Y EN BASE A ESO BUSCAR TODOS LOS TICKETS
// DE ESE USUARIO INCLUYENDO LOS DATOS DEL USUARIO Y LOS ITEMS QUE ESTAN DENTRO DE ESE TICKET
router.get("/:id", getAllOrdDetails);

// ESTA RUTA POST LO QUE HACE ES RECIBIR DESDE EL FRONT EL ID DEL USUARIO Y EL TOTAL DE LA COMPRA, RECIBIENDO TODO ESO
// SE CREA EL TICKET, EN CASO DE QUE EL ID DEL USUARIO ESTE MAL, VA A DEVOLVER UN BAD REQUEST 400

router.post("/addCheckOut", addCheckOut);

// EL RESTO DEL CHECKOUT SIGUE EN EL ARCHIVO "orderItemsRouter.js"

module.exports = router;
