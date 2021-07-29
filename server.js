/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM513
 * Course: Msc project
 * 
 */



/**
 * server setup-1
 * installing libraries: - 2
 * initializing the port No -3
 * library to handle 404 errors -4
 * Middleware to parse data from the frontend to the body of the request- 5
 * calling the route that performs the model and controller in the MVC -6
 * allow for cross origin from the browser over http-7
 * starting up the database server -8
 * To create cookie sessions -9
 * for file upload  -10 
 
 */

 

//importing / importing libraries-2
const { required } = require('@hapi/joi');  // for for validation
const express = require('express');   // for server setup
const app = express();
const fileUpload = require('express-fileupload');
const path = require('path')  // for routing to the exact static file
const http = require('http')   // request and response protocol
require('dotenv').config();  //to check for environmental variables
// const {port} = require("./config");  // -3
const port = process.env.PORT 
const createError = require('http-errors');  // -4
// require('express-async-errors');
const cors = require('cors');  //-7
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');






//middleware to parse data in the body of the request  -5
app.use(cors());   //-7
app.use(express.json());   //4
app.use(express.urlencoded({extended: false}));
app.use(cookieParser()); //9
app.use(fileUpload()) //10



// Invoking All routes  -6
require('./routes/api')(app);
require('./startUps/database')  // -8
const Student = require('./models/Student');


// //upload Endpoint
// app.post('/upload', (req,res)=> {
//     if(req.files === null){
//         return res.status(400).json({msg: 'No file upload'})
//     }
//     const file = req.files.file;
//     console.log("file=>", file)

//     file.mv(`${__dirname}/client/public/uploads/${file.name}`, err=>{
//         if(err){
//           console.error(err.message)
//           return res.status(500).send(err);
//         }
//         res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
//     })
// })




// starting the node server  -1
const startServer = async () => {
    app.listen(port, (err) => {
        if (err) {
            // logger.log(err.message);
            console.log(err.message);
            process.exit(1);
        }
        console.log('info', `Server now listening on port  ${port}`)
        // logger.log('info', `Server now listening on port  ${port}`);
    });
};
startServer();