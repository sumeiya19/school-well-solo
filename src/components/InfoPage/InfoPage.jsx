import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

function AddNewStudent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const studentList = useSelector((store) => store.studentReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_STUDENT' });
    }, [dispatch]);

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
    );
}

export default AddNewStudent;


