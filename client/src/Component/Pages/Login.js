import React, { useState, useContext } from 'react'
import login_image from '../images/login_image.png';
import './register.css';
import {Link} from 'react-router-dom'; 
 import AuthService from '../../Services/AuthService';  // service to authenticate the user
 import Message from '../../Component/Message';   // message we get from the server
import {AuthContext} from '../../ContextApi/AuthContext'; 





//login component
function Login(props) {
   const [user, setUser] = useState({username: "", password: ""});  //initialize the user to empty strings
   const [message, setMessage] = useState(null);  //message null is not to render the message component
   const authContext  = useContext(AuthContext);

//function to handle change on the input
    const onChange = (e)=> {
        setUser({...user, [e.target.name ]: e.target.value});  //user that is inputed in the form
        
    }


    //function to handle submit of the form
    const onSubmit = (e) => {
        e.preventDefault();
        AuthService.login(user).then(data =>{ //api to login from the backend
            console.log("data=>", data.token)  
            localStorage.setItem('access_token', data.token);
            const {isAuthenticated, user, message} = data
            //if authenticated, update the global context of the user
            if(isAuthenticated) {
               authContext.setUser(user);   //set the user
               authContext.setAuthenticated(isAuthenticated); // This will be false
               props.history.push('./info-guide');

            }else{
                setMessage(message);
            }
        })
    }



    return (
        <>
        <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
       
        <Link class="navbar-brand" to="/" id="logo">4E</Link>
        
        </nav>
        </div>
            <div class="jumbotron jumbotron-fluid">
                
           <div class="container">  
           <div class="row">
                   <div class="col">

     <div class="design-logo">
     <img src={login_image}  class="card-img-top"  alt="loginImage" width="600px" height="471px" />
     </div>
                   
                    </div>
                   <div class="col">
                   <h1 class="display-6 text">Welcome back</h1>
                   <p class="details">Kindly enter your credentials to access your account</p>
               {/* </div> */}
                 <form className="text p-5" action="#!" onSubmit={onSubmit}>
                <input type="text" 
                className="form-control mb-4" 
                name="username" 
                placeholder="username" 
                id="signup" 
                onChange={onChange}/>

                <input type="password" 
                className="form-control mb-4" 
                name="password" 
                placeholder="password" 
                id="signup"
                 onChange={onChange}/>
             
               
                <button className="btn btn-default btn-block my-4" type="submit" >Submit</button>
              
                <p>Don't have an account?
                    <Link to="/register">Create an account</Link>
                </p>
            </form>
                   {message ? <Message message={message}/> : null}  
                   </div>
          </div>
        
      </div>
      </div>
            
        
            
         </>
    )
}

export default Login
