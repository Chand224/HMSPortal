import * as express from 'express';
import * as bodyparser from 'body-parser';
// import routes from './Routes'

class App {
    constructor() {
        this.app=express();
        
    }
public app: express.Application;
call:number=0;

private middleware():void{
    this.app.use(express.static(__dirname + '/../../FrontEnd/HMS-UI/dist'));
    this.app.use(bodyparser.json());
    this.app.use((req,res,next)=>{
        this.call=this.call+1;
        console.log(`Hello you have call for api for ${this.call}`);
        next();
    });
}

private routes():void{

}
}