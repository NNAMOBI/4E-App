/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: MSC Project
 * 
 */


/*
 * MVC - Controller to handle the Creation of learning records /api-1
* MVC - Controller to handle the fetching of all learning records from the db /api-2
* MVC - Controller to handle the writing the files uploaded of all learning records to the public folder /api-3
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */


const JWT = require('jsonwebtoken');   //jwt for sessions https://www.npmjs.com/package/jsonwebtoken [Accessed 24 Aug 2021].
const credentials = require('../Util/helper');   // call a function to verify the token  
const StudentModel = require('../models/Student');  //student model/ table
const LearningModel = require('../models/Learning') //learning model/ table
const moment = require('moment')  // library used for date manipulation https://www.npmjs.com/package/moment [Accessed 24 Aug 2021].


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
        studentLearningRecord.save((err,result) => {    // Save the student learning record
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
                res.status(201).json({message: {msgBody: "your learning has been documented successfully",msgError: false}}) // return a message to the client that learning record was successful
              }          
            })           
    }) 
   }
}catch(err){
    if(err)
     console.error(err)
}
  }

   //api-2
exports.fetchLearningRecords =async(req, res, next)=> {
    try {
    const token = req.query.token   // receive the token from the request object
    const decodeToken = await credentials.verifyJwt(token, process.env.SESSION_SECRET)    //sign the jwt
    if(decodeToken === "jwt expired")
    return res.status(400).json({message: {msgBody: "Session expired please Login again"   //if no student log server error
                                   ,msgError: true}})  
   
    const studentRecords =  await StudentModel.findById({_id: decodeToken.sub}) //find one student by Id
    console.log("studentLearningRecords", studentRecords._id)                            
     const learningRecordArray = [];    // instantiate an empty array
     const reflectionsArray = []         // instantiate an empty new array
    const allRecords =  await LearningModel.find({   // find all records in the learning model
                                      student: studentRecords._id     
                                     }).populate('reflections') 
 
   await allRecords.map((record) => {
      learningRecordArray.push({title: record.title,    // push the result of the learning records into a new array
        dateOfLearning: record.dateOfLearning,
        timeOfRecording: record.timeOfRecording,
        typeOfLearning: record.typeOfLearning,
        resource: record.resource,
        filePath: record.filePath,
        _id: record._id
})
    reflectionsArray.push({reflections: record.reflections,  // push the reflection record into the reflection model
                           _id: record._id})
    })  
    
   
      console.log("learning record", learningRecordArray)
      console.log("reflection record", reflectionsArray)
    if(!allRecords)
    return res.status(500).json({message: {msgBody: "An error has  occurred"   //if no student log server error
                                   ,msgError: true}})  
     else {
    res.status(201).json({       // return a message in json object of the learning successfully saved
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
      console.error(err.message)    // catch the error
    }

}

//api-3
exports.writeFile= async (req,res)=> {    
    if(req.files === null){    // if there is no file with the request object 
        return res.status(400).json({msg: 'No file upload'})  // return to he client a 400 status code error
    }
    const file = req.files.file;      // if there is a file assign it to file variable

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err=>{
        if(err){
          console.error(err.message)
          return res.status(500).send(err);   // if there is an error to the client a 500 status code error
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`}) // create this file in the public folder in the server
    })
}