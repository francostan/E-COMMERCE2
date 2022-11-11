const S = require("sequelize");
const db = require("../config/db");

const bcrypt = require("bcrypt");

class User extends S.Model {
  //validate: password
  validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }
  //hash password
  hashPassword(password, salt) {
    return bcrypt
      .hash(password, salt)
      .then((hash) => hash)
      .catch((err) => console.log(err));
  }
}
User.init(
  {
    name: { type: S.STRING, allowNull: false },
    lastname: { type: S.STRING, allowNull: false },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    birthDate: {
      type: S.DATE,
      allowNull: true,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);
User.addHook("beforeCreate", (user) => {
  user.salt = bcrypt.genSaltSync(8);
  return user
    .hashPassword(user.password, user.salt)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => console.log(err));
});
module.exports = User;
