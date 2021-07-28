//component to fetch the learning records
import React, {useState, useEffect} from 'react';  //import react libraries
import {useHistory} from 'react-router-dom'  // library for react routing
import RecordItem  from '../Component/RecordItemCom';
import ReflectItem from '../Component/ReflectItemCom';
import RecordService from '../Services/RecordService';




// function to get all the learning records
function LearningRecords() {
    const[records, setRecords] = useState([]);  // initiate the state using hooks
    const[reflections, setReflections] = useState([]);  // initiate the state using hooks
    let history = useHistory(); // call a function that routes


    // a componentDidMount method
    useEffect(()=>{
        const fetchBusinesses=()=> {
        console.log(" i am in the useEffect")
       const token = localStorage.getItem('access_token'); // get the accesstoken in the local storage
       console.log(token)
       if(!token)
       history.push('./');  //back to the home page
        RecordService.getLearningRecords(token).then(data=> {
            console.log("data=>" ,data.reflections)
        setRecords(data.records)
        setReflections(data.reflections)
        })
          }
          fetchBusinesses()  
           //eslint-disable-next-line react-hooks/exhaustive-deps  
    },[])


    return (
        <div>
        <div className=" text-center" style={{margin: "6% auto"}}>
            <h2>Learning Records</h2>
            <ul className="list-group"> 
              
                {
                    records.map(record => {
                        console.log("record=>",record)
                        return <RecordItem key={record._id} record={record} />
                    })
                }
                
            </ul>
            </div>
            <div className=" text-center" style={{margin: "6% auto"}}>
            <h2>Reflection Records</h2>
            <ul className="list-group"> 
              
                {
                    reflections.map(reflection => {
                        console.log("record=>",reflection)
                        return <ReflectItem key={reflection._id} reflection={reflection} />
                    })
                }
                
            </ul>
           
        </div>
        </div>
    )
}

export default LearningRecords
