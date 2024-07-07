const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;
require('dotenv').config()
const cors = require('cors');




// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const incidenceRouter = require('./routes/incidence.router')
const studentRouter = require('./routes/student.router')
const recordRouter = require('./routes/record.router')
const coldRouter = require('./routes/cold.router')
const fluRouter = require('./routes/flu.router')
const stomachFluRouter = require('./routes/stomachflu.router')
const strepRouter = require('./routes/strep.router')
const pinkEyeRouter = require('./routes/pinkeye.router')

// Express Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/incidence', incidenceRouter)
app.use('/api/student', studentRouter)
app.use('/api/record', recordRouter)
app.use('/api/cold', coldRouter)
app.use('/api/flu', fluRouter)
app.use('/api/stomach', stomachFluRouter)
app.use('/api/strep', strepRouter)
app.use('/api/pinkeye', pinkEyeRouter)

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.post('/send-email', (req, res) => {
  const { to, subject, text, html } = req.body;

  const msg = {
      to,
      from: 'eaglecreekmiddle@gmail.com', // Change to your verified sender
      subject,
      text,
      html,
  };

  sgMail.send(msg)
      .then(() => {
          console.log('Email sent');
          res.status(200).send('Email sent successfully');
      })
      .catch((error) => {
          console.error('Error sending email:', error);
          res.status(500).send('Failed to send email');
      });
});

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
