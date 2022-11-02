const User = require("../models/User");
const decodeToken = require("../config/token");
const validateCookie = require("../middlewares/auth");

class userController {
  static createUser(req, res) {
    const { name, lastname, email, password } = req.body;

    User.create({ name, lastname, email, password }).then((user) =>
      res.status(201).json(user)
    );
  }

  static findUsers(req, res) {
    User.findAll().then((users) => res.send(users));
  }

  static loginUser(req, res) {
    const { email, password } = req.body;

    User.findOne({ where: { email } }).then((user) => {
      //si el usuario no existe retorna un error
      if (!user) return res.send(401);
      //sino valida la contraseña
      user
        .validatePassword(password) //encadenamos otro then
        .then((isValid) => {
          //validatePassword retorna un booleano
          //si es false retorna un error
          if (!isValid) return res.send(401);
          const payload = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
          };
          const token = decodeToken.generateToken(payload);
          //le pasamos a la cookie el token, con el metodo generateToken que sign el user, que persiste durante 2 horas
          res.cookie("token", token);
          //por ultimo enviamos el payload al servidor (info no sensible)
          res.send(payload);
        });
    });
  }

  static persistUser(req, res) {
    const user = validateCookie(req, res);
    res.send(user);
  }

  static logoutUser(req, res) {
    res.clearCookie("token");
    res.sendStatus(204);
  };

}

module.exports = userController;