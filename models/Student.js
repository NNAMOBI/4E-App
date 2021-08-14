//Student model 

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const StudentSchema = mongoose.Schema({
    // _id: { type: String},
    name: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        required: true,
        min: 8,
        max: 15
    },
    email: {
        type: String,
        required: true
        
    },
    password: {
        type: String,
        required: true
    },
    role: {
          type: String,
          enum: ['user', 'admin'],
          required: true
    },
    learning: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learning'
    }],
    reflections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MyReflections'
    }],
},
    {
        timestamps: true
    
    
   
});

//function to hash passwords
StudentSchema.pre('save', function(next){
    if(!this.isModified('password'))
    return next();
    bcrypt.hash(this.password, 10, (err, passwordHash)=> {  //hash the password
        if(err)
        return next(err);
        this.password = passwordHash; //override the existing password
        next()
    })
})

StudentSchema.methods.comparePassword = function(password, callback){
    bcrypt.compare(password, this.password, (err, isMatch)=> {
        if(err)
        return callback(err);
        else {
            if(!isMatch){
             //returns null if the password they gave us does not match 
             return callback(`Your password does not match! Please check your password again`, isMatch);
            }else {
                return callback(null, this); // this will attach the user object to the request object
            } 
              
    }
    })
}

// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("Student", StudentSchema);
