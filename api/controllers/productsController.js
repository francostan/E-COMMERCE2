const { Products } = require("../models/index");
const { User } = require("../models/index");
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
  Products.findAll({
    where: {
      FavId: req.params.id,
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
  const { name, email, marca, descripcion,bodega, nombre, tipo, precio, valoracion, stock, images} = req.body;
  User.findOrCreate({
    where: { name:name, email:email },
  }).then((user) => {
    const user1 = user[0];
    Products.create({
      marca: marca,
      descripcion: descripcion,
      bodega: bodega,
      nombre: nombre,
      tipo: tipo,
      precio: precio,
      valoracion: valoracion,
      stock: stock,
      images: images,
    })
    .then((producto) => {
      producto.setFav(user1);
      res.status(201).send(producto)})
    .catch((err) => console.log("error", err));
  });
  
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

module.exports = { getAll, getById, deleteById, addProducts };
