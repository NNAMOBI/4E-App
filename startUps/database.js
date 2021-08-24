// module to connect MongoDB Atlas cloud DB

const mongoose = require('mongoose');  // library connection to the database gotten npm: mongoose, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/mongoose
require('dotenv').config();  // library to check for environmental variables gotten from npm: dotenv, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/dotenv



const url = process.env.MONGODB_URL  // url to the connection string that connects the mongoDB 


const connectionParams={   // Parameters use for connecting the mongoDb
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}


    mongoose.connect(url,connectionParams)  // Function to connect the cloud 
    .then( () => {
        console.log('Connected to database ')  // log to the console "connected to the database"
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`); // log to the console connecting to the daabase
    })

