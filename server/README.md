## Instructions for building a server

1.  
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

    // tell app to listen to port 5000
    app.listen(5000);

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

