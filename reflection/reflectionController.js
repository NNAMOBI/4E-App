/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: MSC Project
 * 
 */


/*
 * MVC - Controller to handle the Creation of reflection records /api-1
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */


const JWT = require('jsonwebtoken');   //jwt for sessions
const credentials = require('../Util/helper');   // call a function to verify the token  
const StudentModel = require('../models/Student');  // importing student model/ table
const LearningModel = require('../models/Learning')  // importing learning model/ table
const ReflectionModel = require('../models/MyReflections')  // importing myReflections model/ table


//api-1
exports.createReflectionRecords = async (req, res, next)=> {    
    console.log("req.body=>", req.body)
    
    try {
    const {token, content} = req.body      // get the data from the request body
    const decodeToken = await credentials.verifyJwt(token, process.env.SESSION_SECRET)    //sign the jwt
    if(decodeToken === "jwt expired")
    return res.status(400).json({message: {msgBody: "Session expired please Login again"   //if no student log server error
                                   ,msgError: true}})  
    console.log('decoded=>', decodeToken)
    const student =  await StudentModel.findOne({_id: decodeToken.sub})  //find one student by Id
    if(!student)
    return res.status(500).json({message: {msgBody: "An error has  occurred"   //if no student log server error
                                   ,msgError: true}})  
      else {
       const studentReflections = new ReflectionModel({     // save what students recorded in the db
                  content,                
                });
                studentReflections.student = student;   //Assign this learning to the user  
                studentReflections.save((err,result) => {   //save the learning recording in the learning table
          if(err) {
            console.log("err=>", err.message)
          }
            student.reflections.push(result)           // push the learning record into the student table  
            student.save((err, document)=> {
              if(err) {
                console.log("error in saving", err)
              } else{
                res.status(201).json({message: {msgBody: "your reflections has been documented successfully",msgError: false}})
              }
              
            })           
    }) 
      
   }
}catch(err){
    if(err)
     console.error(err)
 
}
  }