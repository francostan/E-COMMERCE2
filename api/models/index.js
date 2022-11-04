const User = require("./User");
const Products = require("./Products");
const ShoppingCart = require("./ShoppingCart");

// ShoppingCart.hasMany(Products, { as: "product_id" });
// ShoppingCart.belongsTo(User);
// User.belongsTo(ShoppingCart);

module.exports = { User, Products, ShoppingCart };
