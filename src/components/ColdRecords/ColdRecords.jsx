import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Grid, Box } from '@mui/material';

const ColdRecords = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const [name, setName] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [illnessDate, setIllnessDate] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const coldList = useSelector((store) => store.coldRecordsReducer);
    console.log('Cold Records:', coldList);

    useEffect(() => {
        dispatch({ type: "FETCH_COLD" });
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Dispatch action with payload
        dispatch({
            type: 'ADD_COLD',
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
    };

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
        dispatch({ type: 'DELETE_COLD', payload: id });
    };

    const handleEditClick = (item) => {
        // dispatch to the store, the student being edited.
        // using SET_EDIT_STUDENT action
        dispatch({ type: 'SET_EDIT_STUDENT', payload: item });

        // Push user to edit page
        history.push('/editcold');
    };

    return (
        <Box sx={{ width: '80%', margin: '0 auto', paddingTop: '20px' }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            type="text"
                            label="Last Name"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            type="text"
                            label="First Name"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Grade"
                            value={grade}
                            onChange={(event) => setGrade(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            type="text"
                            label="Illness Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            type="text"
                            label="Symptoms"
                            value={symptoms}
                            onChange={(event) => setSymptoms(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Illness Date"
                            value={illnessDate}
                            onChange={(event) => setIllnessDate(event.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Add Incidence
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <p style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold' }}>Incidences available here</p>

            <TableContainer component={Paper} style={{ marginTop: '10px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Last Name</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Grade</TableCell>
                            <TableCell>Illness</TableCell>
                            <TableCell>Symptoms</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coldList.length > 0 ? (
                            coldList.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.last_name}</TableCell>
                                    <TableCell>{item.first_name}</TableCell>
                                    <TableCell>{item.grade}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.symptoms}</TableCell>
                                    <TableCell>{new Date(item.illness_date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" onClick={() => handleEditClick(item)}>Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="error" onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8}>No incidences to display</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ColdRecords;
