// Service repository  to separate the concerns of all  authentication for this app


module.exports = {
     login: user => {
         return fetch('/api/users/login', {
             method: "post",
             body: JSON.stringify(user),
             headers: {
                 'Content-Type' : 'application/json'
             }
         }).then(res=> {
            if(res.status !== 401)
            return res.json().then(data => data);
            else
                return res.json({isAuthenticated: false, user: {username: "", role: ""}})
         })
          
     },
     register: user => {
        return fetch('/api/users/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res=> {
            if(res.status !== 401)
            return res.json().then(data => data);
            else
                return {isAuthenticated: false, user: {username: "", role: ""}}
         })
    },
    logout: ()=>{
        console.log("am i about to make a request")
       return fetch('/api/users/logout')
       .then(res=> {
        if(res.status !== 401)
        return res.json().then(data => data);
        else
            return {isAuthenticated: false, user: {username: "", role: ""}}
        
    })
   },
     isAuthenticated: () => {   //syncing the back-end with the front-end
        return fetch('api/users/auth')
         .then(res=> {
             if(res.status !== 401)
             return res.json().then(data => data);
             else
                 return {isAuthenticated: false, user: {username: "", role: ""}}
             
         })
          
         }
}


