/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: MSC Project
 * 
 */


/*
 * MVC - Controller to handle the Creation of Users/students /api-1
 * MVC - Controller to handle the login of Users/students /api-2
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

const Student = require('../models/Student');
const JWT = require('jsonwebtoken');
const passportConfig = require('../Middleware/auth');
const credentials = require('../Util/helper');





//controller to create student
exports.createStudent = async (req, res, next)=> {    
        console.log("req.body=>", req.body)
   try {
    const {name, username, email, password, role} = req.body;
    await Student.findOne({email}, (err, student)=> {
       if(err)
      return res.status(500).json({message: {msgBody: "An error has  occurred"
                                       ,msgError: true}})
        if(student)
       return res.status(400).json({message: {msgBody: "Username already exist"
                                       ,msgError: true}})
       else {
           console.log("found student")
           const studentNew = new Student({name, username, email, password, role});
          const userStudent = studentNew.save()
       if(userStudent){
           res.status(201).json({message: {msgBody: "your account has been successfully created",msgError: false}})
       }else {
           res.status(500).json({message: {msgBody: "An error has occurred",msgError: true}})
       }
   }  
    
   })

   }catch(err){
      if(err)
      console.error(err)
   }
 

}


//controller to login student -2
exports.loginStudent = (req, res, next)=> {
    if(req.isAuthenticated()){
        console.log("req.user=>", req.user)
        const {_id, name, username,email,password, role} = req.user; //return the object after comparing password form the auth
        const token = credentials.signJwt(_id); //sign the jwt
        res.cookie('access_token', token,{httpOnly: true, sameSite: true}); //httpOnly prevent against cross-site scripting attack on the client
        // console.log("user.role=>",user.role)
        console.log("token=>",token)                                                          //sameSite prevent against cross site forgery attacks
    res.status(200).json({isAuthenticated: true,
                          user: {username, role}})                                                                     
}
}


//controller to logout student -2
exports.logoutStudent = async(req, res, next)=> {
        console.log("I am here to logout")
        await res.clearCookie('access_token'); // Clear the token so that the student will have to sign in again after he has logout
        await res.json({user: {username: "", role: ""},
                          success: true});             
      
                                                             
        
}

// route to authenticate the admin for access to the admin panel
exports.authenticateAdmin =(req, res, next)=> {
     
    if(req.user.role === 'admin'){
        res.status(200).json({message: {msgBody: "You now have access as an admin", 
                            errorMsg: false}})
    }else {
        res.status(403).json({message: {msgBody: "You are not authorized", errorMsg: true}})
    }
}


// route for persistent sessions to work with the front-end
exports.keepAlive =(req, res, next)=> {
     
    const {username, role} = req.user;
        res.status(200).json({isAuthenticated: true, user:  {username, role }})
   
 
}