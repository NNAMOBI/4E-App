//Component to render the learning records in a list

import React from 'react'



function RecordItemCom(props) {
    return (
        <div>
            <li>{props.records}</li>
        </div>
    )
}

export default RecordItemCom
