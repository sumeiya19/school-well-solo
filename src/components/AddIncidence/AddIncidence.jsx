import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddIncidence() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const [name, setName] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [illnessDate, setIllnessDate] = useState('');

    useEffect(() => {
        dispatch({ type: "FETCH_INCIDENCE" });
    }, []);

    const incidenceList = useSelector((store) => store.incidenceReducer);
    console.log('incidenceList:', incidenceList);

    const dispatch = useDispatch();

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
console.log('Illnessdate:', illnessDate);
        // Clear input fields
        setLastName('');
        setFirstName('');
        setGrade('');
        setName('');
        setSymptoms('');
        setIllnessDate('');
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

            <p>Incidence available here</p>

            <ul>
  {incidenceList.length > 0 ? (
    incidenceList.map((item) => (
      <li key={item.id}>
        Last Name: {item.last_name}<br />
        First Name: {item.first_name}<br />
        Grade: {item.grade}<br />
        Illness: {item.name}<br />
        Symptoms: {item.symptoms}<br />
        Date: {item.illness_date}<br />
        <button>Delete</button>
      </li>
    ))
  ) : (
    <li>No incidences to display</li>
  )}
</ul>


        </>
    );
}

export default AddIncidence;


