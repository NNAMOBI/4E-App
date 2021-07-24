// module for single responsibilty to sign the json web token for cookies in the browser
const JWT = require('jsonwebtoken');




//sign the jwt
exports.signJwt =(id)=> {
 return JWT.sign({
        iss: "4EApp",
        sub: id
    }, process.env.SESSION_SECRET,{expiresIn: "1h"});
}




