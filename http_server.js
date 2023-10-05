const http =require('http');
const {readFileSync} =require('fs');

const homePage = readFileSync('./Express.js/navbar-app/index.html');
const homeStyle = readFileSync('./Express.js/navbar-app/styles.css');
const homeLogo = readFileSync('./Express.js/navbar-app/logo.svg');
const homeLogic = readFileSync('./Express.js/navbar-app/browser-app.js');


const server = http.createServer((req,res)=>
{
    // console.log(req.method);// Tells the type of response expected. Here --> GET
    if(req.url === '/'){
        res.writeHead(200,'content-type : text/html'); // text/plain mein puura text hi print ho jaayega
        res.write(homePage);
        res.end();
    }
    else if(req.url==='/styles.css'){
        res.writeHead(200,'content-type : text/css');
        res.write(homeStyle);
        res.end();
    }
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type' : 'image/svg+xml'}); //{ meinn alag alag '' karke likha to sahi aaya..}
        res.write(homeLogo);                                   // 'content-type : image/svg+xml' aise logo load nhi hua
        res.end();
    }
    else if(req.url==='/browser-app.js'){
        res.writeHead(200,'content-type : text/javascript');
        res.write(homeLogic);
        res.end();
    }
    else if(req.url === '/about'){
        res.writeHead(200,'content-type: text/html');
        res.write(`<h1> About Page </h1>`);
        res.end();
    }
    else{
        res.writeHead(404,'content-type : text/html');
        res.write(`<h1> PAGE NOT FOUND!!</h1>`);
        res.end();
    }
})

server.listen(5000);