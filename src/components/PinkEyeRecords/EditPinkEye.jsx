import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EditPinkEye() {


    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "FETCH_PINK_EYE" });
    }, [dispatch]);

    const editPinkEye = useSelector((store) => store.editPinkEye);

    function handleChange(event, property) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // PUT REQUEST to /students/:id
        axios.put(`/api/pinkeye/${editPinkEye.id}`, editPinkEye)
            .then(response => {
                // clean up reducer data
                dispatch({ type: 'EDIT_CLEAR' });

                
                history.push('/pinkeye'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            });
    }

    
    // if (!editIncidence) {
    //     return <p>Loading...</p>;
    // }
    console.log('Edit Incidence ID', editPinkEye.id);
    return (
        <>
            <h2>Edit Student</h2>
            <p>About to edit: {editPinkEye.last_name} {editPinkEye.first_name} with id: {editPinkEye.id}</p>


            <form onSubmit={handleSubmit}>
                <input
                    name="last_name"
                    onChange={(event) => handleChange(event, 'last_name')}
                    placeholder='Last Name'
                    value={editPinkEye.last_name}
                />
                <input
                    name="first_name"
                    onChange={(event) => handleChange (event, 'first_name')}
                    placeholder='First Name'
                    value={editPinkEye.first_name}
                />
                <input
                    type='number'
                    name="grade"
                    onChange={(event) => handleChange (event, 'grade')}
                    placeholder='Grade'
                    value={editPinkEye.grade}
                />
                <input
                    name="illness"
                    onChange={(event) => handleChange (event, 'illness')}
                    placeholder='Illness'
                    value={editPinkEye.illness}
                />
                <input
                    name="symptoms"
                    onChange={(event) => handleChange (event, 'symptoms')}
                    placeholder='Symptoms'
                    value={editPinkEye.symptoms}
                />
                <input
                    name="date"
                    onChange={(event) => handleChange (event, 'illness_date')}
                    placeholder='Date'
                    value={editPinkEye.illness_date}
                />
                <input type='submit' value='Update Student' />
            </form>
        </>
    );
}

export default EditPinkEye;