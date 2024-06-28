import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddIncidence() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');

    // useEffect(()=> {
    //     dispatch({type: "SET_INCIDENCE"})
    //   }, []);

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

    // const handleDelete = () => {
    //     console.log("Delete Clicked");
    //     dispatch({ type: '', payload: })
    //     return;
      
    //   }

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

                <button type="submit">Add Incidence</button>
            </form>

            <p>Incidence available here</p>

            <ul>
                {incidenceList.map((list) => (
                    <li key={list.id}>{list.last_name} {list.first_name} {list.grade}
                     <button>Delete</button>
                    </li>
                    

                ))}
            </ul>
        </>
    );
}

export default AddIncidence;

