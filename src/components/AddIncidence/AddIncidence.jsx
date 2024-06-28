import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddIncidence() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');

    const incidenceList = useSelector((store) => store.incidenceReducer);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Dispatch action with payload
        dispatch({ type: 'ADD_INCIDENCE', payload: { last_name: lastName, first_name: firstName, grade } });

        // Clear input fields
        setLastName('');
        setFirstName('');
        setGrade('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />

                <button type="submit">Add Incidence</button>
            </form>

            <p>Incidence available here</p>

            <ul>
                {incidenceList.map((list) => (
                    <li key={list.id}>{list.last_name} {list.first_name} {list.grade}</li>
                ))}
            </ul>
        </>
    );
}

export default AddIncidence;

