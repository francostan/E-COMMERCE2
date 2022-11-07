const jwt = require('jsonwebtoken');
const SECRET = "TOKEN123";

const decodeToken =  {
 generateToken: function (payload){
    return jwt.sign({user: payload}, SECRET, {expiresIn: '2h'});
},
verifyToken: function (token) {
    return jwt.verify(token, SECRET);
  }
}

module.exports = decodeToken;