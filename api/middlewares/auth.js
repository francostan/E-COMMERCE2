const decodeToken = require('../config/token');

function validateCookie(req, res) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { user } = decodeToken.verifyToken(token);
  if (!user) return res.sendStatus(401);
  //pasamos el payload al req para que lo pueda usar el siguiente middleware
  req.user = user;
  return req.user;
}

module.exports = validateCookie;