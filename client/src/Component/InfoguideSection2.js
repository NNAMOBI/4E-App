import React from 'react'
import designLogo from './images/logo.png';
import './infoGuideSection.css';


function InfoguideSection2() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
           <div class="container">
           <div class="row">
                   <div class="col">

     <div class="design-logo">
     <img src={designLogo}  class="card-img-top"  alt="cpd-model" />
     </div>
                    {/* <div class="cpd"> */}
                   
                    {/* </div> */}
                    </div>
                   <div class="col">
                   <p class="write-up">The logo for this App incorporates the CPD process:</p>
                   <p class="write-up"><span>Recognise</span> – the CPD process starts with you being able to recognise Learning 
                   Opportunities so that you can undertake your CPD process. Selection of learning opportunities
                    is vital if true learning is going to take place, the opportunities must be 
                    relevant and appropriate to you and align with your development needs.</p>

                    <p class="write-up"><span>Record these learning opportunities</span> – 
                    record your selected learning opportunities the process is outlined in the next 
                    section</p>   

                    <p class="write-up"><span>Reflect on these learning opportunities</span> – reflect on 
                    your selected learning opportunities so that you learn from them, the process is
                     outlined in the next section. It is in this stage that the true, deep learning 
                     takes place.</p>  

                     <p class="write-up"><span>Review</span>  - as part of your reflection decide how the 
                     learning will impact on your practice and professional life.</p> 
											
                     <p class="write-up"><span>How often should you record and reflect on learning and on how many 
                     opportunities is very personal to you?</span></p> 
                     <p class="write-up">Some professionals set aside time every week or month  but 
                     you need to find what works for you.  The learning opportunities must be relevant 
                     to you and your practice and your own development needs.  The fact that the App is
                      so accessible, we hope will encourage you to participate in CPD and that it will
                       not seem a chore, in fact it will become a part of your professional practice. </p> 

                   
                  
                   </div>
          </div>
        
      </div>
      </div>
            
        </div>
    )
}

export default InfoguideSection2
