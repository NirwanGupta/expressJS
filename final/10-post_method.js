const express =require('express');
const app=express();
const {people} = require('../data');

// static assets
app.use(express.static('./methods-public')); // using the express.static() middleware -->the root folder is the outside only after ./

//parse form data
app.use(express.urlencoded({extended : false}));
// without the urlencoded function when we console.log the req.body it gave undefined
// but after using this it gives the data that you entered in the textbox as an object

// the method after submit is the POST this time (and not GET)
app.post('/login',(req,res)=>{
    const {name} =req.body;
    if(name){
        return res.status(400).send(`Welcome ${name}`);   
    }
    res.status(401).send('Please provide the credentials');
})

//  in this form the action part is set as /login and method is set as POST
//  thus before handling the post, when submitted, it shows Cannot POST /login

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess : true,data : people});
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})