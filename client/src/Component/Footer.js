import React from 'react'
import './footer.css';



function Footer() {
    return (
       
            <div>
               {/*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*/}
          <footer class="page-footer font-small indigo">

          <div class="container text-left">
          <div class="row">

          <div class="col-sm-2 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">4E</h5>

              </div>
              <hr class="clearfix w-100 d-md-none"/>

              {/* END OF THE FIRST LIST */}

              <div class="col-sm-2 mx-auto">
          <h5 class="font-weight-bold mt-3 mb-4">Product</h5>

          <ul class="list-unstyled">
          <li>
            <a href="#!">Features</a>
          </li>
          
        </ul>

              </div>
              <hr class="clearfix w-100 d-md-none"/>
              {/* END OF THE SECOND ONE */}


              <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold mt-3 mb-4">About4E</h5>

          <ul class="list-unstyled">
          <li>
            <a href="#!">What is 4E</a>
          </li>
          
        </ul>

              </div>
              <hr class="clearfix w-100 d-md-none"/>
              {/* END OF THE THIRD ONE */}


              <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold mt-3 mb-4">Resources</h5>

          <ul class="list-unstyled">
          <li>
            <a href="#!">FAQ'S</a>
          </li>
          <li>
            <a href="#!">Help</a>
          </li>
          
        </ul>

              </div>
              <hr class="clearfix w-100 d-md-none"/>
              {/* END OF THE FOURTH ONE */}


              <div class="col-sm-2 mx-auto">
          <h5 class="font-weight-bold  mt-3 mb-4">Contact</h5>

          <ul class="list-unstyled">
          <li>
            <a href="#!">Email Address</a>
          </li>
          <li>
            <a href="#!">Phone Number</a>
          </li>
         
        </ul>

              </div>
              <hr class="clearfix w-100 d-md-none"/>
              {/* END OF THE FIFTH ONE */}
          </div>    

        </div>
          </footer>
    {/*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*/}
            </div>
            
       
    )
}

export default Footer;
