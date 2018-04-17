import { Component, OnInit } from '@angular/core';
import{Http}from'@angular/http';
import {loginService  } from "./login-service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [loginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:loginService) { }

  ngOnInit() {


  }

  checkaccess(){
    console.log("click on login");
    this.loginservice.CheckLoginData().subscribe(res=>{
      console.log(res);
      alert(res);
    }),err=>{
      alert("error");
    };

  }

}
