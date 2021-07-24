import React from 'react'
import NavigationComponent from '../NavigationComponent'
import './infoguide.css';
import Footer from '../Footer';
import InfoguideSection2 from '../InfoguideSection2';
// import designLogo from '../images/logo.png';
import InfoGuidAppSection from '../InfoGuidAppSection';
import InfoGuideSection3 from '../InfoGuideSection3';
import TriggerSection from '../TriggerSection';
import InfoGuidSection4 from '../InfoGuidSection4';
import InfoGuideQuestionSection from '../InfoGuideQuestionSection';

function InfoGuide() {
    return (
        <div>
            
            <NavigationComponent />
            <div class="jumbotron jumbotron-fluid">         
            <h1 class="question">What is CPD?</h1>
            <p class="define">CPD stands for Continuing Professional Development.  It is about learning and development and it should be a personal commitment of yours – to keep your professional knowledge up to date and improve your capabilities throughout your working life.  
      It is not just about technical skills – it also needs to include knowledge, skills, attitudes, characteristics, behaviours and morals.  There is a clear link between CPD and enhanced competence so it is an important element of every professional’s life.
      We live in an ever changing occupational world hence keeping your knowledge, skills etc up to date is of huge importance throughout your whole working life.  In the past, learning often occurred only in  formal, scheduled situations such as training and academic courses.  While these are still relevant and valuable, 
      professionals are expected to look to other, additional sources from which they can learn and continue to develop knowledge and skills etc.  Professionals are also expected to keep a record of their ongoing development. 
                   </p>
                   
                         
              </div>
      <InfoGuidAppSection />   
      
      {/* <div>
      
      </div> */}
      <InfoguideSection2 />
      <InfoGuideSection3 />
      <TriggerSection />
      <InfoGuideQuestionSection />
      <InfoGuidSection4 />
      <Footer />
   </div>
    )
}

export default InfoGuide
