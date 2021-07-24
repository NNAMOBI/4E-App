import React from 'react';
import './triggerComp.css';




function TriggerSection() {
    return (
           
             <div class="container">  
             <div class="row">
                   <div class="col">
                 {/* Event column starts here*/}
                  <h5 class="display-5 text" id="down">Event</h5>
                    <p class="details" >An event can trigger a learning opportunity through your 
                    participation in training sessions (typically classroom-based learning activities)
                     or professional development events, and personal / private studies </p>   
                       {/* radio button starts here */}
                       
            
                   </div>
                   <div class="col">  
                   {/* Enactment column starts here*/}
                    <h5 class="display-5 text" id="move-down">Enactment</h5>
                      <p class="details">An enactment can trigger a learning opportunity through your performing tasks 
                      in the course of your professional practice or indeed through your day to day life including 
                      social and recreational activities. These are all potential opportunities for learning.</p>     
                   </div>
                   <div class="col">  
                   {/* Encounters column starts here*/}
                    <h5 class="display-5 text" id="down">Encounter</h5>
                      <p class="details" id="move-down">An encounter can trigger a learning opportunity  such as a networking 
                      activity, whether organised and scheduled professional networking events, or more ad hoc meetings 
                      or discussions with individuals or groups of individuals. These encounters can also come through
                       your personal and social activities as well as profession related. </p>     
                   </div>
                   <div class="col">  
                   {/* Experience column starts here*/}
                     <h5 class="display-5 text" id="move-down">Experience</h5>
                      <p class="details" >An experience can trigger a learning opportunity and the 
                      experience – which can be positive or negative- can occur during enactment of 
                      your professional  entrepreneurial process, including things that go wrong, 
                      mistakes made, or opportunities that arise as well as similar situations which 
                      arise in the course of your day to day and social activities. </p>     
                   </div>
          </div>
        
      </div>
            
        
    )
}

export default TriggerSection
