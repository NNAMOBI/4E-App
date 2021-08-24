// This is the component that handles the admin page only for admin users

import React from 'react'
import {Link} from 'react-router-dom'  // for routing

//npm: cdbreact, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/cdbreact
import {
    CDBSidebar,    // for sidebar
    CDBSidebarContent, // for the content
    CDBSidebarFooter,   // the footer of the sidebar
    CDBSidebarHeader,  // the header of the sidebar
    CDBSidebarMenuItem,  // the menu of the sidebar
    CDBSidebarMenu       //  
}  from 'cdbreact';

//npm: cdbreact, 2021. [online]. Npmjs.com. Available from: https://www.npmjs.com/package/cdbreact
import './sidebar.css'   //css for this component
import PortfolioComponent from "./PortfolioComponent";



// components for the admin sidebar
function Sidebar() {
    return (
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
     
     </div>  
     <PortfolioComponent />
    
          
{/* outside contianer div*/}
        </div>     

       
    )
}

export default Sidebar
