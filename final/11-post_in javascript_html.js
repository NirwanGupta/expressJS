const express =require('express');
const app=express();
const {people} = require('../data');
const cors = require(`cors`);

// static assets
app.use(express.static('./methods-public')); // using the express.static() middleware -->the root folder is the outside only after ./

//parse form data
app.use(express.urlencoded({extended : false}));
//parse json
app.use(express.json());
app.use(cors());

// the method after submit is the POST this time (and not GET)
app.post('/login',(req,res)=>{
    const {name} =req.body;
    if(name){
        return res.status(400).send(`Welcome ${name}`);   
    }
    res.status(401).send('Please provide the credentials');
})

app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess : true,data : people});
})

app.post('/api/people',(req,res)=>{
    const {name} =req.body;
    if(!name){
        return res.status(400).json({success : false,msg :"please send name value"});   
    }
    res.status(201).json({success :true ,person :name});
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})
