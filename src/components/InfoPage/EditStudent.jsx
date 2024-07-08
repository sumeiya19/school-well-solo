import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';

function EditStudent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const editStudent = useSelector((store) => store.editStudent);

    useEffect(() => {
        dispatch({ type: "FETCH_STUDENT" });
    }, [dispatch]);

    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_STUDENT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`/api/student/${editStudent.id}`, editStudent)
            .then(response => {
                dispatch({ type: 'EDIT_STUDENT_CLEAR' });
                history.push('/info');
            })
            .catch(error => {
                console.log('Error on PUT: ', error);
            });
    };

    return (
        <Box sx={{ width: '80%', margin: '0 auto', paddingTop: '20px' }}>
            <Typography variant="h2">Edit Student</Typography>
            <Typography variant="body1">
                About to edit: {editStudent.last_name} {editStudent.first_name} with id: {editStudent.id}
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="last_name"
                            label="Last Name"
                            value={editStudent.last_name}
                            onChange={(event) => handleChange(event, 'last_name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="first_name"
                            label="First Name"
                            value={editStudent.first_name}
                            onChange={(event) => handleChange(event, 'first_name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="number"
                            name="grade"
                            label="Grade"
                            value={editStudent.grade}
                            onChange={(event) => handleChange(event, 'grade')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Update Student
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default EditStudent;
