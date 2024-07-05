import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EditColdRecord() {


    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "FETCH_COLD" });
    }, [dispatch]);

    const editCold = useSelector((store) => store.editCold);

    function handleChange(event, property) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // PUT REQUEST to /students/:id
        axios.put(`/api/cold/${editCold.id}`, editCold)
            .then(response => {
                // clean up reducer data
                dispatch({ type: 'EDIT_CLEAR' });

                
                history.push('/coldrecords'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            });
    }

    
    // if (!editIncidence) {
    //     return <p>Loading...</p>;
    // }
    console.log('Edit Incidence ID', editCold.id);
    return (
        <>
            <h2>Edit Student</h2>
            <p>About to edit: {editCold.last_name} {editCold.first_name} with id: {editCold.id}</p>


            <form onSubmit={handleSubmit}>
                <input
                    name="last_name"
                    onChange={(event) => handleChange(event, 'last_name')}
                    placeholder='Last Name'
                    value={editCold.last_name}
                />
                <input
                    name="first_name"
                    onChange={(event) => handleChange (event, 'first_name')}
                    placeholder='First Name'
                    value={editCold.first_name}
                />
                <input
                    type='number'
                    name="grade"
                    onChange={(event) => handleChange (event, 'grade')}
                    placeholder='Grade'
                    value={editCold.grade}
                />
                <input
                    name="illness"
                    onChange={(event) => handleChange (event, 'name')}
                    placeholder='Illness'
                    value={editCold.illness}
                />
                <input
                    name="symptoms"
                    onChange={(event) => handleChange (event, 'symptoms')}
                    placeholder='Symptoms'
                    value={editCold.symptoms}
                />
                <input
                    name="date"
                    onChange={(event) => handleChange (event, 'illness_date')}
                    placeholder='Date'
                    value={editCold.illness_date}
                />
                <input type='submit' value='Update Student' />
            </form>
        </>
    );
}

export default EditColdRecord;