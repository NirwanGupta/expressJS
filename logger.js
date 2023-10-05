const logger = (req,res,next)=>{ // with help of 'next' the req,res of app.get are provided here
    const url =req.url;
    const time =new Date().getFullYear();
    const method =req.method;
    console.log(method,url,time);
    //res.send('Hello') //--> by this the power of middleware can be understood --> this statement overwrites the next coming call of app.get() Home page,, this is because one req to home url can only give one response which is this one -> on the other res.send() i.e. of the app.get() home the error in shown in log

    next();// without providing this the middleware call doesn't get passed to the next middleware i.e. here the app.get() of home page
}

module.exports = logger;