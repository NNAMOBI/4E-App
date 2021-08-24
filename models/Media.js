//audio and video uploads model , this model is for the future

const mongoose = require('mongoose');  //mongoose library  gotten from npm: mongoose, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/mongoose [Accessed 24 Aug 2021].
const bcrypt = require('bcrypt');  //library to hash password of the user npm: bcrypt, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/bcrypt [Accessed 24 Aug 2021].


// media schema
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



module.exports =  mongoose.model("Media", MediaSchema);  // export the model