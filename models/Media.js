//audio and video uploads model 

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const MediaSchema = mongoose.Schema({
    
    uploadType: {
          type: String,
          enum: ['audio', 'video'],
          required: true
    },
    learning: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learning'
    }],
    reflections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MyReflections'
    }]
},
{
    timestamps: true

   
});



// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("Media", MediaSchema);