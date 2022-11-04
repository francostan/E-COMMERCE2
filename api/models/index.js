const User = require("./User");
const Products = require("./Products");
const ShoppingCart = require("./ShoppingCart");

ShoppingCart.hasMany(Products, { as: "product" });
ShoppingCart.belongsTo(User, { as: "user" });

module.exports = { User, Products, ShoppingCart };
