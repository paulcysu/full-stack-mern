## Instructions for building a server

1. Make server

    mkdir server && cd server
    npm init
    npm i --save express

2. Make index.js and do the following to test server

    // import express package and execute to make app for routes
    const express = require('express')
    const app = express();

    // add route to app -> sends back ('Hi, there!')
    app.get('/', (req, res) => {
        res.send('Hi, there!')
    });

    // use this instead if Heroku
    const PORT = process.env.PORT || 5000

    // tell app to listen to port Heroku or port 5000
    app.listen(5000);

3. Turn on server

    node index.js

4. View localhost:<PORT>

## Heroku Setup

1. Make to to have server listening to:

    const PORT = process.env.PORT

2. Specify which version of node and npm Heroku needs: (in package.json)

    "engines": {
        "node": "8.1.1",
        "npm": "5.0.3"
    },

3. Tell Heroku the script to run to start server

    "scripts": {
        "start": "node index.js",
    }

## Notes

#Node - Javascript runtime - used to execute code outside the browser

    const express = require('express') > import
    because import is es6 and node doesn't support (need babel setup)

#Express - Library - runs in the Node runtime - has helpers to make dealing with HTTP traffic easier

#Route Convention

    get - request wants to get infomation
    post - request sends infomation
    put - update all the properties of something
    delete - delete something
    patch - update one or two properties of something

# Flow of Requests

Request from Browser -> Port -> Node -> Uses Express -> Select correct Route -> Send back Response -> Express -> Node -> Port -> Browser

