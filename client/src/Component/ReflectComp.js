import React from 'react'
import Reflect_cpd from './images/webProject2.jpg';




function ReflectComp() {
    return (
        
              <div>   {/* main div*/}
               {/*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*/}
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="">
      <img src={Reflect_cpd} class="card-img-top" alt="eventImage" />
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
      </div>
    </div>
     {/* div for record section */}
  
  </div>
  
</div>
{/* record section */}
  <div class="card-title footer-record-reflect">
  <h5 class="text record">Reflect</h5>
  <h6 class="text questions">Why?, So when?, and What next? </h6>
  </div> 
   {/*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*/}
 </div>   //main div ends here
    )
        
    
}

export default ReflectComp
