import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Home page contains all information about the current and past incidence records
// Button that takes you to 'Add_Incidence' page

function HomePage() {
   const history = useHistory(); 

   const handleNewIncidence = () => {
    history.push('/addnewincidence')
   }
    return (<>
    <h3>Create New Incidence Record</h3>
  <button onClick={handleNewIncidence}>Add New Incidence</button>

  </> )
} 

export default HomePage