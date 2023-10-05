const authorize = (req,res,next)=>{
    const {name} =req.query;
    if(name === 'john')
    {
        console.log("Authorized");
        req.user={name :"john",id :3};
        next();
    }
    else
        res.status(401).send("Unauthorized");
}
// we are displaying the next middleware only when the authorization is completed

module.exports=authorize;