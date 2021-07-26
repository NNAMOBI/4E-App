const mongoose = require('mongoose');  //mongoose library



//schema for learning table
const LearningSchema = mongoose.Schema({
    
    title: {
        type: String, 
        required: true
        
    },
    dateOfLearning: {
        type: Date, 
        required: true
        
    },
    typeOfLearning: {
        type: String,
        required: true
       
        
    }
},
{
    timestamps: true
});
// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("Learning", LearningSchema);