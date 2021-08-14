//page to handle portfolio
import React, {useState} from 'react' // import react library
import './portfolio.css';  //import css




// portfolio component
function PortfolioComponent() {
  const [image, setImage] = useState(null);   //state for the image
  const [isError, setError] = useState(false);  //state for the error if file is not supported

  const imageChangeHandler =(e)=> {
      const isSelected = e.target.files[0];   // target the file selected
      const TYPES_TO_ALLOW = ["image/png", "image/jpeg", 'image/jpg'];
      if(isSelected && TYPES_TO_ALLOW.includes(isSelected.type) )
      {
          let reader = new FileReader();   //read file from input
          reader.onloadend =()=> { //Custom image preview react, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=wiRtugNSVjU [Accessed 14 Aug 2021].
              setImage(isSelected)   //update the image to the one selected
          }
          reader.readAsDataURL(isSelected); //Custom image preview react, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=wiRtugNSVjU [Accessed 14 Aug 2021].

      }else {
          setError(true) //Custom image preview react, 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=wiRtugNSVjU [Accessed 14 Aug 2021].
      }
  }
    
    return (
        <>
        {/*OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021c. Forms. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/4.6/components/forms/ [Accessed 14 Aug 2021]. */}             
        <div className="jumbotron jumbotron-fluid" id="parent-jumbotron">
          
          <div class="container-fluid">  
                    <div class="row">
                        <div class="col-md-7">
                         <h5 className="profile">Profile Picture</h5>
{/* Placeholder.Com – the free image placeholder service favoured by designers, 2021. [online]. Placeholder.com. Available from: https://placeholder.com/ [Accessed 14 Aug 2021]. */}
             {image ?  <div class="col-sm-11 s-auto">
                <img src={image} alt= "image"  width="10px" height="10px"/>
            </div>: <div>
            <img src="https://via.placeholder.com/150" alt="image-user" />
                <input type="file" onChange={imageChangeHandler}/>
                </div>   
             }
                        
                {isError && <p className="errorMsg">File not supported</p>}
                         <h5 className="text">Nnamdi</h5>


{/*OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021c. Forms. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/4.6/components/forms/ [Accessed 14 Aug 2021]. */}             
 <a className="btn btn-primary btn-sm" href="/" role="button">Facebook</a>
 <a className="btn btn-success btn-sm" href="/" role="button">github</a>
 <a className="btn btn-danger btn-sm" href="/" role="button">Instagram</a>
 <a className="btn btn-primary btn-sm" href="/" role="button">Twitter</a>

{/*OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021c. Forms. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/4.6/components/forms/ [Accessed 14 Aug 2021]. */}
                   <form>
                    <div class="form-row">
                 <div class="col-4">
                 <label>Name:</label>
                <input type="text" className="form-control" placeholder="Your name"/>
                </div>
                   <div class="col-4">
                   <label>email:</label>
                  <input type="email" class="form-control" placeholder="@email"/>
                   </div>
                    <div class="col">
                    <label>username:</label>
                  <input type="username" class="form-control" placeholder="username"/>
                   </div>
                    </div>
                </form>
                        </div>
                        <div class="col-md-5">
                {/*MUELLER, T., 2011. Lorem Ipsum. Barking, England: Lulu.com */}
                         <p className="lead">Lorem Ipsum is simply dummy text of the printing and 
                         typesetting industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                          it to make a type specimen book. It has survived not only five centuries, 
                          but also the leap into electronic typesetting, remaining essentially unchanged.
                           It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                            Ipsum passages, and more recently with desktop publishing software like Aldus 
                         PageMaker including versions of Lorem Ipsum.</p>
               {/*MUELLER, T., 2011. Lorem Ipsum. Barking, England: Lulu.com */}
                        </div>
                   </div>
           </div>
</div>
            
        </>
    )
}

export default PortfolioComponent
