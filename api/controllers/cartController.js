const { Products, Cart } = require("../models/index");

const getAllCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({
      where: {
        id,
      },
    });
    const cartProducts = await cart.getProducts();
    res.send(cartProducts).status(200);
  } catch (err) {
    console.log("error en el proceso", err);
    next(err);
  }
};

const addIntoCart = async (req, res, next) => {
  const { user, producto } = req.body;

  try {
    const cart = await Cart.findOne({
      where: {
        id: user.id,
      },
    });

    const product = await Products.findOne({
      where: {
        id: producto.id,
      },
    });

    await cart.addProduct(product);

    const cartProducts = await cart.getProducts();

    res.send(cartProducts).status(200);
  } catch (err) {
    console.log("error", err);
    next(err);
  }
};

const emptyCart = async (req, res, next) => {
  const { id } = req.params;

  try {
    const cart = await Cart.findOne({
      where: {
        id,
      },
    });

    let cartProducts = await cart.getProducts();
    await cart.removeProducts(cartProducts);
    cartProducts = await cart.getProducts();

    res.send(cartProducts).status(204);
  } catch (err) {
    console.log("error", err);
    next(err);
  }
};

module.exports = { getAllCart, addIntoCart, emptyCart };
