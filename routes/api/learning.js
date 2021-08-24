"use strict"

//libraries
const router = require('express').Router(); // library for routing gotten from npm: express, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/express [Accessed 24 Aug 2021].
const learningController = require('./../../learning/learningController')  // import the learning controller







//Endpoint to create the learning content
router.post('/learning', learningController.createRecording)// create records in the future we will use
                                                             //userId to map to the user
//Endpoint to fetch the learning content                                                            
router.get('/learning/fetch', learningController.fetchLearningRecords) 

//upload Endpoint
router.post('/upload', learningController.writeFile)


module.exports = router;  // export