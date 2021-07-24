import React from 'react'
import './jumbotronCom.css';
import CarouselDesignComp from './CarouselDesignComp';
import designLogo from './images/logo.png';




function JumbotronSectComp() {
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
                   <h1 class="display-6">Continuous Professional Development</h1>
                   <p class="lead">Recording and Reflecting different forms of learning in any environment.
                   </p>
                   <CarouselDesignComp />
                   </div>
          </div>
        
      </div>
      </div>
            
        </div>
    )
}

export default JumbotronSectComp
