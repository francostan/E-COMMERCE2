const S = require("sequelize");
const db = require("../config/db");

class Favoritos extends S.Model {
  hasFav(userId, productId) {
    console.log(this);
    this.userId && this.productId ? true : false;
  }

  static tieneFavoritos(userId, productId) {
    return Favoritos.findOne({ where: { userId, productId } });
  }
}

Favoritos.init({}, { sequelize: db, modelName: "favoritos" });

module.exports = Favoritos;
