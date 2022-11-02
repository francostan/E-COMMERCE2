const Products = require("../models/Products");
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

//Post
const addProducts = (req, res, next) => {
  Products.findOrCreate({
    where: req.body,
  })
    .then(([user, created]) => {
      res.send(user).status(201);
    })
    .catch(next);
};

const deleteById = (req, res, next) => {
  const { id } = req.params;
  Products.destroy({
    where: { id: id },
  })
    .then(() => res.statusCode(202))
    .catch((err) => {
      return console.log("error", err);
    });
};

module.exports = { getAll, getById, deleteById, addProducts };