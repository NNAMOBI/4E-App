
/*
 * Create route for admin student  to register and fetch details /api-1
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

 
 //create Admin student route
const studentRoute = require('./student');  //-1



//export the route
module.exports = (app) => {
    app.use("/api/users", studentRoute);   //-1 

    
}


