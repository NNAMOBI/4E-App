/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: MSC Project
 * 
 */


/*
 * MVC - Controller to handle the Creation of learning records /api-1
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */


const JWT = require('jsonwebtoken');   //jwt for sessions
const credentials = require('../Util/helper');   // call a function to verify the token  
const StudentModel = require('../models/Student');  //student model/ table
const LearningModel = require('../models/Learning')


//api-1
exports.createRecording = async (req, res, next)=> {    
    console.log("req.body=>", req.body)
    try {
    const {token, content, type, date} = req.body      // get the data from the request body
    const decodeToken = await credentials.verifyJwt(token, process.env.SESSION_SECRET)    //sign the jwt
    if(!decodeToken)
    return res.status(400).json({message: {msgBody: "Session expired please Login again"   //if no student log server error
                                   ,msgError: true}})  
    console.log('decoded=>', decodeToken)
    const student =  await StudentModel.findOne({_id: decodeToken.sub})  //find one student by Id
    console.log(student)
    if(!student)
    return res.status(500).json({message: {msgBody: "An error has  occurred"   //if no student log server error
                                   ,msgError: true}})  
      else {
       const studentLearningRecord = new LearningModel({     // save what students recorded in the db
                  title:content, 
                  typeOfLearning: type, 
                  dateOfLearning: date
                });
        studentLearningRecord.save((err,result) => {
          if(err) {
            console.log("err=>", err.message)
          }
        console.log("result=>", result)
            student.learning.push(result)
            student.save((err, document)=> {
              if(err) {
                console.log("error in saving", err)
              }
              console.log("document=>",document)
            })
            
    })
      
   }
//        res.status(201).json({message: {msgBody: "your account has been successfully created",msgError: false}})
//    }else {
//        res.status(500).json({message: {msgBody: "An error has occurred",msgError: true}})
//    }
  
//    }

// })
}catch(err){
    if(err)
     console.error(err)
 
}
  }