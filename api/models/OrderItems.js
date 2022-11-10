const S = require("sequelize");
const db = require("../config/db");

class OrderItems extends S.Model {}

OrderItems.init(
  {
    cantidad: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "order_items" }
);

module.exports = OrderItems;
