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
    }
},
{
    timestamps: true
   
});
// schema.plugin(mongoosePaginate);
module.exports =  mongoose.model("MyReflections", MyReflectionsSchema);