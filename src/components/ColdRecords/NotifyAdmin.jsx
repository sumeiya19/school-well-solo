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

const SendEmailButton = () => {
    const handleSendEmail = () => {
        const emailData = {
            to: 'sumeiya619@gmail.com',
            subject: 'Sending with SendGrid is Fun from acc solo w/ button',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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
        <div>
            <button onClick={handleSendEmail}>Send Email</button>
        </div>
    );
};

export default SendEmailButton;
