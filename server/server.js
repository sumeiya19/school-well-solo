const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

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

// Express Middleware
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

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
