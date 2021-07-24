const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // strategy to authenticate username and password. 
const JwtStrategy = require('passport-jwt').Strategy;
const Student = require('../models/Student'); // require student
require('dotenv').config();  //to check for environmental variables

//function to extract the cookie used for the student session gotten from jwt
const cookieExtractor = req => {
 let token;
 if(req && req.cookies){
     token = req.cookies['access_token'];
 }
 return token;
}


//function to authenticate and check the token from the student's browser and protect routes
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

//authenticating against a database when the student logs in basically
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