"use strict"

//libraries
const router = require('express').Router();
const learningController = require('./../../learning/learningController')







//Endpoint to create the learning content
router.post('/learning', learningController.createRecording)// create records in the future we will use
                                                             //userId to map to the user
//Endpoint to fetch the learning content                                                            
router.get('/learning/fetch', learningController.fetchLearningRecords) 

//upload Endpoint
router.post('/upload', learningController.writeFile)


module.exports = router;  // export