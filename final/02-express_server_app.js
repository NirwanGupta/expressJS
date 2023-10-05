/*const express =require('express');
const path =require('path');

const app = express();

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    console.log("resource not found");
    res.status(404).send("PAGE NOT FOUND!!");
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000...")
}) */

const express =require('express');
const path =require('path');

const app = express();

app.use(express.static('./public'))  // all static.. as index.html is also a static file.. and runs by default

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'../navbar-app/index.html'))
// })

app.all('*',(req,res)=>{
    console.log("resource not found");
    res.status(404).send("PAGE NOT FOUND!!");
})

app.listen(5000,()=>{
    console.log("Server is listening to port 5000...")
})