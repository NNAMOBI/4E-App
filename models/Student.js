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
        required: true,
        
    },
    password: {
        type: String,
        required: true
    },
    role: {
          type: String,
          enum: ['user', 'admin'],
          required: true
    }
},{
    toJSON: {
        transform: (doc, ret) => {
            ret.Id = ret._id;
            
        }
    }
   
}
);

//hash function for passwords
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
            if(!isMatch) //returns null if the password they gave us does not match 
               return callback(null, isMatch);
               return callback(null, this); // this will attach the user object to the request object
    }
    })
}

// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("Student", StudentSchema);
