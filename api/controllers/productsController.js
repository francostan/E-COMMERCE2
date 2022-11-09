const { Products } = require("../models/index");
const { fakeData } = require("../../src/utils/fakeData");
// /
const getAll = (req, res, next) => {
  Products.findAll()
    .then((productos) => {
      res.send(productos).status(200);
    })
    .catch(next);
};

//:id
const getById = (req, res, next) => {
  Products.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((producto) => {
      if (!producto) return next("No se encontro el producto deseado");
      res.send(producto).status(200);
    })
    .catch(next);
};

//Addall products at once. Dev mode not for production

const addAll = async (req, res, next) => {
  await Products.sync({ force: true });
  await Products.bulkCreate(fakeData);
  res.sendStatus(200);
};

//Post
const addProducts = (req, res, next) => {
  Products.create(req.body)
    .then((producto) => res.status(201).send(producto))
    .catch((err) => console.log("error", err));
};

const deleteById = (req, res, next) => {
  Products.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      return console.log("error", err);
    });
};

module.exports = { getAll, getById, deleteById, addProducts, addAll };
