const User = require("./User");
const Products = require("./Products");
const Cart = require("./Cart");
const Favoritos = require("./Favoritos");
const OrderDetails = require("./OrderDetails");
const OrderItems = require("./OrderItems");

//One-To-One Cart-User//

User.hasOne(Cart);

User.hasOne(Favoritos);

//one to many //

OrderDetails.belongsTo(User);
OrderDetails.hasMany(OrderItems);

OrderItems.belongsTo(OrderDetails);
OrderItems.belongsTo(Products);

Cart.belongsTo(Products);
Cart.belongsTo(User);

Favoritos.belongsTo(User);
Favoritos.belongsTo(Products);

module.exports = { User, Products, Cart, Favoritos, OrderDetails, OrderItems };
