const express = require('express');
const http=require('http');
const login=require('./routes/Authentication-login');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:5221',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}



// var server=http.createServer();
var app=express();
app.use(express.static(__dirname+'/../../FrontEnd/HMS-UI/dist'));
app.use(cors());
const port=process.env.port||5221;


function ensureAuthenticated(req, res, next) {
    console.log("shyam");
   
    if (true) {
        // req.session.originalUrl = req.originalUrl;
        res.redirect('/login');
        next();
    } else {
        return next();
    }
}

function onListening(){
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
    console.log("Onlistening");
}

app.all('/login*',login);

app.listen(port,()=>{
    console.log(`Port ${port} is open you can Configure it`);
});

