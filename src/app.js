const loaders = require('./loaders');
const express = require('express');
const http = require('http');

async function startServer() {
    const app = express();
    await loaders({ expressApp: app });
    const port = process.env.PORT || 3000;
    const server = http.createServer(app);
    server.listen(3000, (error)=>{
        if(error){
            console.error(error);
        }
        console.log('server listening on port 3000');
    });
}

startServer();