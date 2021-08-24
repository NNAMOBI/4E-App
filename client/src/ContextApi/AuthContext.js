import React, {createContext, useState, useEffect} from 'react';  //react library
import AuthService from '../Services/AuthService';  // import from authservice

//create the context
export const AuthContext = createContext();  //AuthContext makes the provider and consumer available


//code from MERN stack part 5 : Using the React Context API and creating an AuthService, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=uWVx6Jt4Rqw
const AuthProvider =({children})=>{  //children is the consumer component

    const [user, setUser] = useState(null);  //user is the student that is logged-in/ setUser is to update the state
    const [isAuthenticated, setAuthenticated] = useState(false);  //is the user authenticated
    const [isLoaded, setIsLoaded] = useState(false) // is the app loaded, once it is loaded we will set the loaded to true

//a componentDidMount lifecycle, we will use useEffect Hook to run once
   useEffect(()=> {
    AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
    })
   },[])
    
    return (
        <div>
            {!isLoaded ? <h2>Loading</h2>:
             <AuthContext.Provider value={{user, setUser, isAuthenticated, setAuthenticated}}>
                 {children}
             </AuthContext.Provider>  //parent to make the state global
             
            }
            
        </div>
    )
}


export default AuthProvider;

