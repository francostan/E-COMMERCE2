const S = require("sequelize");
const db = require("../config/db");

class Cart extends S.Model {}
Cart.init(
  {
    stock: {
      type: S.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize: db, modelName: "carts" }
);
module.exports = Cart;
