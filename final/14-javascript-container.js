const express =require('express');
const app=express();
const people = require(`./Routes/people_for_container`);
const auth = require(`./Routes/auth`);

// static assets
app.use(express.static('./methods-public')); // using the express.static() middleware -->the root folder is the outside only after ./

//parse form data
app.use(express.urlencoded({extended : false}));
//parse json
app.use(express.json());

app.use(`/api/people`,people);
app.use(`/login`,auth);

app.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})
