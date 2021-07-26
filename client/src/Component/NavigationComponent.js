import React, {useContext} from 'react'; // to use the provider and consumer 
import {useHistory} from 'react-router-dom'
import './NavBar.css';
import { Link } from 'react-router-dom'  // react library to handle the page navigation
import AuthService from '../Services/AuthService';  // our interface to all the CRUD operations
import { AuthContext } from '../ContextApi/AuthContext'; // framework for provider and consumer 


  
  export default function NavigationComponent(props) {
    const {isAuthenticated, user, setAuthenticated, setUser} = useContext(AuthContext); //global data
    let history = useHistory(); // call a function that routes
    //function to handle logout
    const logoutHandler = ()=> {
      console.log("i am about to use the authservice logout")
      AuthService.logout().then(data => {
        console.log(data)
        console.log(data.isAuthenticated)
        console.log("data.success=>",data.success)
        if(!data.isAuthenticated){
          setUser(data.user); // set the username and role to empty strings
          setAuthenticated(false);
          history.push('./');  //back to the home page
         
         
        }
      }) 
    }
    //function to render the noAuthenticatedNavbar
    const noAuthenticatedNavbar =()=> {
     return (
          <>
          <li id="menu-item-42" className="nav-item  menu-item-42">
             <Link to="/register"> 
                 <button className="btn btn-default" type="submit">Register</button>
             </Link> 
        </li>
        <li id="menu-item-963" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-963">
             <Link to="/login" className="nav-link" >
               Sign In
             </Link>
        </li>
        <li id="menu-item-40" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-40" >
             <Link to="/" class="nav-link">
             Record My Learning Opportunities
             </Link>
        </li>
        <li id="menu-item-40" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-40" >
          <Link to="/" class="nav-link">
            Reflect My Learning Opportunities
          </Link>
        </li>
        <li id="menu-item-42" className="nav-item  menu-item-42">
          <Link to="/info-guide" className="nav-link">
            Information & Guidance
          </Link>
        </li>

          </>
     )
    }

    //function to render navbar when the user is authenticated
    const authenticatedNavComp =()=> {
      console.log("i am here");
          return (
            <>
               { // check if the user is an admin then show the dashboard link
                 user.role === "admin" ?
        <li id="menu-item-963" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-963">
                <Link to="/admin" className="nav-link" >
                      Admin
                  </Link> 
        </li> : null
               }
        
        <li id="menu-item-40" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-40" >
             <Link to="/record-your-learning" className="nav-link">
             Record My Learning Opportunities
             </Link>
        </li>
        <li id="menu-item-40" className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-40" >
          <Link to="/reflect-your-learning" className="nav-link">
            Reflect My Learning Opportunities
          </Link>
        </li>
        <li id="menu-item-42" className="nav-item  menu-item-42">
          <Link to="/info-guide" className="nav-link">
            Information & Guidance
          </Link>
        </li>

        {/* <li id="menu-item-42" className="nav-item  menu-item-42"> */}
             {/* <Link to="/logout">  */}
          <button className="btn btn-default" type="button" onClick={logoutHandler}>Logout</button>
             {/* </Link>  */}
        {/* </li> */}

          </>
          )

    }



    return (
        <>
           <nav className="navbar navbar-expand-md navbar-light">
 <div className="container">
 <Link className="navbar-brand" to="/" id="logo">4E</Link>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarCollapse">
     
       <ul id="menu-main-nav" className="navbar-nav nav-fill w-100">
        {!isAuthenticated? noAuthenticatedNavbar(): authenticatedNavComp()}
        
       </ul>
 
 </div>
 </div>
</nav>



        </>
      );
    };
  
    
