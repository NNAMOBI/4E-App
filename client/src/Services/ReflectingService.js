// Service repository  to separate the concerns of all reflections for this app


// interface in javascript that handles all the service calls concerning reflecting cpd
module.exports = {
   postMyReflections: (content, date, token, time)=> {  // sending the recording data to the backend
     console.log("date=>", date, time)
       const userData = {
           content,
           date,
           token,
           time
       }
       return fetch('/api/users/reflection', {
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
   getMyReflections: ()=> {
    return fetch('/api/users/reflection/:id')
    .then(res=> {
        if(res.status !== 401)
        return res.json().then(data => data);
        else
            return {message: {msgBody: "UnAuthorized", msgError: true}}
     })
   }
}

