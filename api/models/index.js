const User = require("./User");
const Products = require("./Products");
const Cart = require("./Cart");
const Favoritos = require("./Favoritos");
//One-To-One Cart-User//

User.hasOne(Cart);

User.hasOne(Favoritos);

//one to many //

Cart.belongsTo(Products);
Cart.belongsTo(User);

Favoritos.belongsTo(User);
Favoritos.belongsTo(Products);

module.exports = { User, Products, Cart, Favoritos };
