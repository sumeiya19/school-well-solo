import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';

function EditColdRecord() {
    const dispatch = useDispatch();
    const history = useHistory();
    const editCold = useSelector((store) => store.editCold);

    useEffect(() => {
        dispatch({ type: "FETCH_COLD" });
    }, [dispatch]);

    const handleChange = (event, property) => {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`/api/cold/${editCold.id}`, editCold)
            .then(response => {
                dispatch({ type: 'EDIT_CLEAR' });
                history.push('/coldrecords');
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
        <Box sx={{ width: '80%', margin: '0 auto', paddingTop: '20px' }}>
            <Typography variant="h2">Edit Student</Typography>
            <Typography variant="body1">
                About to edit: {editCold.last_name} {editCold.first_name} {editCold.illness} with id: {editCold.id}
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="last_name"
                            label="Last Name"
                            value={editCold.last_name}
                            onChange={(event) => handleChange(event, 'last_name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="first_name"
                            label="First Name"
                            value={editCold.first_name}
                            onChange={(event) => handleChange(event, 'first_name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="number"
                            name="grade"
                            label="Grade"
                            value={editCold.grade}
                            onChange={(event) => handleChange(event, 'grade')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="illness"
                            label="Illness"
                            value={editCold.name}
                            onChange={(event) => handleChange(event, 'name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="symptoms"
                            label="Symptoms"
                            value={editCold.symptoms}
                            onChange={(event) => handleChange(event, 'symptoms')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="date"
                            name="illness_date"
                            label="Date"
                            value={formatDateForInput(editCold.illness_date)}
                            onChange={(event) => handleChange(event, 'illness_date')}
                            InputLabelProps={{ shrink: true }}
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

export default EditColdRecord;

