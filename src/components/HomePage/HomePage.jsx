import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

// Home page contains all information about the current and past incidence records
// Button that takes you to 'Add_Incidence' page

function HomePage() {
   const history = useHistory(); 
   const dispatch = useDispatch();


   const recordList = useSelector((store) => store.recordReducer);
   useEffect(() => {
    dispatch({ type: "FETCH_RECORD" });
}, [dispatch]);

   const handleNewIncidence = () => {
    history.push('/addincidenceform')
   }
const handleCurrentIncidence = () => {
  history.push('/addnewincidence')
}

const handleNewRecord = () => {
  history.push('/newrecord')
}

    return (<>
    <h3>Create New Incidence Record</h3>
  <button onClick={handleNewIncidence}>Add New Incidence</button> 
  <br />
  <button onClick={handleCurrentIncidence}>Current Incidence</button>
<br />

<button onClick={handleNewRecord}>Create New Incidence Record</button>
<br />

<p>Recent Incidence Records</p>
{recordList && recordList.length > 0 ? (
                <Link to="/addnewincidence">
                    {recordList.map((record) => (
                        <li key={record.id} className="list-group-item">
                            {record.illness_name} - {new Date(record.incidence_date).toLocaleDateString()}
                            
                        </li>
                    ))}
                </Link>
            ) : (
                <p>No incidence records to display</p>
            )}
           

  </> )
} 

export default HomePage