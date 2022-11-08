const User = require("./User");
const Products = require("./Products");
const Cart = require("./Cart");

//One-To-One Cart-User//

User.hasOne(Cart);

//one to many //
Cart.belongsTo(Products);
Cart.belongsTo(User);

Products.belongsTo(User, { as: "fav" });

module.exports = { User, Products, Cart };
