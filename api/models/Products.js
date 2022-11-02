const S = require("sequelize");
const db = require("../config/db");

class Products extends S.Model {}

Products.init(
  {
    marca: {
      type: S.STRING,
      allowNull: false,
    },
    descripcion: {
      type: S.STRING,
      allowNull: false,
    },
    bodega: {
      type: S.STRING,
      allowNull: false,
    },
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    tipo: {
      type: S.STRING,
      allowNull: false,
    },
    precio: {
      type: S.INTEGER,
      allowNull: false,
    },
    valoracion: {
      type: S.INTEGER,
      allowNull: true,
    },
    stock: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Products;