

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const AboutPage = () => {
    return (
        <Container maxWidth="lg">
            <Box py={4}>
                <Paper elevation={3}>
                    <Box p={4}>
                        <Typography variant="h3" gutterBottom>
                            About SchoolWell
                        </Typography>

                        <Typography variant="h5" gutterBottom>
                            Welcome to SchoolWell, your comprehensive school health management system designed to keep our school community informed and healthy.
                        </Typography>

                        <Typography variant="h4" gutterBottom>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At SchoolWell, our mission is to ensure the well-being of students by providing a seamless platform for managing and tracking health incidences within schools. We aim to create a safe and healthy environment for students, staff, and administrators.
                        </Typography>

                        <Typography variant="h4" gutterBottom>
                            Key Features
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Health Record Management</Typography>
                                <Typography variant="body1">
                                    SchoolWell allows school nurses and administrators to efficiently manage and track health records of students, including incidences of common illnesses such as colds, strep throat, and other communicable diseases.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Real-Time Notifications</Typography>
                                <Typography variant="body1">
                                    Our system sends real-time notifications to administrators and relevant personnel when new health incidences are reported, ensuring prompt action and communication.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Data Analytics</Typography>
                                <Typography variant="body1">
                                    We provide comprehensive data analytics to help identify trends and patterns in student health, allowing for proactive measures to be taken to prevent the spread of illnesses.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Secure and Confidential</Typography>
                                <Typography variant="body1">
                                    SchoolWell prioritizes the security and confidentiality of student health data. Our platform adheres to all relevant privacy laws and regulations, ensuring that all information is protected.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography variant="h4" gutterBottom>
                            How It Works
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>1. Record Incidences:</strong> School nurses can quickly and easily record health incidences using our user-friendly interface.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>2. Notify Administration:</strong> Automatic notifications are sent to the school administration team when new records are added.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>3. View and Manage Data:</strong> Administrators can view detailed reports and manage health records from a centralized dashboard.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>4. Take Action:</strong> Based on the data and notifications, appropriate actions can be taken to address and manage health concerns within the school.
                        </Typography>

                        <Typography variant="h4" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you have any questions or need assistance, please feel free to reach out to our support team at support@schoolwell.com.
                        </Typography>

                        <Typography variant="h4" gutterBottom>
                            Join Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Join SchoolWell today and take the first step towards a healthier school environment. Together, we can ensure the well-being of our students and create a safe learning space for everyone.
                        </Typography>

                        <Typography variant="h4" gutterBottom>
                            Follow Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Stay updated with our latest news and updates:
                        </Typography>
                        <ul>
                            <li><a href="https://www.facebook.com">Facebook</a></li>
                            <li><a href="https://www.twitter.com">Twitter</a></li>
                            <li><a href="https://www.instagram.com">Instagram</a></li>
                        </ul>

                        <Typography variant="h4" gutterBottom>
                            Acknowledgements
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We would like to thank all our users and contributors for their continuous support and feedback, helping us to improve and grow.
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default AboutPage;

