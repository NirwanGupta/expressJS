const express = require(`express`);
const router = express.Router();

router.post('/',(req,res)=>{
    const {name} =req.body;
    if(name){
        return res.status(400).send(`Welcome ${name}`);   
    }
    res.status(401).send('Please provide the credentials');
})

module.exports = router;