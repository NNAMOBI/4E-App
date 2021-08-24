import React from 'react'  // import react library

// import all images
import BigCrit from './images/BigCrit.jpg';
import dart from './images/dart.jpg';
import rguDegreeLink from './images/rguDegreeLink.jpg';
import WebProject1 from './images/WebProject1.jpg';
import WebProject2 from './images/webProject2.jpg';
import WebProject3 from './images/webProject3.jpg';
import WebProject4 from './images/webProject4.jpg';
import rguStudent from './images/rguStudent.jpg';
import rguMasterClass from './images/rguMasterClass.jpg';



function CarouselDesignComp() {
    return (
      //gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={BigCrit} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={dart} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={rguDegreeLink} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={WebProject1} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={WebProject2} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={WebProject3} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={WebProject4} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={rguStudent} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={rguMasterClass} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
        </div>
    )
}

export default CarouselDesignComp
