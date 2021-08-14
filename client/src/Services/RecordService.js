// Service repository  to separate the concerns of all recording learning for this app
import axios from 'axios'; // library to handle api calls

// interface in javascript that handles all the service calls concerning recording cpd
const myInterface = {
   postRecord: (content,type, date,token, fileName, filePath, time)=> {  // sending the recorded learning data to the backend
       const userData = {
           content,
           type,
           date,
           token,
           fileName,
           filePath,
           time
         
       }
       return fetch('/api/users/learning', {
           method: "post",
           body: JSON.stringify(userData),
           headers: {
               'Content-Type' : 'application/json',

           }
       }).then(res=> {
           if(res.status !== 401)
           return res.json().then(data => data);
           else
           return {message: {msgBody: "UnAuthorized", msgError: true}}
        })
   },
   getLearningRecords: (token)=> {  // get the recording data from the server
    return fetch(`/api/users/learning/fetch?token=${token}`)
    .then(res=> {
        if(res.status !== 401)
        return res.json().then(data => data);
        else
            return {message: {msgBody: "UnAuthorized", msgError: true}}
     })
   },
   postFile: async(formData)=> {   // upload the file
       console.log("i am about to send the file")
       return await axios.post('/api/users/upload', formData, {
             headers: {
                 'Content-Type': 'multi-part/form-data'
             }
             
       })
   }
}


export default myInterface;
