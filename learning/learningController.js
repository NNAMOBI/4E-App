



exports.createRecording = async (req, res, next)=> {    
    console.log("req.body=>", req.body)
try {
// const {name, username, email, password, role} = req.body;
// await Student.findOne({email}, (err, student)=> {
//    if(err)
//   return res.status(500).json({message: {msgBody: "An error has  occurred"
//                                    ,msgError: true}})
//     if(student)
//    return res.status(400).json({message: {msgBody: "Username already exist"
//                                    ,msgError: true}})
//    else {
//        console.log("found student")
//        const studentNew = new Student({name, username, email, password, role});
//       const userStudent = studentNew.save()
//    if(userStudent){
//        res.status(201).json({message: {msgBody: "your account has been successfully created",msgError: false}})
//    }else {
//        res.status(500).json({message: {msgBody: "An error has occurred",msgError: true}})
//    }
  
//    }

// })
}catch(err){
 if(err){
     console.error(err)
 }
}
}