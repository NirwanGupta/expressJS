const express = require('express');
const app =express();
const morgan = require('morgan');
const logger =require('../logger');
const authorize =require('../authorize');

//req => middleware => res
// app.use([authorize,logger]);//order in which the elements are stored in this array matters...
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send('Home');
})

app.get('/about',(req,res)=>{
    res.send('About');
})

app.get('/api/products',(req,res)=>{
    res.send("Products");
})

app.get('/api/items',(req,res)=>{
    console.log(req.user);
    res.send("Items");
})

app.listen(5000,()=>{
    console.log("Server is listening to port at 5000...");
})
