const express =require('express');
const app =express();
const logger =require('../logger');
// Now the task is to move the logger middleware to a separate file and import whenecer it is required --> logger middleware is now in the logger.js and is imported min this file

app.get('/',logger,(req,res)=>{
    res.status(200).send("Home Page");
})

app.get('/about',(req,res)=>{
    res.status(200).send("About Page");
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000...");
});