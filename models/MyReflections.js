const mongoose = require('mongoose');




const MyReflectionsSchema = mongoose.Schema({   
    content: {
        type: String, 
        allowNull: true
    },
    recordingDate: {
        type: String,
        allowNull: false
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
},
{
    timestamps: true
   
});


   
// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("MyReflections", MyReflectionsSchema);