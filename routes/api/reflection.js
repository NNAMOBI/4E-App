"use strict"

//libraries
const router = require('express').Router();
const reflectionController = require('../../reflection/reflectionController');
const passport = require('passport')  // for authentication






//learning Endpoint
router.post('/reflection', reflectionController.createReflectionRecords)// create records of the user's reflections which
                                                             // map to the user by ID
router.get('/reflection/fetch', reflectionController.fetchReflectionRecords)// endpoint to fetch all reflections



module.exports = router;  // export