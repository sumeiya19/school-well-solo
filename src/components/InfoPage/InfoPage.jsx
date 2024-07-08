import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Grid, TextField } from '@mui/material';

function AddNewStudent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const studentList = useSelector((store) => store.studentReducer);

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_STUDENT' });
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newStudent = {
            last_name: lastName,
            first_name: firstName,
            grade: grade
        };
        dispatch({ type: 'ADD_STUDENT', payload: newStudent });
        setLastName('');
        setFirstName('');
        setGrade('');
    };

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        });
    };

    const handleEditClick = (student) => {
        dispatch({ type: 'SET_EDIT_STUDENT', payload: student });
        history.push('/editstudent');
    };

    return (
        <Box p={2} maxWidth={1200} margin="auto">
            <h1>Add New Student</h1>
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
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Add Student
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Box p={2} maxWidth={1200} margin="auto">
                <h1>Student List</h1>
                {studentList && studentList.length > 0 ? (
                    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Grade</TableCell>
                                    <TableCell>Edit</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {studentList.map((student, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{student.last_name}</TableCell>
                                        <TableCell>{student.first_name}</TableCell>
                                        <TableCell>{student.grade}</TableCell>
                                        <TableCell>
                                            <Button variant="outlined" onClick={() => handleEditClick(student)}>Edit</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleDelete(student.id)} variant="outlined" color="secondary">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <p>No students available</p>
                )}
            </Box>
        </Box>
    );
}

export default AddNewStudent;



