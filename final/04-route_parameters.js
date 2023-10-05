const express = require('express');
const app =express();
const {products} =require('../data');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const{id,name} =product;
        return {id,name};
    })
    res.json(newProduct);
})

// calling a specific id using route_parameters or params
app.get('/api/products/:productID',(req,res)=>{
    //    console.log(req);
    //    console.log(req.params); // this is a object which stores a parameter productID with the value of productID that is input in the browser

    const {productID} =req.params;
    const singleProduct = products.find((product)=>product.id===Number(productID));
    if(!singleProduct)
        return res.status(404).send('PRODUCT NOT FOUND!!');

    return res.json(singleProduct); // bina return likhe bhi statement execute ki jaa skti hai..
})

// more complex route parameters can be made.. for ex.
app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    res.status(200).send("<h1>Hello World</h1>");
})

app.get('*',(req,res)=>{
    res.status(404).send("ERROR!! PAGE not found");
})

app.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})