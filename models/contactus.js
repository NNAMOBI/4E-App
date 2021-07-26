
const mongoose = require('mongoose');  //mongoose library


//schema for learning table
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
// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("Learning", ContactSchema);