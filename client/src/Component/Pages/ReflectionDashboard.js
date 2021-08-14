//component to handle the reflections datatable on dashboard for the user

import React, {useState, useEffect} from 'react' // importing react from react website
import ReflectionDataTable from '../../Component/ReflectionDataTable';  // importing datatable component
import {Link} from 'react-router-dom'; 
import {useHistory} from 'react-router-dom'  // library for react routing
import ReflectService from '../../Services/ReflectingService'; // service that handles the API calls to the server



function ReflectionDashboard() {
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
       ReflectService.getMyReflections(token).then(data=> {
            console.log("reflections=>",data.reflections)
        setData(data.reflections)
        
        })
          }
          fetchBusinesses()  
           //eslint-disable-next-line react-hooks/exhaustive-deps  
    },[])


//code  by Searching/filtering a dataTable in [react] (react hooks api, react datatables, JavaScript fetch API), 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=d1r0aK5awWk [Accessed 14 Aug 2021]
//stops here
    return (
        <>

        <div className="container">
        <nav class="navbar navbar-expand-md navbar-light">
       
       <Link class="navbar-brand" to="/" id="logo">4E</Link>
       
       </nav>
          <input type= "text" 
                className="form-control mb-4" 
               value={filter}
                placeholder="Search" 
                id="search" 
                onChange={onChange}/>
        </div>
        <div>
        {
                    getData.map(data => {
                        
                        return <ReflectionDataTable key={data._id}  data={data}/>    //recordings
                    })
                  } 
          
        </div>
         {/*  OTTO, M., THORNTON, J. and BOOTSTRAP CONTRIBUTORS, 2021b. Stretched link. [online]. Getbootstrap.com. Available from: https://getbootstrap.com/docs/5.0/helpers/stretched-link/ [Accessed 14 Aug 2021].*/}
        <Link to="/dashboard" className="stretched-link text">See your Recordings</Link>  
           {/* ends here */} 
        </>
    )
}


export default ReflectionDashboard;
