//Component to render the learning records in a list

import React from 'react'



function RecordItemCom(props) {
    return (
        
        <div>
            <li><span><label>Title:</label> </span>{props.record.title}</li>
            <li><span><label>Date:</label> </span>{props.record.dateOfLearning}</li>
            <li><span><label>Trigger:</label> </span>{props.record.typeOfLearning}</li>

        </div>
       
      
    )
}

export default RecordItemCom
