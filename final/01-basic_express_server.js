const express =require('express');

const app =express();

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Home Page</h1>`); // Passing status is optional, but it is usually preferred to pass it along the callback
});

app.get('/about',(req,res)=>{
    res.status(200).send(`<h1>About Page</h1>`);
});

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>PAGE NOT FOUND</h1>`);
});

app.listen(5000,()=>{
    console.log("Server is running at port 5000...");
})
