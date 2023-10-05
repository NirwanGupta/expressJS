const express = require('express');
const app =express();
const { products } =require('../data');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
})

// app.get('/api/products',(req,res)=>{
//     res.json(products);// all the fields get printed
// })

//If only selected fields have to be accessed
app.get('/api/products',(req,res)=>{
    const newProduct= products.map((product)=>{
        const {id,name,image} =product;
        return {id,name,image};
    })
    res.json(newProduct);
})

// If only a selected data id has to be selected

app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product)=> product.id===1);
    res.json(singleProduct);
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Error PAGE NOT FOUND!!</h1>');
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})