import React from 'react'
import './questionSection.css';





function InfoGuideQuestionSection() {
    return (
        
            <div class="container">
                
            <div class="row" id="horizontal">
            <h5 class="title-question">To record the learning opportunity effectively you 
                should ask yourself the following questions:</h5>
               <div class="col">
                 <div class="form-check">
                 <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked />
                 <label class="form-check-label" for="flexRadioDefault2">
                    Who was involved/ affected in the learning opportunity?
                 </label>
                </div>
                <div class="form-check">
                 <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked />
                 <label class="form-check-label" for="flexRadioDefault2">
                    What happened and how did it come about?
                 </label>
                </div>
             
               
                
                </div>
               <div class="col">
               <div class="form-check">
                 <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked />
                 <label class="form-check-label" for="flexRadioDefault2">
                    What is the problem/question/issue to be explored?
                 </label>
                </div>
                <div class="form-check">
                 <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                 <label class="form-check-label" for="flexRadioDefault2">
                    Where did the opportunity occur? when did it occur?
                 </label>
                </div>
            
               </div>
      </div>
         
      </div>
    )
}

export default InfoGuideQuestionSection
