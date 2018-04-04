const express=require('express');
var app=express();
const http=require('http');
const path=require('path');
var server=http.createServer();
app.use(express.static(__dirname+'/../FrontEnd/HMS-UI/dist'))

const port =process.env.PORT ||5221;
// app.get('/', function (req, res,next) {
//     res.sendFile(path.join(__dirname + '/../FrontEnd/HMS-UI/dist'));
//     next();
// });
app.get('/',function (req,res,next) {
    res.redirect('/');
// res.render('index');    
})
app.listen(port,()=>{
    console.log(`port listening to ${port}`);
})