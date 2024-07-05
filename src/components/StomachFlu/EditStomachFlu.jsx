import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EditStomachFlu() {


    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "FETCH_STOMACH_FLU" });
    }, [dispatch]);

    const editStomachFlu = useSelector((store) => store.editStomachFlu);

    function handleChange(event, property) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // PUT REQUEST to /students/:id
        axios.put(`/api/stomach/${editStomachFlu.id}`, editStomachFlu)
            .then(response => {
                // clean up reducer data
                dispatch({ type: 'EDIT_CLEAR' });

                
                history.push('/stomachflu'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            });
    }

    
    // if (!editIncidence) {
    //     return <p>Loading...</p>;
    // }
    console.log('Edit Incidence ID', editStomachFlu.id);
    return (
        <>
            <h2>Edit Student</h2>
            <p>About to edit: {editStomachFlu.last_name} {editStomachFlu.first_name} with id: {editStomachFlu.id}</p>


            <form onSubmit={handleSubmit}>
                <input
                    name="last_name"
                    onChange={(event) => handleChange(event, 'last_name')}
                    placeholder='Last Name'
                    value={editStomachFlu.last_name}
                />
                <input
                    name="first_name"
                    onChange={(event) => handleChange (event, 'first_name')}
                    placeholder='First Name'
                    value={editStomachFlu.first_name}
                />
                <input
                    type='number'
                    name="grade"
                    onChange={(event) => handleChange (event, 'grade')}
                    placeholder='Grade'
                    value={editStomachFlu.grade}
                />
                <input
                    name="illness"
                    onChange={(event) => handleChange (event, 'illness')}
                    placeholder='Illness'
                    value={editStomachFlu.illness}
                />
                <input
                    name="symptoms"
                    onChange={(event) => handleChange (event, 'symptoms')}
                    placeholder='Symptoms'
                    value={editStomachFlu.symptoms}
                />
                <input
                    name="date"
                    onChange={(event) => handleChange (event, 'illness_date')}
                    placeholder='Date'
                    value={editStomachFlu.illness_date}
                />
                <input type='submit' value='Update Student' />
            </form>
        </>
    );
}

export default EditStomachFlu