## Instructions for building a server

    mkdir server
    npm i --save express

## Notes

Node - Javascript runtime - used to execute code outside the browser
Express - Library - runs in the Node runtime - has helpers to make dealing with HTTP traffic easier

# Flow of Requests

Request from Browser -> Port -> Node -> Uses Express -> Select correct Route -> Send back Response -> Express -> Node -> Port -> Browser

