// Service repository  to separate the concerns of all reflections for this app



module.exports = {
   postMyReflections: (content, token)=> {  // sending the recording data to the backend
       const userData = {
           content,
           token
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

