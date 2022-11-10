const S = require("sequelize");
const db = require("../config/db");

class OrderDetails extends S.Model {}

OrderDetails.init(
  {
    total: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "order_details" }
);

module.exports = OrderDetails;
