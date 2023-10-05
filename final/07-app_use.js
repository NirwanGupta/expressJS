const express =require('express');
const app =express();
const logger = require('../logger');

//app.use(logger); --> app.use is used to run all the middlewares, now we don't have to manually evertime make a call in every get function to call the logger

// passing multi arguments in the app.use
app.use('/api',logger); // --> the string argument in this tells the URL's on which the middleware has to be called.. now it will be called on all initializers that have /api, for ex. /api/products or /api/items

app.get('/',(req,res)=>{
    res.send("Home Page");
})

//app.use('/api',logger); --> if this is used here then it will not be considered for '/', beacuse the js code is executed in order

app.get('/about',(req,res)=>{
    res.send("About Page");
})

app.get('/api/products',(req,res)=>{
    res.send("Products");
})

app.get('/api/items',(req,res)=>{
    res.send("Items");
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000...");
})