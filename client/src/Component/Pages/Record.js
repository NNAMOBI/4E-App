import React from 'react'   // react library
import {useHistory} from 'react-router-dom'
import NavigationComponent from '../NavigationComponent';   // navigation component
import './record.css';  //css styling for this component
import {useState} from 'react'  // library for state
import RecordService from '../../Services/RecordService';  // service to authenticate the user
 import Message from '../../Component/Message';   // message we get from the server



//function to handle recording learning
function Record() {
   const [content, setContent] = useState("");  //use state to handle content field
   const [type, setType] = useState("");    //state to handle type of learning field
   const [date, setDate] = useState("");   // state to handle date picker
   const [message, setMessage] = useState(null);  //message null is not to render the message component
   let history = useHistory(); // call a function that routes
    
    

    const onSubmit=(e)=> {
      e.preventDefault();   // prevent the default of the browser
      console.log("all data=>", content, type, date);
      const token = localStorage.getItem('access_token'); // store the accesstoken in the local storage
      console.log(token)
      if(!token)
      history.push('./');  //back to the home page
      RecordService.postRecord(content, type, date, token).then(data =>{ //api to login from the backend
        console.log(data)
        const {message} = data;  // pull out the message from our data
        // resetForm();   //reset the form
        if(!message.msgError){    //if no error from the backend
          setMessage(message)    // show the success message

        }else if(message.msgBody === "UnAuthorized"){   // this means the token is expired
               setMessage(message)  //since the jwo
        }else {
            setMessage(message)
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
                  <h5 class="display-5 text">How did opportunity come about? </h5>
                    <p class="details">(tick as appropriate) </p>   
                       {/* radio button starts here */}
                       <div class="form-check">
          <input class="form-check-input" type="checkbox" value="event" 
          id="flexCheckDefault" onChange={(e)=> setType(e.target.value)}/>
          <label class="form-check-label" for="flexCheckDefault">
          Event
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="enactment"
          onChange={(e)=> setType(e.target.value)} id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
          Enactment
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="encounter"
           id="flexCheckDefault" onChange={(e)=> setType(e.target.value)}/>
          <label class="form-check-label" for="flexCheckDefault">
          Encounter
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="experience"
           id="flexCheckDefault" onChange={(e)=> setType(e.target.value)}/>
          <label class="form-check-label" for="flexCheckDefault">
          Experience
          </label>
          </div>
            
                   </div>
                    
           {/* date of learning opportunity second jumbotron start*/}

           <div class="jumbotron jumbotron-fluid">
           <div class="date-of-learn">
            <h5 class="display-5 text">Date of Learning Opportunity</h5>
            {/* <label for="start">Start date:</label> */}

          <input type="date" class="text" id="start" 
           placeholder= "DAY/ MONTH /YEAR" onChange={(e)=> setDate(e.target.value)}/>
             </div> 

                   </div>
         {/* <button class="btn btn-default btn-block my-4" type="submit">Submit my Recording</button>  */}
         

              {/* Left column jumbotron second ends*/} 
                   </div>    
       
                 {/* Left column jumbotron first ends*/} 
        
                   <div class="col">
                       {/* Right column */}
                       <div class="jumbotron jumbotron-fluid">
                       <h5 class="display-5 text">Record Your learning Opportunities</h5>
                      <p class="details">(Who, What, Where and When)</p>
                  
                  {/* text area starts */}
                  <textarea class="form-control form-control-lg mb-3" rows="5" 
                  onChange={(e)=> setContent(e.target.value)}></textarea>
                 
                  
                  <h5 class="display-5 text">Describe Your learning by Uploading <br/>a photo, audio and video</h5>     
                  {/* text area starts */}
                  <textarea class="form-control form-control-lg mb-3" rows="5"></textarea>
                 
                  <button type="button" class="btn btn-outline-info btn-lg">Capture Audio</button>
                  <button type="button" class="btn btn-outline-success btn-lg">Capture Video</button><br/>
                  <button type="button" class="btn btn-outline-warning btn-lg">Upload Any</button>
                       </div>
                       
               {/* </div> */}
                 
              
                   </div>
                   
                   <button class="btn btn-default btn-block my-4" type="submit">Submit my Recording</button> 
                  
          </div>
         
      </div>
      </form>
      {message ? <Message message={message}/> : null}  
        </div>
    )
}

export default Record
