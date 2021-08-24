"use strict"

//libraries
const router = require('express').Router(); // library for routing gotten from npm: express, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/express [Accessed 24 Aug 2021]
const studentController = require('../../student/studentController') // import from the student controller
const passport = require('passport')  // library for authentication of cookie-session gotten from npm: passport-jwt, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/passport-jwt





//student Endpoint
router.post('/register', studentController.createStudent)// register student
router.post('/login', passport.authenticate('local',{session: false}), studentController.loginStudent)// login student
router.get('/logout', passport.authenticate('jwt',{session: false}), studentController.logoutStudent)// logout student


//admin route 
router.get('/admin', passport.authenticate('jwt',{session: false}), studentController.authenticateAdmin)//route to check for admin or user role
router.get('/auth', passport.authenticate('jwt',{session: false}), studentController.keepAlive)// route to keep the connection alive between the client and server



module.exports = router;   //export 