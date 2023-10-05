const express =require('express');
const app =express();
const {products} = require('../data');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
})

app.get('/api/products/:productID',(req,res)=>{
    const {productID} =req.params;
    const singleProduct = products.find((product)=>product.id===Number(productID));
    if(!singleProduct)
        return res.status(404).send('Product not Found!!');
    res.json(singleProduct);
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length < 1){
        // return res.status(200).send('no products matched your search');
        return res.status(200).json({success : true ,data : []});
    }
    res.status(200).json(sortedProducts);
})


app.all('*',(req,res)=>{
    res.status(404).send("Page not Found");
})

app.listen(5000,()=>{
    console.log("Server is running at port 5000...");
})