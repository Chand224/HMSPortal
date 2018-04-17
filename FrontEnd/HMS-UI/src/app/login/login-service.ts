import{Injectable}from'@angular/core';
import{Http}from'@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class loginService  {
    constructor(private http:Http){

    }

    CheckLoginData()
    {
        console.log("click on login and into service fie");
        console.log(this.http.get("localhost:5221/login/check").map(data => data.json()));

        return this.http.get("http://localhost:5221/login/check").map(data=> data.json());

    }

}