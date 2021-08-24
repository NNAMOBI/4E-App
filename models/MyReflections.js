// Model for reflection
const mongoose = require('mongoose'); //mongoose library  gotten from npm: mongoose, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/mongoose [Accessed 24 Aug 2021].




const MyReflectionsSchema = mongoose.Schema({   
    content: {
        type: String, 
        allowNull: true
    },
    recordingDate: {
        type: String,
        allowNull: false
    },
    timeOfRecording: {
        type: String,
        allowNull: false
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    learning: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learning'
    }
},
{
    timestamps: true
   
});


   

module.exports =  mongoose.model("MyReflections", MyReflectionsSchema); // export the learning model