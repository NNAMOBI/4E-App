"use strict"

//libraries
const router = require('express').Router(); // library for routing gotten from npm: express, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/express [Accessed 24 Aug 2021].
const reflectionController = require('../../reflection/reflectionController'); // import the reflection controller







//learning Endpoint
router.post('/reflection', reflectionController.createReflectionRecords)// create records of the user's reflections which
                                                             // map to the user by ID
router.get('/reflection/fetch', reflectionController.fetchReflectionRecords)// endpoint to fetch all reflections



module.exports = router;  // export