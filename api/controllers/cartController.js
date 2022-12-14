const { Products, Cart } = require("../models/index");
const validateCookie = require("../middlewares/auth");

const getUserCart = async (req, res, next) => {
  const actualUser = validateCookie(req, res);

  //Si no esta logueado no puede traer el carrito del usuario

  if (!actualUser.id) {
    return next();
  }
  try {
    const userCart = await Cart.findAll({
      where: {
        userId: actualUser.id,
      },
      include: [Products],
    });

    res.send(userCart).status(200);
  } catch (err) {
    res.send([]).status(404);
    console.error("Problem with cart", err);
  }
};

const addIntoCart = async (req, res, next) => {
  const { productId, stock, userId } = req.body;

  const product = await Products.findOne({ where: { id: productId } });

  //Tengo que mandar si o si el stock que quiero updatear
  if (!stock) {
    console.error("Tiene que recibir stock desde el body");
    return res.sendStatus(400);
  }
  //Verifico si el producto no existe
  if (!product) {
    console.error("Product not found");
    return res.sendStatus(400);
  }
  //verifico si hay stock del producto
  if (!product.stock) {
    console.error("Product sin stock");
    return res.sendStatus(400);
  }

  if (stock > product.stock) {
    console.error("No se puede comprar mas de lo que hay en stock");
    return res.sendStatus(400);
  }

  //Checkeo si el producto ya esta en el carrito
  const existCart = await Cart.findOne({
    where: {
      productId,
      userId,
    },
  });

  //Si el producto ya estaba en el carrito al stock, salvo que no tenga mas stock
  if (existCart) {
    for (let i = 0; i < stock; i++) {
      await existCart.increment("stock");
      await product.decrement("stock");
    }

    return res.send(existCart).status(201);
  }

  const cart = await Cart.create({
    productId,
    userId,
  });

  for (let i = 0; i < stock; i++) {
    await cart.increment("stock");
    await product.decrement("stock");
  }
  res.send(cart).status(201);
};

const emptyCart = async (req, res, next) => {
  const actualUser = validateCookie(req, res);

  //Si no esta logueado no puede traer el carrito del usuario

  if (!actualUser.id) {
    return next();
  }
  try {
    await Cart.destroy({ where: { userId: actualUser.id } });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};

const decreaseCart = async (req, res, next) => {
  const { userId, productId } = req.body;

  const product = await Products.findOne({ where: { id: productId } });

  //Si el producto no existe
  if (!product) {
    console.error("Product not found");
    return res.sendStatus(400);
  }

  const existCart = await Cart.findOne({
    where: {
      productId,
      userId,
    },
  });

  await existCart.decrement("stock");
  await product.increment("stock");

  if (!existCart.stock) {
    existCart.destroy();
    return res.send([]).status(201);
  }

  res.send(existCart).status(201);
};

const removeItem = async (req, res, next) => {
  const { userId, productId } = req.body;

  const product = await Products.findOne({ where: { id: productId } });

  //Si el producto no existe
  if (!product) {
    console.error("Product not found");
    return res.sendStatus(400);
  }

  const existCart = await Cart.findOne({
    where: {
      productId,
      userId,
    },
  });
  existCart.destroy();
  return res.send([]).status(201);
};

module.exports = {
  getUserCart,
  addIntoCart,
  emptyCart,
  decreaseCart,
  removeItem,
};
