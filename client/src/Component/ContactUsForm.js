import React from 'react' // import from react
import './contactUsForm.css'; 



function ContactUsForm() {
    return (
        //gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction
        <div class="container">
    <div class="row justify-content-center mt-7">
        <div class="col-md-7">
        <div class="col">
                   <h1 class="display-6 center-text">Get in touch with us today</h1>
                   <p class="lead">For Enquiries and more please endeavor to send us a message and we would get back to you
                                    as soon as possible.
                   </p>
               </div>
            <form class="text-center p-5" action="#!">
            
               <label for="surname" class="col-sm-4 control-label">Name</label>
                <input type="text" class="form-control mb-4" name="username"/>

                <label for="surname" class="col-sm-4 control-label">Email</label>
                <input type="password" class="form-control mb-4" name="email-address" />
                
                    
                      {/* <div class="d-flex justify-content-around"> */}
                      <label for="surname" class="col-sm-4 control-label">Message</label>                     
                      <textarea class="form-control mb-4" id="exampleFormControlTextarea1" >

                     </textarea>
                     {/* </div> */}
             
               
                <button class="btn btn-default btn-block my-4" type="submit">Send Messsage</button>
            {/*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*/}
                {/* <p>Not a member?
                    <a href="/">Send Messsage</a>
                </p> */}
            </form>

        </div>
    </div>
</div>

    )
}

export default ContactUsForm;

