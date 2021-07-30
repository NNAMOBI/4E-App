import React from 'react';
import './triggerComp.css';
import event_cpd from './images/event_cpd.png';
import enactment_cpd from './images/Enactment_cpd.png';
import encounter_cpd from './images/Encounter_cpd.png';
import experience_cpd from './images/experience_cpd.png';



export default function TriggerComp() {
    return (
        <div>   {/* main div*/}
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card event">
      <img src={event_cpd}  className="card-img-top"  alt="" />
      <div className="card-body">
       
        <p className="card-text"> Event</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card enactment">
      <img src={enactment_cpd} className="card-img-top" alt=""/>
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text"> Enactment</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card encounter">
      <img src={encounter_cpd} className="card-img-top" alt="" />
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text"> Encounter</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card experience">
      <img src={experience_cpd} className="card-img-top" alt="eventImage" width="" height="87.27px"/>
      <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">Experience</p>
      </div>
    </div>
     {/* div for record section */}
  
  </div>
  
</div>
{/* record section */}
  <div className="card-title footer-record-reflect">
  <h5 className="text record">Record</h5>
  <h6 className="text questions">Who?, what?, Where? and When? </h6>
  </div> 
 </div>   //main div ends here
    )
}


