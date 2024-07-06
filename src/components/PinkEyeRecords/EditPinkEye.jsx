import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditPinkEyeRecord() {
    const dispatch = useDispatch();
    const history = useHistory();

    const editPinkEye = useSelector((store) => store.editPinkEye);

    useEffect(() => {
        dispatch({ type: "FETCH_PINK_EYE" });
    }, [dispatch]);

    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`/api/pinkeye/${editPinkEye.id}`, editPinkEye)
            .then(response => {
                dispatch({ type: 'EDIT_CLEAR' });
                history.push('/pinkeye');
            })
            .catch(error => {
                console.log('Error on PUT: ', error);
            });
    };

    // Format date to "yyyy-MM-dd" for input field
    const formatDateForInput = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        return `${year}-${month}-${day}`;
    };

    return (
        <>
            <h2>Edit Student</h2>
            <p>About to edit: {editPinkEye.last_name} {editPinkEye.first_name} with id: {editPinkEye.id}</p>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="last_name"
                    onChange={(event) => handleChange(event, 'last_name')}
                    label="Last Name"
                    value={editPinkEye.last_name}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    name="first_name"
                    onChange={(event) => handleChange(event, 'first_name')}
                    label="First Name"
                    value={editPinkEye.first_name}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    type="number"
                    name="grade"
                    onChange={(event) => handleChange(event, 'grade')}
                    label="Grade"
                    value={editPinkEye.grade}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    name="illness"
                    onChange={(event) => handleChange(event, 'illness')}
                    label="Illness"
                    value={editPinkEye.illness}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    name="symptoms"
                    onChange={(event) => handleChange(event, 'symptoms')}
                    label="Symptoms"
                    value={editPinkEye.symptoms}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    type="date"
                    name="illness_date"
                    onChange={(event) => handleChange(event, 'illness_date')}
                    label="Date"
                    value={formatDateForInput(editPinkEye.illness_date)}
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Update Student
                </Button>
            </form>
        </>
    );
}

export default EditPinkEyeRecord;
