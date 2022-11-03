const S = require("sequelize");
const db = require("../config/db");
const Products = require("./Products");

class ShoppingCart extends S.Model {}
Products.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "shoppingCart" }
);
module.exports = ShoppingCart;
