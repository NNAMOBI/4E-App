// Service repository  to separate the concerns of all recording learning for this app



module.exports = {
   postRecord: (content,type, date,token)=> {  // sending the recording data to the backend
       const userData = {
           content,
           type,
           date,
           token
       }
       return fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/learning`, {
           method: "post",
           body: JSON.stringify(userData),
           headers: {
               'Content-Type' : 'application/json'
           }
       }).then(res=> {
           if(res.status !== 401)
           return res.json().then(data => data);
           else
           return {message: {msgBody: "UnAuthorized", msgError: true}}
        })
   },
   getLearningRecords: ()=> {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/learning/:id`)
    .then(res=> {
        if(res.status !== 401)
        return res.json().then(data => data);
        else
            return {message: {msgBody: "UnAuthorized", msgError: true}}
     })
   }
}

