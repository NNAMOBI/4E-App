import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './reflectComp.css'



//component for postcard to display recording and reflection
function RecordPostcard(props) {
 const [file, setFile] = useState(null)
 const [fileName, setFileName] = useState('')


    const onClickHandler =(e)=> {
        e.preventDefault()
     console.log(props.record.resource)
     setFileName(props.record.resource[0])
     setFile(props.record.filePath[0])
    }

    return (
        <div>
             {/*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*/}
        <div className="card border-shadow mb-3">
             <div className="card-header">{props.record.typeOfLearning}</div>
            <div className="card-body">
                <p class="card-subtitle mb-2 center">
                    {props.record.title}    
                </p>
                     
                <Link to="/" onClick={onClickHandler} class="card-link">Resources Used</Link>
                <Link to="/" class="card-link">{props.record.dateOfLearning}</Link>
                <Link to="/" class="card-link">Audio</Link>
                <Link to="/" class="card-link">Video</Link>
                       
            </div>
     {/*gotten from bootstrap framework OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021a. Introduction. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.1/getting-started/introduction*/}        
            </div>
                  
           
             {file ? <div className="row mt-5">
             <p className="" style={{listStyle: "none"}}>{fileName}</p>  
                 <div class="col-sm-11 s-auto">
                     <img style={{width: '30%'}}src={file} alt= "document" />
                 </div>
             </div> : null}
            </div>
    )
}

            
           

export default RecordPostcard;


