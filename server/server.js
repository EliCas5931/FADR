/**
 * Project 3 Starter
 * UNC Charlotte Full-Stack Coding Bootcamp
 */

//-- .env --------------------------------------------------------------------
console.log("KH2")
const path = require('path');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: path.resolve(__dirname, '.env')
  });
}

//-- Dependencies ------------------------------------------------------------
console.log("KH3")
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const { passport } = require('./lib/passport');

//-- Constants ---------------------------------------------------------------
console.log("KH4")
const PORT = process.env.PORT || 3001;
const LOG_MODE = process.env.NODE_ENV === 'production' ? 'common' : 'dev';

//-- Express -----------------------------------------------------------------
const app = express();

//-- Mongoose Setup ----------------------------------------------------------
console.log("KH5")
mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/ProjectThree'
)
mongoose.connection.on('error', err => {
  console.log(`Mongoose connection err:\n${err}`)
})

//-- Middleware --------------------------------------------------------------
console.log("KH6")
app.use(logger(LOG_MODE));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

//-- Static Server (Production) ----------------------------------------------
console.log("KH7")
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
  console.log(`Client build path: ${clientBuildPath}\n`);
  app.use(express.static(clientBuildPath));
}

//-- Controller Routes -------------------------------------------------------
app.use(require('./controllers'));

//-- Main --------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}...`);
});

//-- Export to Tests ---------------------------------------------------------
module.exports = app;
