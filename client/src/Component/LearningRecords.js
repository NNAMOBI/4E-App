//component to fetch the learning records
import React, {useState, useEffect} from 'react';  //import react libraries
import {useHistory} from 'react-router-dom'  // library for react routing
// import RecordItem  from '../Component/RecordItemCom';
// import ReflectItem from '../Component/ReflectItemCom';
import RecordService from '../Services/RecordService';
import RecordPostcard from './RecordPostcard';
import ReflectPostcard from './ReflectPostCard';
import Sidebar from  './Sidebar';



// function to get all the learning records
function LearningRecords() {
    const[records, setRecords] = useState([]);  // initiate the state using hooks
    const[reflections, setReflections] = useState([]);  // initiate the state using hooks
    let history = useHistory(); // call a function that routes


    // a componentDidMount method
    useEffect(()=>{
        const fetchBusinesses=()=> {
       const token = localStorage.getItem('access_token'); // get the accesstoken in the local storage
       console.log(token)
       if(!token)
       history.push('./');  //back to the home page
        RecordService.getLearningRecords(token).then(data=> {
            console.log("records=>",data.records)
        setRecords(data.records)
        setReflections(data.reflections)
        })
          }
          fetchBusinesses()  
           //eslint-disable-next-line react-hooks/exhaustive-deps  
    },[])


    return (
        <div className="outer-container">
            <Sidebar />

        <div className="jumbotron jumbotron-fluid" id="parent-jumbotron">
            <div class="container">
                <div class="row">
                         <div class="col">
        
            <h2 className="text">CPD Recordings</h2>
            <ul className="list-group">         
                   {
                    records.map(record => {
                        console.log("record=>",record)
                        return <RecordPostcard  key={record._id} record={record} />  //recordings
                    })
                  }
                
            </ul>
                       </div>
             
                    <div class="col">
             
                      <h2 className="text">Reflections</h2>
                         <ul className="list-group">          
                     {
                      reflections.map(reflection => {
                        console.log("record=>",reflection)
                        return <ReflectPostcard key={reflection._id} reflection={reflection} /> //reflections
                    })
                    }
                 
                        </ul>
           
                    </div>
        </div>
                
        </div>
            </div>
            </div>
           
    )
}


export default LearningRecords;
