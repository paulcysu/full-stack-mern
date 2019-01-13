// import express from 'express' (needs babel setup)
const express = require('express')

// express() - generates a new app
const app = express();

// create a route handler in app to send response of "Hi, there!"
app.get('/', (req, res) => {
    res.send('Hi, there!')
});

// listen to see if there a port to be used (used this for Heroku, because it gives PORT in last second)
const PORT = process.env.PORT || 5000

// listen to PORT in argument
app.listen(PORT);
