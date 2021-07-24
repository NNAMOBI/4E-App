const mongoose = require('mongoose');  // connection to the database;
require('dotenv').config();  //to check for environmental variables



const url = process.env.MONGODB_URL


const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}


    mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

