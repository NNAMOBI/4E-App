//component to fetch the learning records
import React, {useState, useContext, useEffect} from 'react';  //import react libraries
import {AuthContext} from '../ContextApi/AuthContext';



// function to get all the learning records
function LearningRecords() {

    const[records, setRecords] = useState([]);
    const [message, setMessage] = useState(null)
    const authContext = useContext(AuthContext)


    // a componentDidMount method
    useEffect =(()=> {
        RecordService.getLearningRecords().then(data=> {
            setRecords(data.records)
        })
    }, [])


    return (
        <div>
            <ul className="list-group">   
                {
                    records.map(record => {
                        return <RecordItem key={record._id} record={record} />
                    })
                }
            </ul>
        </div>
    )
}

export default LearningRecords
