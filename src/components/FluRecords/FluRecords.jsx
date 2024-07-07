import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TextField, Grid, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material'; // Import Material-UI components
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
    marginBottom: '15px',
});

const Container = styled(Box)({
    width: '60%',
    margin: '0 auto',
});

function FluRecords() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const [name, setName] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [illnessDate, setIllnessDate] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const fluList = useSelector((store) => store.fluReducer);
    console.log('Flu Records:', fluList);

    useEffect(() => {
        dispatch({ type: "FETCH_FLU" });
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_FLU',
            payload: {
                last_name: lastName,
                first_name: firstName,
                grade,
                name,
                symptoms,
                illness_date: illnessDate
            }
        });

        setLastName('');
        setFirstName('');
        setGrade('');
        setName('');
        setSymptoms('');
        setIllnessDate('');
    };

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
        dispatch({ type: 'DELETE_FLU', payload: id });
    };

    const handleEditClick = (item) => {
        dispatch({ type: 'SET_EDIT_STUDENT', payload: item });
        history.push('/editflu');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            fullWidth
                            type="text"
                            label="Last Name"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            fullWidth
                            type="text"
                            label="First Name"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel id="grade-label">Grade</InputLabel>
                        <Select
                            fullWidth
                            labelId="grade-label"
                            id="grade"
                            value={grade}
                            onChange={(event) => setGrade(event.target.value)}
                        >
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel id="illness-label">Illness Name</InputLabel>
                            <Select
                                labelId="illness-label"
                                id="illness-select"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            >
                                <MenuItem value="Flu">Flu</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            fullWidth
                            type="text"
                            label="Symptoms"
                            value={symptoms}
                            onChange={(event) => setSymptoms(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            fullWidth
                            type="date"
                            label="Illness Date"
                            value={illnessDate}
                            onChange={(event) => setIllnessDate(event.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    Add Incidence
                </Button>
            </form>

            <p style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold' }}>Incidences available here</p>

            <TableContainer component={Paper} style={{ margin: '0 auto', maxWidth: '100%' }}>
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
                        {fluList.length > 0 ? (
                            fluList.map((item) => (
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
        </Container>
    );
}

export default FluRecords;
