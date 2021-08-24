/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: MSC Project
 * 
 */


/*
 * Middleware - THIS IS A MIDDLEWARE TO HANDLE THE AUTHENTICATION OF USERS WHEN THEY LOGIN  AND TO EXTRACT THE COOKIE -SESSION

 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */



const passport = require('passport');  // library gotten from https://www.npmjs.com/package/passport [Accessed 24 Aug 2021].
const LocalStrategy = require('passport-local').Strategy; // strategy to authenticate username and password.  library gotten from https://www.npmjs.com/package/passport-local [Accessed 24 Aug 2021].
const JwtStrategy = require('passport-jwt').Strategy; // strategy to extract the cookie-session from the token  https://www.npmjs.com/package/passport-jwt [Accessed 24 Aug 2021].
const Student = require('../models/Student'); // require student
require('dotenv').config();  //to check for environmental variables

//function to extract the cookie used for the student session gotten from jwt  gotten from MERN Stack Part 3 : Configuring PassportJS JWT and Local Strategys, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=FlZVFnErMU4 [Accessed 24 Aug 2021].
const cookieExtractor = req => {
 let token;
 if(req && req.cookies){
     token = req.cookies['access_token'];
 }
 return token;
}


//function to authenticate and check the token from the student's browser and protect routes gotten from MERN Stack Part 3 : Configuring PassportJS JWT and Local Strategys, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=FlZVFnErMU4 [Accessed 24 Aug 2021].
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.SESSION_SECRET // verify the token
}, (payload, done)=> {
    Student.findById({_id: payload.sub}, (err, student)=> {
        //check for error
        if(err)
            return done(err, false);      
        if(student)  
            return done(null, student)
        else
        return done(null, false);
        
    })
}))

//authenticating against a database when the student logs in basically gotten from MERN Stack Part 3 : Configuring PassportJS JWT and Local Strategys, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=FlZVFnErMU4 [Accessed 24 Aug 2021].
passport.use(new LocalStrategy((username, password, done)=>{  
    //find the user/student
    Student.findOne({username}, (err, student)=> {
        //error handling to show something went wrong with the database
        if(err)
        return done(err);
        //if no user exist
        if(!student) 
        return done(null, false);
        student.comparePassword(password, done);  //check if password is correct
    })
}))

//another strategy to generate JWT token;