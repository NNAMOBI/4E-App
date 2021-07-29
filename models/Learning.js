const mongoose = require('mongoose');  //mongoose library



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
    filePath: [{
        type: String,
        allowNull: true
    }],
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
},
{
    timestamps: true
});


// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("Learning", LearningSchema);