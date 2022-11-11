const { OrderDetails, User, OrderItems } = require("../models");

const getAllOrdDetails = (req, res) => {
  const { id } = req.params;
  OrderDetails.findAll({ where: { userId: id }, include: [User, OrderItems] })
    .then((orden) => {
      res.send(orden);
    })
    .catch((err) => {
      res.send(400);
      console.log(err);
    });
};

const addCheckOut = async (req, res) => {
  const { userId, total } = req.body;
  const findUser = await User.findOne({ userId });
  if (!findUser) return res.sendStatus(400);

  OrderDetails.create({
    userId,
    total,
  })
    .then((orden) => {
      res.send(orden);
    })
    .catch((err) => {
      res.send(400);
    });
};

module.exports = { getAllOrdDetails, addCheckOut };
