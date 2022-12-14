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
      type: S.STRING(1000),
      allowNull: false,
    },
    variedad: {
      type: S.STRING,
      allowNull: true,
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
      allowNull: true,
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
      defaultValue: 1,
    },
    images: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "products" }
);
//Coment Agregado
module.exports = Products;
