// import express from 'express' (needs babel setup)
const express = require('express')

// import passport and strategy
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

// express() - generates a new app
const app = express();

passport.use(new GoogleStrategy());

// listen to see if there a port to be used (used this for Heroku, because it gives PORT in last second)
const PORT = process.env.PORT || 5000

// listen to PORT in argument
app.listen(PORT);
