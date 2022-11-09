const S = require("sequelize");
const db = require("../config/db");

class Favoritos extends S.Model {}

Favoritos.init({}, { sequelize: db, modelName: "favoritos" });

module.exports = Favoritos;
