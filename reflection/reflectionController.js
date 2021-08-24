/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: MSC Project
 * 
 */


/*
 * MVC - Controller to handle the Creation of reflection records /api-1
* MVC - Controller to handle fetching all reflection records /api-2
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */


const JWT = require('jsonwebtoken');   //jwt for sessions https://www.npmjs.com/package/jsonwebtoken [Accessed 24 Aug 2021].
const credentials = require('../Util/helper');   // call a function to verify the token  
const StudentModel = require('../models/Student');  // importing student model/ table
const LearningModel = require('../models/Learning')  // importing learning model/ table
const ReflectionModel = require('../models/MyReflections')  // importing myReflections model/ table
const moment = require('moment')  // library used for date manipulation https://www.npmjs.com/package/moment [Accessed 24 Aug 2021].
 

//api-1
exports.createReflectionRecords = async (req, res, next)=> {    
    console.log("req.body=>", req.body)
    
    try {
    const {token, date, content, time} = req.body      // get the data from the request body
    console.log("time",time)
    const recordingDate = moment(date).format('MMMM D Y') //convert the date to string 
    const decodeToken = await credentials.verifyJwt(token, process.env.SESSION_SECRET)    //sign the jwt
    if(decodeToken === "jwt expired")
    return res.status(400).json({message: {msgBody: "Session expired please Login again"   //if no student log server error
                                   ,msgError: true}})  
    console.log('decoded=>', decodeToken)
    const student =  await StudentModel.findOne({_id: decodeToken.sub})  //find one student by Id
    console.log("student", student._id)
    if(!student)
    return res.status(500).json({message: {msgBody: "An error has  occurred"   //if no student log server error
                                   ,msgError: true}})  
      else {
       const studentReflections = new ReflectionModel({     // save what students recorded in the db
                  content,           //the reflection of the student
                  recordingDate,
                  timeOfRecording: time             
                });
                studentReflections.student = student;   //Assign this learning to the user  
               await studentReflections.save()   //save the learning recording in the learning table

         const isLearning =  await LearningModel.findOne({student: student._id, dateOfLearning: recordingDate, timeOfRecording: time})  //find one learning record by Id and time of recording
         console.log("isLearning", isLearning);
         isLearning.reflections.push(studentReflections)           // push the learning record into the student table  
            await isLearning.save((err, document)=> {
              if(err) {
                console.log("error in saving", err)
              } else{
               res.status(201).json({message: {msgBody: "Your reflections has been documented successfully",msgError: false}})
              }
              
            })           
    // }) 
      
   }
}catch(err){
    if(err)
     console.error(err)
 
}
  }

  //api-2
  exports.fetchReflectionRecords =async(req, res, next)=> {  
    try {
    const token = req.query.token   // receive token from the request object
    const decodeToken = await credentials.verifyJwt(token, process.env.SESSION_SECRET)    //sign the jwt
    if(decodeToken === "jwt expired")
    return res.status(400).json({message: {msgBody: "Session expired please Login again"   //if no student log server error
                                   ,msgError: true}})  
    const studentRecords =  await StudentModel.findById({_id: decodeToken.sub}) //find one student by Id
                          
     
    const allRecords =  await ReflectionModel.find({
                                      student: studentRecords._id
                                     })
  
    if(!allRecords)   // if no records
    return res.status(500).json({message: {msgBody: "An error has  occurred"   //if no student log server error
                                   ,msgError: true}})  
     else {
    res.status(201).json({
                    message: {
                           msgBody: "Your learning has been fetched successfully", // send a status code error back to the client
                           msgError: false, 
                            },
                    records: allRecords,
                        })
      }
    }catch(err){
      if(err)
      console.error(err.message)  // catch the error
    }

}