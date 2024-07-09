import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Grid } from '@mui/material';

function ProjectDetails() {
    return (
        <Box p={2} maxWidth={1200} margin="auto">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Project Overview
                </Typography>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Which technologies did you use?
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="React" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Material-UI" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Redux-Sagas" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Node.js" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Express" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="SendGrid API" />
                        </ListItem>
                    </List>
                </Box>
                <Box mt={4}>
                    <Typography variant="h5" gutterBottom>
                        What was the toughest challenge you overcame?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        One of the toughest challenges I faced was implementing a seamless and user-friendly editing functionality for incidence records. Managing various tables and ensuring smooth integration with the backend required meticulous synchronization, which took considerable effort and time.
                    </Typography>
                </Box>
                <Box mt={4}>
                    <Typography variant="h5" gutterBottom>
                        What is the next thing you are excited to tackle?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I'm excited to implement role-based access control (RBAC) next. This will enable different users (e.g., school nurses, administrators, teachers) to have varying levels of access. Implementing RBAC will allow me to customize user experiences and permissions based on their roles within the school, leveraging the traditional OAuth authentication method.
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={3} style={{ padding: '40px', marginTop: '20px', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Connect with me
                </Typography>
                <Typography variant="h5" gutterBottom>
                    LinkedIn: <a href="https://www.linkedin.com/in/sumeiya-abdi/" target="_blank" rel="noopener noreferrer">Sumeiya's LinkedIn</a>
                </Typography>
                <Box mt={2}>
                    <img src="Untitled.jpeg" alt="QR Code" style={{ width: '150px', height: '150px' }} />
                </Box>
            </Paper>
        </Box>
    );
}

export default ProjectDetails;



