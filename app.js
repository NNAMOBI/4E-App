const Student = require('./models/Student');


const studentInput = {
    name: "Namo",
    username: "namoski",
    email: "nnamosuag@yahoo.com",
    password: "kingdom"
}

const student = new Student(studentInput);
student.save((err, document)=> {
    if(err){
        console.log(err)
    }else {
        console.log(document)
    }
})