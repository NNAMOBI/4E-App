import React from 'react'   // react library
import {useHistory} from 'react-router-dom'  // library for react routing
import NavigationComponent from '../NavigationComponent';   // navigation component
import './record.css';  //css styling for this component
import {useState} from 'react'  // library for state
import RecordService from '../../Services/RecordService';  // service to authenticate the user
 import Message from '../../Component/Message';   // message we get from the server



//function to handle recording learning
function Record() {
   const [content, setContent] = useState({content: ""});  //use state to handle content field
   const [type, setType] = useState("");    //state to handle type of learning field
   const [date, setDate] = useState({date: ""});   // state to handle date picker
   const [message, setMessage] = useState(null);  //message null is not to render the message component
   const [file, setFile]  = useState('');
  //  const [uploadedFile, setUploadedFile] = useState({});  //what we are sending back from the upload endpoint
   let history = useHistory(); // call a function that routes
    
    
   const onChangeHandler=(e)=> {   // handler function to handle change on the file field
     setFile(e.target.files[0])

   }
   

    const onSubmit = async(e)=> {   // submit handler to handle form submit
      e.preventDefault();   // prevent the default of the browser
      console.log("all data=>", content, type, date);
      try{
      const token = localStorage.getItem('access_token'); // store the accesstoken in the local storage
      console.log(token)
      if(!token)
      history.push('./');  //back to the home page
      const formData = new FormData();   // initialise the form Class
      formData.append('file', file)   // add file to the form to be submmitted to the backend
      const res = await RecordService.postFile(formData)   // data to be returned
      const {fileName, filePath} = res.data;  //Destructuring the data from the server
      console.log("res.data=> ", fileName, filePath)
      // setUploadedFile({fileName, filePath}) // setting the new state
      RecordService.postRecord(content, type, date, token, fileName, filePath).then(data =>{ //api to login from the backend
      console.log(data)
      const {message} = data;  // pull out the message from our data
      if(!message.msgError){    //if no error from the backend
       setMessage(message)    // show the success message

     }else if(message.msgBody === "UnAuthorized"){   // this means the token is expired
              setMessage(message)  //since the jwo
        }else {
           setMessage(message)
       }
       })
      }catch(err){
        if(err)
        console.log(err.message)
      }
      
    }

    return (
        <div>
            <NavigationComponent />
            <form onSubmit={onSubmit}>
             <div className="container"> 
             
            <div className="row">
            
                   <div className="col">
                 {/* Left column jumbotron starts here*/}
                
                  <div className="jumbotron jumbotron-fluid">
                  <h5 className="display-5 text">How did opportunity come about? </h5>
                    <p className="details">(tick as appropriate) </p>   
                       {/* radio button starts here */}
                       <div className="form-check">
          <input className="form-check-input" type="checkbox" value="event" 
          id="flexCheckDefault" onChange={(e)=> setType(e.target.value)}/>
          <label className="form-check-label" for="flexCheckDefault">
          Event
          </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="enactment"
          onChange={(e)=> setType(e.target.value)} id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
          Enactment
          </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="encounter"
           id="flexCheckDefault" onChange={(e)=> setType(e.target.value)}/>
          <label className="form-check-label" for="flexCheckDefault">
          Encounter
          </label>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="experience"
           id="flexCheckNameDefault" onChange={(e)=> setType(e.target.value)}/>
          <label class="form-check-label" for="flexCheckDefault">
          Experience
          </label>
          </div>
            
                   </div>
                    
           {/* date of learning opportunity second jumbotron start*/}

           <div className="jumbotron jumbotron-fluid">
           <div className="Namedate-of-learn">
            <h5 className="display-5 text">Date of Learning Opportunity</h5>
            {/* <label for="start">Start date:</label> */}

          <input type="date" className="text" id="start" value={date.date}
           placeholder= "DAY/ MONTH /YEAR" onChange={(e)=> setDate(e.target.value)}/>
             </div> 

                   </div>
         {/* <button class="btn btn-default btn-block my-4" type="submit">Submit my Recording</button>  */}
         

              {/* Left column jumbotron second ends*/} 
                   </div>    
       
                 {/* Left column jumbotron first ends*/} 
        
                   <div class="col">
                       {/* Right column */}
                       <div className="jumbotron jumbotron-fluid">
                       <h5 className="display-5 text">Record Your learning Opportunities</h5>
                      <p className="details">(Who, What, Where and When)</p>
                  
                  {/* text area starts */}
                  <textarea className="form-control form-control-lg mb-3"  value= {content.content} rows="5" 
                  onChange={(e)=> setContent(e.target.value)}></textarea>
                 
                  
                  <h5 class="display-5 text">Describe Your learning by Uploading <br/>a photo, audio and video</h5>     
                  {/* text area starts */}
                  
                  <textarea class="form-control form-control-lg mb-3" rows="5"></textarea>
                  
                  
                  <button type="button" className="btn btn-outline-info btn-lg">Capture Audio</button>
                  <button type="button" className="btn btn-outline-success btn-lg">Capture Video</button><br/>
                  <input type= "file" className="center" 
                  style={{marginLeft: "40px", marginTop: "10px", fontFamily: 'sans-serif',
                   fontSize: "14px", backgroundColor: "#350564", color: "white"}} 
                  id="customFile" rows="5" onChange={onChangeHandler}/> <br/>
                  <button type="submit" value="Upload" className="btn btn-outline-warning btn-lg">Upload Any</button>
                       </div>
                       
               {/* </div> */}
                 
              
                   </div>
                   
                   <button className="btn btn-default btn-block my-4" type="submit">Submit my Recording</button> 
                  
          </div>
         
      </div>
      </form>
      {message ? <Message message={message}/> : null}  
        </div>
    )
}

export default Record
