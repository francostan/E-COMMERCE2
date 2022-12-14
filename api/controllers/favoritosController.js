const { User, Favoritos, Products } = require("../models/index");

const getFavs = (req, res) => {
  Favoritos.findAll({ where: { userId: req.params.id }, include: Products })
    .then((userFavs) => {
      res.status(200).send(userFavs);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const verify = async (req, res) => {
  const { userId, productId } = req.body;
  const favSearch = await Favoritos.findOne({ where: { userId, productId } });
  if (!favSearch) return res.status(202).send(false);
  res.status(200).send(true);
};

const add = async (req, res) => {
  const { userId, productId } = req.body;
  const product = await Products.findOne({ where: { id: productId } });
  const user = await User.findOne({ where: { id: userId } });

  if (!product) return res.sendStatus(400);
  if (!user) return res.sendStatus(400);
  const verifyFav = await Favoritos.tieneFavoritos(userId, productId);

  if (verifyFav) return res.sendStatus(400);
  Favoritos.create({
    userId,
    productId,
  })
    .then((favorito) => {
      res.status(201).send(favorito);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

const borrar = async (req, res) => {
  const { userId, productId } = req.body;

  const borrar = await Favoritos.destroy({ where: { userId, productId } });

  if (!borrar) return res.status(202).send(false);

  res.status(202).send(true);
};

module.exports = { getFavs, verify, borrar, add };
