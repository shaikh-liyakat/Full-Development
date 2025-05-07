import express from "express";

const app = express();

const Port = "3000";



app.get("/home",(req,res)=>{
    res.send("home route");
    console.log("serving")
})

app.listen(Port);
