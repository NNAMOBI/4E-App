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
const moment = require('moment')


//api-1
exports.createRecording = async (req, res, next)=> {    
    try {
    const {token, content, type, date, filePath, fileName, time} = req.body      // get the data from the request body
    const decodeToken = await credentials.verifyJwt(token, process.env.SESSION_SECRET)    //sign the jwt
    if(decodeToken === "jwt expired")
    return res.status(400).json({message: {msgBody: "Session expired please Login again"   //if no student log server error
                                   ,msgError: true}})  
    const student =  await StudentModel.findOne({_id: decodeToken.sub})  //find one student by Id
    if(!student)
    return res.status(500).json({message: {msgBody: "An error has  occurred"   //if no student log server error
                                   ,msgError: true}})  
      else {
       const studentLearningRecord = new LearningModel({     // save what students recorded into the db
                  title:content, 
                  typeOfLearning: type, 
                  dateOfLearning: moment(date).format('MMMM D Y'), //convert the date to string
                  timeOfRecording: time
                });

        studentLearningRecord.student = student; 
        studentLearningRecord.resource.push(fileName);   //use array method to push fileName into the db
        studentLearningRecord.filePath.push(filePath);   // use Array method to push filepath into the db
        studentLearningRecord.save((err,result) => {   
          if(err) {
            console.log("err=>", err.message)
          }
        console.log("result=>", result)
            student.learning.push(result)      //push the learning data into the users(student) model
            student.save((err, document)=> {    /// then save the student's data 
              if(err) {
                console.log("error in saving", err)
              } else{
                console.log("document=>",document)
                res.status(201).json({message: {msgBody: "your learning has been documented successfully",msgError: false}})
              }          
            })           
    }) 
   }
}catch(err){
    if(err)
     console.error(err)
}
  }

exports.fetchLearningRecords =async(req, res, next)=> {
    // console.log('req.query=>',req.query);
    try {
    const token = req.query.token
    const decodeToken = await credentials.verifyJwt(token, process.env.SESSION_SECRET)    //sign the jwt
    if(decodeToken === "jwt expired")
    return res.status(400).json({message: {msgBody: "Session expired please Login again"   //if no student log server error
                                   ,msgError: true}})  
    // console.log('decoded=>', decodeToken)
    const studentRecords =  await StudentModel.findById({_id: decodeToken.sub}) //find one student by Id
    console.log("studentLearningRecords", studentRecords._id)                            
     const learningRecordArray = [];
     const reflectionsArray = []
    const allRecords =  await LearningModel.find({
                                      student: studentRecords._id
                                     }).populate('reflections') 
    console.log("allRecords", allRecords)  
   await allRecords.map((record) => {
      learningRecordArray.push({title: record.title,    // push the result of the learning records into a new array
        dateOfLearning: record.dateOfLearning,
        timeOfRecording: record.timeOfRecording,
        typeOfLearning: record.typeOfLearning,
        resource: record.resource,
        filePath: record.filePath,
        _id: record._id
})
    reflectionsArray.push({reflections: record.reflections,
                           _id: record._id})
    })  
    
   
      console.log("learning record", learningRecordArray)
      console.log("reflection record", reflectionsArray)
    if(!allRecords)
    return res.status(500).json({message: {msgBody: "An error has  occurred"   //if no student log server error
                                   ,msgError: true}})  
     else {
    res.status(201).json({
                    message: {
                           msgBody: "Your learning has been documented successfully",
                           msgError: false, 
                            },
                    records: learningRecordArray,
                    reflections: reflectionsArray.map(reflect => reflect.reflections)
                        })
      }
    }catch(err){
      if(err)
      console.error(err.message)
    }

}


exports.writeFile= async (req,res)=> {
    if(req.files === null){
        return res.status(400).json({msg: 'No file upload'})
    }
    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err=>{
        if(err){
          console.error(err.message)
          return res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
    })
}