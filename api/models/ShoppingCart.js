const S = require("sequelize");
const db = require("../config/db");

class CarritoDeCompras extends S.Model {}
CarritoDeCompras.init(
  {
    cantidad: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "carritoDeCompras" }
);
module.exports = CarritoDeCompras;
