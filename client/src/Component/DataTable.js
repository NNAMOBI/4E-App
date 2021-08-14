// component to handle react datatables using the datatable library in react
import React from 'react'




function DataTable(props) {  // getting the data from the parent component (dashboard.js)
// code by Searching/filtering a dataTable in [react] (react hooks api, react datatables, JavaScript fetch API), 2020. [online]. Youtube. Available from: https://www.youtube.com/watch?v=d1r0aK5awWk [Accessed 14 Aug 2021].
    const columns = props.data[0] && Object.keys(props.data[0]);

    return (
        <>
        <div className="jumbotron jumbotron-fluid" id="parent-jumbotron">
        
                
                         
        <h2 className="text">CPD Recordings</h2>
    <table className='table center-text'>  
    <thead>  {/*  header for the tables heading row*/}
    <tr>{props.data[0] && columns.map((heading)=> <th>{heading}</th>)}</tr>    {/* pulling the keys out of the first rows to use as our headings */}

    </thead>
    <tbody>
        {
            props.data.map(row=> <tr>  
             {
                 columns.map(column => <td>{row[column]}</td>)
             }

            </tr>)
        }
    </tbody>

    </table>
          </div>
         
        
         
        </>
        ) 
}

export default DataTable
