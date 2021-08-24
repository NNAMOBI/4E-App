import React from 'react'
import {Link} from 'react-router-dom'





// reflect postcard
function ReflectPostCard(props) {
    //*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*//
    return (
         
        <div className="card border-shadow mb-3">
            <div className="card-header header2"><i className="fas fa-user-edit"></i></div>
            <div className="card-body">
                <p class="card-subtitle mb-2 center"> 
                
                {props.reflection.content}
                </p>
          
            <Link to="/" class="card-link">{props.reflection.recordingDate}</Link>
            <Link to="/" class="card-link">Audio</Link>
                <Link to="/" class="card-link">Video</Link>
        </div>
            
        </div>
    )
}

export default ReflectPostCard
