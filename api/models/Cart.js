const S = require("sequelize");
const db = require("../config/db");

class Cart extends S.Model {}
Cart.init({}, { sequelize: db, modelName: "carts" });
module.exports = Cart;
