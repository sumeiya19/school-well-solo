import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddIncidenceForm() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const [name, setName] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [illnessDate, setIllnessDate] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const incidenceList = useSelector((store) => store.incidenceReducer);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Dispatch action with payload
        dispatch({
            type: 'ADD_INCIDENCE',
            payload: {
                last_name: lastName,
                first_name: firstName,
                grade,
                name,
                symptoms,
                illness_date: illnessDate
            }
        });

        // Clear input fields
        setLastName('');
        setFirstName('');
        setGrade('');
        setName('');
        setSymptoms('');
        setIllnessDate('');

        // Navigate back to the home page
        history.push('/home');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Grade"
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="Illness Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="Symptoms"
                    value={symptoms}
                    onChange={(event) => setSymptoms(event.target.value)}
                />

                <input
                    type="date"
                    placeholder="Illness Date"
                    value={illnessDate}
                    onChange={(event) => setIllnessDate(event.target.value)}
                />

                <button type="submit">Add Incidence</button>
            </form>

            
  
            
        </>
    );
}

export default AddIncidenceForm;
