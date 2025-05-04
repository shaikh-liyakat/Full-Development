// import express from 'express'
const express = require('express');

const Server = express()

Port = 3000

Server.get("/",(req ,res)=>{

res.send("Welcome to the Server listen on Port First Server", + `${Port}`);

})

Server.get("/ali",(request , response )=>{

response.send("Welcome to Ali Server");

})

Server.get("/vscode",(request , response )=>{

    response.send("Welcome to Vscode Server");
    
    })

Server.listen(3000)