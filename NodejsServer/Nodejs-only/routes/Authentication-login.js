const express = require('express');
var router=express.Router();

router.get('/login',(req,res,next)=>{
res.send("get router file is excuted time god");
});

router.get('/login/signup',(req,res,next)=>{
res.send("you are here to singup ++");
});

module.exports=router;
