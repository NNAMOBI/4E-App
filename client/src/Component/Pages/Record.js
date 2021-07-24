import React from 'react'
import NavigationComponent from '../NavigationComponent';
import './record.css';

function Record() {
    return (
        <div>
            <NavigationComponent />
             <div class="container">  
            <div class="row">
                   <div class="col">
                 {/* Left column jumbotron starts here*/}
                 
                  <div class="jumbotron jumbotron-fluid">
                  <h5 class="display-5 text">How did opportunity come about? </h5>
                    <p class="details">(tick as appropriate) </p>   
                       {/* radio button starts here */}
                       <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
          Event
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
          Enactment
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
          Encounter
          </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
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
           placeholder= "DAY/ MONTH /YEAR"/>
             </div> 

                   </div>
         <button class="btn btn-default btn-block my-4" type="submit">Submit my Recording</button> 
         

              {/* Left column jumbotron second ends*/} 
                   </div>    
       
                 {/* Left column jumbotron first ends*/} 
        
                   <div class="col">
                       {/* Right column */}
                       <div class="jumbotron jumbotron-fluid">
                       <h5 class="display-5 text">Record Your learning Opportunities</h5>
                      <p class="details">(Who, What, Where and When)</p>
                  
                  {/* text area starts */}
                  <textarea class="form-control form-control-lg mb-3" rows="5"></textarea>
                 

                  <h5 class="display-5 text">Describe Your learning by Uploading <br/>a photo, audio and video</h5>     
                  {/* text area starts */}
                  <textarea class="form-control form-control-lg mb-3" rows="5"></textarea>
                 
                  <button type="button" class="btn btn-outline-info btn-lg">Capture Audio</button>
                  <button type="button" class="btn btn-outline-success btn-lg">Capture Video</button><br/>
                  <button type="button" class="btn btn-outline-warning btn-lg">Upload Any</button>
                       </div>
                  
               {/* </div> */}
                 
                   
                   </div>
          </div>
        
      </div>
            
        </div>
    )
}

export default Record
