const { OrderDetails, OrderItems, Products } = require("../models");

const findAllItems = (req, res) => {
  const { id } = req.params;

  OrderItems.findAll({
    where: { orderDetailId: id },
    include: [Products, OrderDetails],
  })
    .then((orden) => {
      res.send(orden);
    })
    .catch((err) => {
      res.send(err);
    });
};

const addItem = async (req, res) => {
  const { productId, orderDetailId, cantidad } = req.body;
  try {
    const findOrder = await OrderDetails.findOne({
      where: { id: orderDetailId },
    });

    if (!findOrder) return res.send(400);

    const createOrdItem = await OrderItems.create({
      productId,
      orderDetailId,
      cantidad,
    });

    res.send(createOrdItem);
  } catch (err) {
    res.send(400);
  }
};

module.exports = { findAllItems, addItem };
