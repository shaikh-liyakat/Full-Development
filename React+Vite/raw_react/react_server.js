// import express from "express";

// const app = express();

// const Port = 3000;

// app.get("/home",(req,res)=>{
//     res.send("home route");
//     console.log("serving")
// })

// app.listen(Port);



// ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

import express, { json } from "express";
import { use } from "react";

const app = express();

// const Port = 3000;

var data ={
name:"ali",
age:19,
gender:"male",
study:"IT Graduate"
}

// console.log(data)

const chk_IP = (req,res,next)=>
    {
        const OG_ip = "192.168.247.1";
        const oth_ip = req.ip;

        if(oth_ip == OG_ip || oth_ip == "::ffff:"+ OG_ip  )
            {

                next();
            }
            else
            {

                res.status(403).send("forbidden")
                console.log(res.ip);
            }


    } 

// app.use(chk_IP)



// var prs_d ;

// for (const val in data) {
//     prs_d = data[val];
//     console.log(prs_d)
// }


const Port = process.env.Port || 4000;

const directory = "/" ;
app.get(directory,(req,res)=>{
    // res.send("home route");
    
    // app.use(chk_IP(req,res));

    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(`api is \n \n +${JSON.stringify(data)}`);
    // res.send("connected  successful");
    
})



app.listen(Port,()=>{
    console.log("serving");
    console.log(`http://localhost:${Port}${directory}`);
});


