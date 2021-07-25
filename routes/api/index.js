
/*
 * Create route for admin student  to register and fetch details /api-1
 * Create route for admin student  to record learning /api-2
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

 
 //create Admin student route
const studentRoute = require('./student');  //-1
const learningRoute = require('./learning')




//export the route
module.exports = (app) => {
    app.use("/api/users", studentRoute);   //-1 
    app.use("/api/users", learningRoute);  //- 2
    // app.use("/api/users", reflectingRoute);

    
}


