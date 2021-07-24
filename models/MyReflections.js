const mongoose = require('mongoose');



const MyReflectionsSchema = mongoose.Schema({
    
    content: {
        type: String, 
        required: true,
        allowNull: false
    },
    resource: {
        type: String, 
        required: true,
        allowNull: false
    },
    dateOfLearning: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Learning',
       allowNull: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }

   
});
// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("MyReflections", MyReflectionsSchema);