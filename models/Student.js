//Student model 

const mongoose = require('mongoose'); //mongoose library  gotten from npm: mongoose, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/mongoose [Accessed 24 Aug 2021].
const bcrypt = require('bcrypt');   //library to hash password of the user npm: bcrypt, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/bcrypt [Accessed 24 Aug 2021].



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
StudentSchema.pre('save', function(next){  // gotten from MERN Stack Part 3 : Configuring PassportJS JWT and Local Strategys, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=FlZVFnErMU4
    if(!this.isModified('password'))
    return next();
    bcrypt.hash(this.password, 10, (err, passwordHash)=> {  //hash the password
        if(err)
        return next(err);
        this.password = passwordHash; //override the existing password
        next()
    })
})

// function to compare password from the client with the password save in the db
StudentSchema.methods.comparePassword = function(password, callback){  // gotten from MERN Stack Part 3 : Configuring PassportJS JWT and Local Strategys, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=FlZVFnErMU4
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

module.exports =  mongoose.model("Student", StudentSchema); // export the schema
