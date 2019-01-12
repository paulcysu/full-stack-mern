// import express from 'express' (needs babel setup)
const express = require('express')

// express() - generates a new app
const app = express();

// create a route handler in app to send response of "Hi, there!"
app.get('/', (req, res) => {
    res.send('Hi, there!')
});

app.listen(5000);
