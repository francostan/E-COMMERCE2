const User = require("./User");
const Products = require("./Products");
const CarritoDeCompras = require("./ShoppingCart");

CarritoDeCompras.hasMany(Products, { as: "product" });
CarritoDeCompras.belongsTo(User, { as: "user" });
Products.belongsTo(User, { as: "fav" });

module.exports = { User, Products, CarritoDeCompras };
