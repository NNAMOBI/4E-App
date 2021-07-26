// module for single responsibilty to sign the json web token for cookies in the browser
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');




//sign the jwt
exports.signJwt = async (id)=> {
 return await JWT.sign({
        iss: "4EApp",
        sub: id
    }, process.env.SESSION_SECRET,{expiresIn: "1h"});
}

exports.verifyJwt = async (token, secret)=> {
  if (token) {
    try {
     return await JWT.verify(token, secret);
    } catch (err) {
     return err.message;
    }
   }
   return ('no token');
  }








