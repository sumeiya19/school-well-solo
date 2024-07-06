// Create a new incidence record by inputting illness type and illness date
    // Then it will trigger a new incidence form where you can input all the student information
    // Then render a new link to that page on the home page
    import React, { useEffect, useState } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { useHistory } from 'react-router-dom';

function IncidenceRecord () {

    const dispatch = useDispatch();
    const [illnessName, setIllnessName] = useState('');
    const [incidenceDate, setIncidenceDate] = useState('');


    const recordList = useSelector((store) => store.recordReducer);
    console.log('recordList:', recordList);

    useEffect(() => {
        dispatch({ type: "FETCH_RECORD" });
    }, [dispatch]);

    const handleSubmit = (event) => {
    dispatch({
        type: 'ADD_RECORD',
        payload: {
            illness_name: illnessName,
            incidence_date: incidenceDate
        }

    });
        // Clear input fields
        setIllnessName('');
        setIncidenceDate('');
}

    return (<>
<p>New Record!</p>
<form onSubmit={handleSubmit}>
<input
type='text'
placeholder='Illness Type'
value={illnessName}
onChange={(event) => setIllnessName(event.target.value)}
/>


<input
type = 'date'
placeholder='Date'
value={incidenceDate}
onChange={(event) => setIncidenceDate(event.target.value)}
/>

<button type='submit'>Create New Incidence</button>
</form>
</> )
}

export default IncidenceRecord