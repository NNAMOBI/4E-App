//component to fetch the learning records
import React, {useState, useEffect} from 'react';  //import react libraries
import {useHistory, Link} from 'react-router-dom'  // library for react routing
import RecordService from '../Services/RecordService';
import RecordPostcard from './RecordPostcard';
import ReflectPostcard from './ReflectPostCard';
import {
    CDBSidebar,    // library for sidebar  gotten from npm: cdbreact, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/cdbreact
    CDBSidebarContent, // library for the content gotten from npm: cdbreact, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/cdbreact
    CDBSidebarFooter,   // the footer of the sidebar
    CDBSidebarHeader,  // the header of the sidebar
    CDBSidebarMenuItem,  // the menu of the sidebar
    CDBSidebarMenu       //  
}  from 'cdbreact'; // npm: cdbreact, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/cdbreact
import './sidebar.css'   //css for this component




// function to get all the learning and reflection records
function LearningRecords() {
    const[records, setRecords] = useState([]);  // initiate the state using hooks
    const[reflections, setReflections] = useState([]);  // initiate the state using hooks
    let history = useHistory(); // call a function that routes


    // a componentDidMount method
    useEffect(()=>{
        const fetchBusinesses=()=> {
       const token = localStorage.getItem('access_token'); //get the access token in the local storage
       console.log(token)
       if(!token)
       history.push('./');  //back to the home page
        RecordService.getLearningRecords(token).then(data=> {
            console.log("records=>",data.records)
        setRecords(data.records)
        setReflections(data.reflections)
        })
          }
          fetchBusinesses()  // code from How to fix missing dependency warning when using useEffect React Hook, 2021. [online]. Stackoverflow.com. Available from: https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
          //eslint-disable-next-line react-hooks/exhaustive-deps    // gotten How to fix missing dependency warning when using useEffect React Hook, 2021. [online]. Stackoverflow.com. Available from: https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
            
    },[])


    return (
      //code from Sidebar Component for react bootstrap, 2021. [online]. Devwares.com. Available from: https://www.devwares.com/docs/contrast/react/navigation/sidebar
        <div className="outer-container">
           <div className="side-bar">
    <h4>Your CPD portfolio</h4>
        <CDBSidebar textColor="#fff" backgroundColor="#350564" className="contain-sidebar">
        
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                 <Link to="/" className="text-decoration-none dash-style">
                  4E
                 </Link>

              </CDBSidebarHeader>

                 <CDBSidebarContent className="sidebar-content" >
                    <CDBSidebarMenu>
                     <Link to="/dashboard" activeClassName="activeClicked">
                       <CDBSidebarMenuItem icon="th-large">
                           Dashboard
                       </CDBSidebarMenuItem>
                     </Link>
                     <Link to="/postcard" activeClassName="activeClicked">
                       <CDBSidebarMenuItem><i class="fas fa-chalkboard-teacher"></i>
                       <span style={{marginLeft: "10px"}}>Postcard</span>
                       </CDBSidebarMenuItem>
                     </Link>
                     <Link to=""  activeClassName="activeClicked">
                       <CDBSidebarMenuItem><i class="fas fa-upload"></i>
                       <span style={{marginLeft: "10px"}}> Upload</span>
                       </CDBSidebarMenuItem>
                     </Link>
                     <Link to=""  activeClassName="activeClicked">
                       <CDBSidebarMenuItem><i class="fas fa-cog"></i>
                         <span style={{marginLeft: "10px"}}>Settings</span>
                       
                       </CDBSidebarMenuItem>
                     </Link>

                    </CDBSidebarMenu>

                </CDBSidebarContent>

                <CDBSidebarFooter className="footer">
               <div className="footer-style" style={{marginRight: "100px"}}><i class="fas fa-sign-out-alt"></i>
                  Log Out
               </div>
              

                </CDBSidebarFooter>
         
     </CDBSidebar>
     {/*code from Sidebar Component for react bootstrap, 2021. [online]. Devwares.com. Available from: https://www.devwares.com/docs/contrast/react/navigation/sidebar */}
     </div>  

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
                        console.log("reflect=>",reflection._id)
                        return <ReflectPostcard key={reflection._id} reflection={reflection[0]} /> //reflections
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
