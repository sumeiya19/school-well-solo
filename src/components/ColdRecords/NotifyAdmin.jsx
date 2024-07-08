// require('dotenv').config()

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//   to: 'sumeiya619@gmail.com', // Change to your recipient
//   from: 'eaglecreekmiddle@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun from acc solo',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// SendEmailButton.js

import React from 'react';
import axios from 'axios';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    margin: '20px', // Adjust the margin as needed
    float: 'right', // Align the button to the right
});

const SendEmailButton = () => {
    const handleSendEmail = () => {
        const emailData = {
            to: 'sumeiya619@gmail.com',
            subject: 'SchoolWell Update',
            text: 'and easy to do anywhere, even with Node.js',
            html: ' Hello School and Administration Team, We have an update regarding Incidence Records. Please log in to SchoolWell for more details. Thank you!',
        };

        axios.post('http://localhost:5001/send-email', emailData)
            .then((response) => {
                console.log(response.data);
                alert('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to send email');
            });
    };

    return (
        <Box display="flex" justifyContent="flex-end">
            <StyledButton variant="contained" color="primary" onClick={handleSendEmail}>
                Send Email
            </StyledButton>
        </Box>
    );
};

export default SendEmailButton;

