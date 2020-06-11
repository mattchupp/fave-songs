require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');

const port = 4000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

/*
 * DB Connection
*/
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true }, function(err) {
  if(err) {
    console.log('Uh oh. Grab another drink. Something bad happened.' + err);
  } else {
    console.log('Rest easy. Database connection established.');
  }
})
const db = mongoose.connection

/*
 * Set up route for api calls
*/
const ticketsRouter = require('./routes/tickets')
app.use('/tickets', ticketsRouter)
