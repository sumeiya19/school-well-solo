import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EditStrep() {


    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "FETCH_STREP" });
    }, [dispatch]);

    const editStrep = useSelector((store) => store.editStrep);

    function handleChange(event, property) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // PUT REQUEST to /students/:id
        axios.put(`/api/cold/${editStrep.id}`, editStrep)
            .then(response => {
                // clean up reducer data
                dispatch({ type: 'EDIT_CLEAR' });

                
                history.push('/strep'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            });
    }

    
    // if (!editIncidence) {
    //     return <p>Loading...</p>;
    // }
    console.log('Edit Incidence ID', editStrep.id);
    return (
        <>
            <h2>Edit Student</h2>
            <p>About to edit: {editStrep.last_name} {editStrep.first_name} with id: {editStrep.id}</p>


            <form onSubmit={handleSubmit}>
                <input
                    name="last_name"
                    onChange={(event) => handleChange(event, 'last_name')}
                    placeholder='Last Name'
                    value={editStrep.last_name}
                />
                <input
                    name="first_name"
                    onChange={(event) => handleChange (event, 'first_name')}
                    placeholder='First Name'
                    value={editStrep.first_name}
                />
                <input
                    type='number'
                    name="grade"
                    onChange={(event) => handleChange (event, 'grade')}
                    placeholder='Grade'
                    value={editStrep.grade}
                />
                <input
                    name="illness"
                    onChange={(event) => handleChange (event, 'illness')}
                    placeholder='Illness'
                    value={editStrep.illness}
                />
                <input
                    name="symptoms"
                    onChange={(event) => handleChange (event, 'symptoms')}
                    placeholder='Symptoms'
                    value={editStrep.symptoms}
                />
                <input
                    name="date"
                    onChange={(event) => handleChange (event, 'illness_date')}
                    placeholder='Date'
                    value={editStrep.illness_date}
                />
                <input type='submit' value='Update Student' />
            </form>
        </>
    );
}

export default EditStrep;