// Service repository  to separate the concerns of all  authentication for this app


module.exports = {
     login: user => {  // api service to make http request to the server to login users
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
                return res.json({isAuthenticated: false, user: {username: "", role: ""}}) // return too the browser
         })
          
     },
     register: user => {  // api service to make http request to the server to register users
        return fetch('/api/users/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res=> {
            if(res.status !== 401) // if the status code is not 401, then send the data
            return res.json().then(data => data);
            else
                return {isAuthenticated: false, user: {username: "", role: ""}} // authenticate the user
         })
    },
    logout: ()=>{  // api service to make http request to the server to logout users
        console.log("am i about to make a request")
       return fetch('/api/users/logout')
       .then(res=> {// if the status code is not 401, then send the data
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


