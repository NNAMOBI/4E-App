// Model for contactus //this model was not used in this project
const mongoose = require('mongoose');  //mongoose library  gotten from npm: mongoose, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/mongoose [Accessed 24 Aug 2021].


//schema for contact us table/ model
const ContactSchema = mongoose.Schema({
    
    name: {
        type: String, 
        required: true,
        allowNull: false
    },
    email: {
        type: Date, 
        required: true,
        allowNull: false
    },
    Message: {
        type: String,
        required: true,
        allowNull: false
        
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }

   
});

module.exports =  mongoose.model("Learning", ContactSchema);  // export the model