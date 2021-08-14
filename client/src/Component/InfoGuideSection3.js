import React from 'react'
import recordingImg from './images/webProject3.jpg';



function InfoGuideSection3() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
           <div class="container">
           <div class="row">
                   <div class="col">
                   <h1 class="display-6">Recording your CPD</h1>
                   <p class="write-up">It is important to recognise learning opportunities that are relevant to your own
                    development – these may be planned or unplanned and can occur from formal situations or from less
                     formal and even informal situations.  The important thing is to identify learning opportunities 
                     as they present themselves, record them and then reflect on them.  It has been identified that
                      there are generally 4 triggers from which these learning opportunities emerge: 
                   </p>
     
                    {/* <div class="cpd"> */}
                   
                    {/* </div> */}
                    </div>
                   <div class="col">
                   
                   <div class="design-logo">
                   <img src={recordingImg}  class="card-img-top"  alt="recordingImage" height="430px" width="545px" />
                  </div>
                   </div>
          </div>
        
      </div>
      </div>
            
        </div>
    )
}

export default InfoGuideSection3
