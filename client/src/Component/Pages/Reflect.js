import React from 'react'
// import {Link} from 'react-router-dom';
import NavigationComponent from '../NavigationComponent';
import {useHistory} from 'react-router-dom'
import './reflect.css';
import {useState} from 'react'  // library for state
import ReflectingService from '../../Services/ReflectingService';  // service to authenticate the user
import Message from '../../Component/Message'; //message component to display message from the server









// functions to handle the reflection component of the app
function Reflect(props) {
  const [content, setContent] = useState({content: ""});  //use state to handle content field
  const [message, setMessage] = useState(null);  //message null is not to render the message component
  const [date, setDate] = useState({date: ""}); // state for the date field
  const [time, setTime] = useState({time: ""}); // state for time field
  let history = useHistory(); // call a function that routes

  const onSubmit=(e)=> {
    e.preventDefault();   // prevent the default of the browser
    console.log("all data=>", content, date, time);
    const token = localStorage.getItem('access_token'); // get the accesstoken in the local storage
    console.log(token)
    if(!token)
    history.push('./');  //back to the home page
    ReflectingService.postMyReflections(content, date, token, time).then(data =>{ //api to post content to the backend
      console.log(data)
      const {message} = data;  // pull out the message from our server data
      if(!message.msgError){    //if no error from the backend
        setMessage(message)    // //send a flash message of the success to the frontend

      }else if(message.msgBody === "UnAuthorized"){   // this means the token is expired
             setMessage(message)  //send a flash message of the error to the frontend
      }else {
          setMessage(message)   //send a flash message of the error to the frontend 
      }
      

     })
  }

     


    return (
        <div>
            <NavigationComponent />
            <form onSubmit={onSubmit}>
             <div class="container">  
            <div class="row">
                   <div class="col">
                 {/* Left column jumbotron starts here*/}


                  <div class="jumbotron jumbotron-fluid">
                  <h5 class="display-5 text">What was the opportunity about? </h5>
                    <p class="details"> Write your reflections </p>   
                       {/* radio button starts here */}
              <textarea class="form-control form-control-lg mb-3" rows="5" value= {content.content} 
              onChange={(e)=> setContent(e.target.value)}>

              </textarea>
            <div className="date-of-learning">
            <h5 className="display-5 text">Date you recorded your Cpd</h5>
            {/* <label for="start">Start date:</label> */}

          <input type="date" className="text" id="start" value={date.date}
           placeholder= "DAY/ MONTH /YEAR" onChange={(e)=> setDate(e.target.value)}/>


             
                  </div>
         <br/> 
             <div className="time-of-learning">
            <h5 className="display-5 text">Time of recording</h5>
            {/* <label for="start">Start date:</label> */}

          <input type="time" className="text" id="start" value={time.time}
           placeholder= "hr/ Min/day" onChange={(e)=> setTime(e.target.value)}/>


             
                  </div>
                 
             </div> 
                 
                    
           {/* date of learning opportunity second jumbotron start*/}

           
         
         

              {/* Left column jumbotron second ends*/} 
                   </div>    
           
                 {/* Left column jumbotron first ends*/} 
        
                   <div class="col">
                       {/* Right column */}
                       <div class="jumbotron jumbotron-fluid">
                       

                  <h5 class="display-5 text">Describe Your learning by Uploading <br/>a photo, audio and video</h5>     
                  {/* text area starts */}
                  <textarea class="form-control form-control-lg mb-3" rows="5"></textarea>
                 
                  <button type="button" class="btn btn-outline-info btn-lg"><i class="fas fa-microphone-alt"></i>   Capture Audio</button>
                  <button type="button" class="btn btn-outline-success btn-lg"><i class="fas fa-video"></i>  Capture Video</button><br/>
                  <button type="button" class="btn btn-outline-warning btn-lg">Upload Any</button>
                       </div>
                  
               {/* </div> */}
                 
                   
                   </div>
                   <button class="btn btn-default btn-block my-4" type="submit">Submit my Reflection</button> 
          </div>
        
      </div>
      </form>
      {message ? <Message message={message}/> : null}  
        </div>
        
             
    )
}

export default Reflect
