const express = require('express');
var router=express.Router();
const app=express();

router.get('/login',(req,res,next)=>{
res.send("get router file is excuted time god");
});

router.get('/login/signup',(req,res,next)=>{
res.send("you are here to singup ++");
});

router.get('/login/check',(req,res,next)=>{
    res.send({name:"Shyam"});
});

module.exports=router;
