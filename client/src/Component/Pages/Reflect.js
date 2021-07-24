import React from 'react'
// import {Link} from 'react-router-dom';
import NavigationComponent from '../NavigationComponent';
import './reflect.css';

function Reflect() {
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
                       <textarea class="form-control form-control-lg mb-3" rows="5"></textarea>
                 
                       <button class="btn btn-default btn-block my-4" type="submit" id="btn-reflect">Submit my Reflection</button> 
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
                 
                  <button type="button" class="btn btn-outline-info btn-lg">Capture Audio</button>
                  <button type="button" class="btn btn-outline-success btn-lg">Capture Video</button><br/>
                  <button type="button" class="btn btn-outline-warning btn-lg">Upload Any</button>
                       </div>
                  
               {/* </div> */}
                 
                   
                   </div>
                   {/* <button class="btn btn-default btn-block my-4" type="submit">Submit my Reflection</button>  */}
          </div>
        
      </div>
            
        </div>
        
             
    )
}

export default Reflect
