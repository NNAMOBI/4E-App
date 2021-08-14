import React, {useState, useRef, useEffect} from 'react'
import AuthService from '../../Services/AuthService';
import studyOutside from '../images/dart.jpg';
import Message from '../../Component/Message';
import './register.css';
import {Link} from 'react-router-dom';


//Register component
function Register(props) {
    const [user, setUser] = useState({username: "", password: "", role: ""});
    const [message, setMessage] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false)
    let timerID = useRef(null);

    useEffect(()=> {
        return ()=> {
            clearTimeout(timerID);
        }
    },[])


    //function to handle change on the input
    const onChange = (e)=> {
        setUser({...user, [e.target.name ]: e.target.value});  //user that is inputed in the form
        
    }
     //reset the state of the user
     const resetForm =()=> {
        setUser({username: "", password: "", role: ""})
      }


    const toggleVisibility =()=> {
        console.log('i have clicked')
        setPasswordVisible(!passwordVisible)
    }
    

     //function to handle submit of the form
     const onSubmit = (e) => {
        e.preventDefault();
        AuthService.register(user).then(data =>{ //api to login from the backend
            const {message} = data;
            setMessage(message);
            resetForm();
            if(!message.msgError) {  //we want to show the message for two seconds and after that we want them
                timerID = setTimeout(()=> {   // then go to the login page if there is no error.
                    props.history.push('./login')
                },2000)
            }
        })
    }

    return (
        <>
        <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
       
        <Link className="navbar-brand" to="/" id="logo">4E</Link>
        
        </nav>
        </div>
            <div className="jumbotron jumbotron-fluid">
                
           <div className="container">  
           <div className="row">
                   <div class="col">

     <div className="design-logo">
     <img src={studyOutside}  class="card-img-top"  alt="learning by collaboration" width="600px" height="471px" />
     </div>
                   
                    </div>
                   <div className="col">
                   <h1 className="display-6 text">New Learner?</h1>
                   <p className="details">Register with your details and never stop learning</p>
               {/* </div> */}
                 <form className="text p-5" action="#!" onSubmit={onSubmit}>
            
                <input type="text" className="form-control mb-4" 
                name="name"
                 placeholder="name"
                 onChange={onChange}/>

                <input type="text"
                className="form-control mb-4" 
                name="username" 
                placeholder="username"
                   onChange={onChange}/>
                <input type="text" 
                className="form-control mb-4" 
                name="email" 
                placeholder="email" 
                 onChange={onChange}/>

                <input type={(passwordVisible) ?  "text" : "password"} class="form-control mb-4" 
                name="password" placeholder="password" id="signup"
                 onChange={onChange}/>
                 <i className="fa fa-eye password-icon" onClick={toggleVisibility}></i>
                
                <input type="text" 
                className="form-control mb-4" 
                name="role" 
                placeholder="Enter your role"
                  onChange={onChange}/>
               
                <button class="btn btn-default btn-block my-4" type="submit">Create Account</button>
              
                <p>Already have an account?
                    <Link to="/login">Sign In</Link>
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

export default Register
