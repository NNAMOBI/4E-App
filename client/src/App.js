// parent component


import './App.css';
import {Route, Switch} from 'react-router-dom' // Route defines different paths in the URL we want to listen to
// import NavBar from './Component/NavBar';
import NavigationComponent from './Component/NavigationComponent'; //import components
import ContentFirstLayer from './Component/ContentFirstLayer';
import JumbotronSectComp from './Component/JumbotronSectComp';
// import CenteredGrid from './Component/CenteredGrid';
import ContactUsForm from './Component/ContactUsForm';
import Footer from './Component/Footer';
import Register from './Component/Pages/Register';
import Login from './Component/Pages/Login';
import Record from './Component/Pages/Record';
import Reflect from './Component/Pages/Reflect';
import InfoGuide from './Component/Pages/InfoGuide';
import LearningRecords from './Component/LearningRecords';
import Sidebar from './Component/Sidebar'
import React from 'react';
import Dashboard from './Component/Dashboard';
import ReflectionDashboard from './Component/Pages/ReflectionDashboard'




function App() {
   // path here is localhost:3000/

  
  return (
      <>    {/*  React fragments start here */}
        <Switch>  {/*  to switch to the exact route start here */}
             <Route path="/" exact={true}>     {/*  React router start here */}
               {/* <NavBar />  */}
               <NavigationComponent />
               <ContentFirstLayer />
               <JumbotronSectComp />
               <ContactUsForm />
               <Footer/>
               {/* <CenteredGrid /> */}
             </Route>
             <Route path="/register" exact strict component={Register} />
             <Route path="/login" exact strict component={Login} />
             <Route path="/record-your-learning" exact strict component={Record} />
             <Route path="/reflect-your-learning" exact strict component={Reflect} />
             <Route path="/info-guide" exact strict component={InfoGuide} />
             <Route path="/admin" exact strict component={Sidebar} />
             <Route path="/postcard" exact strict component={LearningRecords} />
             <Route path="/dashboard" exact strict component={Dashboard} />
             {/* <Route path="/reflections-dashboard" exact strict component={ReflectionDashboard} /> */}

         </Switch>    {/*  to switch to the exact route ends here */}
      </>
    
  );
}

export default App;  // export the ap
