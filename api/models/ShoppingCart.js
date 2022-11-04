const S = require("sequelize");
const db = require("../config/db");

class ShoppingCart extends S.Model {}
ShoppingCart.init(
  {
    cantidad: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "shoppingCart" }
);
module.exports = ShoppingCart;
