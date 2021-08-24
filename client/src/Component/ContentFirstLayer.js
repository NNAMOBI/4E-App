import React from 'react';  // import from react
import './contentFirstLayer.css';
import ReflectComp from './ReflectComp';
import TriggerComp from './TriggerComp';




export default function ContentFirstLayer() {
    return (
 <div class="container">
       
     <div class="row">
 {/* <! — first nested column → */}
 <div className="col-sm left-content">
 <h3 className="display-4 cpd-here">Document your CPD here</h3>
 <p className="click-below">
 Your CPD can be archived using the  <br />repository tool.  Click below to learn  
 </p>
 <a href="/leanrn more" className="btn btn-default">Learn More</a>
  
     
 </div>
 
 {/* <h3 className="display-4">Learn Web Development The Right Way</h3> */}
 {/* <! — second nested column → */}
 {/* <div class="col-md"> */}

 {/* <div class="cover"> */}
    <div class="col-sm">
    <h3 class="display-2">
        <TriggerComp />
    </h3>
    </div>

    <div class="col-sm">
    <h3 class="display-2">
        <ReflectComp />
    </h3>
    </div>

 </div>
 </div>
  
 
    )
}




