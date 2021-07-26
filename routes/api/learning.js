"use strict"

//libraries
const router = require('express').Router();
const learningController = require('./../../learning/learningController')
const passport = require('passport')  // for authentication






//learning Endpoint
router.post('/learning', learningController.createRecording)// create records in the future we will use
                                                             //userId to map to the user



module.exports = router;  // export