// component to handle the functionality of the dashboard feature

import React, {useState, useEffect} from 'react' // importing react from react website
import DataTable from './DataTable';  // importing datatable component
import {Link} from 'react-router-dom'; // react library for link
import {useHistory} from 'react-router-dom'  // library for react routing
import RecordService from '../Services/RecordService'; // service that handles the API calls to the server



// function to handle the dashboard state ( recordings from the dashboard) using hooks
function Dashboard() {
    const [getData, setData] = useState([]);
    const [filter, setFilter] = useState('');
    let history = useHistory(); // call a function that routes


    //function to handle change on the input
    const onChange = (e)=> {
        setFilter(e.target.value);  //user that is inputed in the form
        
    }

    // during page load after the component has mounted this function will run to make API calls
    useEffect(()=>{
        const fetchBusinesses=()=> {
       const token = localStorage.getItem('access_token'); //get the access token in the local storage
       console.log(token)
       if(!token)
       history.push('./');  //back to the home page
        RecordService.getLearningRecords(token).then(data=> {
            console.log("records=>",data.records)
        setData(data.records)
        
        })
          }
          fetchBusinesses()  // code from How to fix missing dependency warning when using useEffect React Hook, 2021. [online]. Stackoverflow.com. Available from: https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
           //eslint-disable-next-line react-hooks/exhaustive-deps    // gotten How to fix missing dependency warning when using useEffect React Hook, 2021. [online]. Stackoverflow.com. Available from: https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
    },[])

// code by Searching/filtering a dataTable in [react] (react hooks api, react datatables, JavaScript fetch API), 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=d1r0aK5awWk [Accessed 14 Aug 2021].
    const searchTable =(rows)=> {  // to search the data table for matching rows with the letters in the input field that returns 1 if successful and -1 when unsucessful
          return rows.filter((row) => 
          row.dateOfLearning.toLowerCase().indexOf(filter)> -1 ||
          row.typeOfLearning.toLowerCase().indexOf(filter)> -1 ||
          row.title.toLowerCase().indexOf(filter)> -1) 
    }
//code  by Searching/filtering a dataTable in [react] (react hooks api, react datatables, JavaScript fetch API), 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=d1r0aK5awWk [Accessed 14 Aug 2021]
//stops here
    return (
        <>
  {/*  OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021b. Stretched link. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.0/helpers/stretched-link/ [Accessed 14 Aug 2021].*/}
        <div className="container">
        <nav class="navbar navbar-expand-md navbar-light">
       <div>
       <Link class="navbar-brand" to="/admin" id="logo">4E</Link>
       </div>
       </nav>
          <input type= "text" 
                className="form-control mb-4" 
               value={filter}
                placeholder="Search" 
                id="search" 
                onChange={onChange}/>
        </div>
        <div>
               
            <DataTable  key={getData._id} data={searchTable(getData)}/>  
          
        </div>
         {/*  OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021b. Stretched link. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.0/helpers/stretched-link/ [Accessed 14 Aug 2021].*/}
        {/* <a href="/reflections-dashboard" className="stretched-link text">See your Reflections</a>   */}
           {/* ends here */} 
        </>
    )
}

export default Dashboard
