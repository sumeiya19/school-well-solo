require('dotenv').config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'sumeiya619@gmail.com', // Change to your recipient
  from: 'eaglecreekmiddle@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun from acc solo',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })