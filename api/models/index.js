const User = require("./User");
const Products = require("./Products");
const Cart = require("./Cart");

//One-To-One Cart-User//
Cart.hasOne(User);
User.hasOne(Cart);

//one to many //
Cart.belongsToMany(Products, { through: "Cart_Productos" });

Products.belongsTo(User, { as: "fav" });

module.exports = { User, Products, Cart };
