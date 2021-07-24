import React from 'react';
import './triggerComp.css';
import event_cpd from './images/event_cpd.png';
import enactment_cpd from './images/Enactment_cpd.png';
import encounter_cpd from './images/Encounter_cpd.png';
import experience_cpd from './images/experience_cpd.png';



export default function TriggerComp() {
    return (
        <div>   {/* main div*/}
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card event">
      <img src={event_cpd}  class="card-img-top"  alt="" />
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        <p class="card-text"> Event</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card enactment">
      <img src={enactment_cpd} class="card-img-top" alt=""/>
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        <p class="card-text"> Enactment</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card encounter">
      <img src={encounter_cpd} class="card-img-top" alt="" />
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        <p class="card-text"> Encounter</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card experience">
      <img src={experience_cpd} class="card-img-top" alt="" width="" height="81.27px"/>
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        <p class="card-text">Experience</p>
      </div>
    </div>
     {/* div for record section */}
  
  </div>
  
</div>
{/* record section */}
  <div class="card-title">
  <h5 class="text record">Record</h5>
  <h6 class="text questions">Who?, what?, Where? and When? </h6>
  </div> 
 </div>   //main div ends here
    )
}


