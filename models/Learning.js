// Model for learning
const mongoose = require('mongoose');  //mongoose library  gotten from npm: mongoose, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/mongoose [Accessed 24 Aug 2021].



//schema for learning table
const LearningSchema = mongoose.Schema({
    
    title: {
        type: String, 
        required: true
        
    },
    dateOfLearning: {
        type: String, 
        required: true
        
    },
    typeOfLearning: {
        type: String,
        required: true      
    },
    resource: [{
        type: String, 
        allowNull: true
    }],
    timeOfRecording: {
        type: String,
        required: true 
    },
    filePath: [{
        type: String,
        allowNull: true
    }],
    reflections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MyReflections'
    }],
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
},
{
    timestamps: true
});



module.exports =  mongoose.model("Learning", LearningSchema);  // export the model