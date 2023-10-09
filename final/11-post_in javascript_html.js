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

//  cors not important-> added just because the javascript.html was not fetching data, ans chatFPT said to add this but it is definitely not needed
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

app.post(`/api/people/postman`, (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success : false,msg :"please send name value"});   
    }
    res.status(201).json({success :true, data : [...people,{"id": 6, "name": name}]});
})

app.put(`/api/people/:id`,(req,res)=>{
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success : false,msg :`No person with id: ${id}`});   
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({success: true, data: newPeople});
})

app.delete(`/api/people/:id`, (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person) {
        return res.status(404).json({success : false,msg :`No person with id: ${id}`});
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})
