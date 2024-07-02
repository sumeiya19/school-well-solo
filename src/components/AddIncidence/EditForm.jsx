import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddIncidence from './AddIncidence';

function EditForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();


    const editIncidence = useSelector((store) => store.editIncidence);

    function handleChange(event) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'last_name', value: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // PUT REQUEST to /students/:id
        axios.put(`/api/incidence/${editIncidence.id}`, editIncidence)
            .then(response => {
                // clean up reducer data
                dispatch({ type: 'EDIT_CLEAR' });

                // refresh will happen with useEffect on Home
                history.push('/addnewincidence'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            });
    }

    // Add this check
    // if (!editIncidence) {
    //     return <p>Loading...</p>;
    // }

    return (
        <>
            <h2>Edit Student</h2>
            {/* <p>About to edit: {editIncidence.last_name} with id: {editIncidence.id}</p> */}

            <form onSubmit={handleSubmit}>
                <input
                    name="last_name"
                    onChange={handleChange}
                    placeholder='Last Name'
                    value={editIncidence.last_name}
                />
                <input
                    name="first_name"
                    onChange={handleChange}
                    placeholder='First Name'
                    value={editIncidence.first_name}
                />
                <input
                    name="grade"
                    onChange={handleChange}
                    placeholder='Grade'
                    value={editIncidence.grade}
                />
                <input
                    name="illness"
                    onChange={handleChange}
                    placeholder='Illness'
                    value={editIncidence.illness}
                />
                <input
                    name="symptoms"
                    onChange={handleChange}
                    placeholder='Symptoms'
                    value={editIncidence.symptoms}
                />
                <input
                    name="date"
                    onChange={handleChange}
                    placeholder='Date'
                    value={editIncidence.date}
                />
                <input type='submit' value='Update Student' />
            </form>
        </>
    );
}

export default EditForm;

