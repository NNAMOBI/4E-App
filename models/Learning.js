const mongoose = require('mongoose');  //mongoose library


//schema for learning table
const LearningSchema = mongoose.Schema({
    
    title: {
        type: String, 
        required: true,
        allowNull: false
    },
    dateOfLearning: {
        type: Date, 
        required: true,
        allowNull: false
    },
    typeOfLearning: {
        type: String,
        required: true,
        allowNull: false
        
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }

   
});
// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("Learning", LearningSchema);