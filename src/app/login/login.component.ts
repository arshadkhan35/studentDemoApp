import { Component, OnInit } from '@angular/core';
import { UserloggedinService } from '../userloggedin.service';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { Router} from '@angular/router';
//import {WebStorageModule, LocalStorageService} from "angular2-localstorage";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
flag;
public loginData: Object;
  constructor(private storage:LocalStorageService,private router: Router,private userLogin:UserloggedinService) { 

  }
ngOnInit(){
}
 
loggin(name:string,pass:string){
  //this.storage.clear('loggedindata');
  //this.storage.store('loggedin',false);
 this.userLogin.loginUser(name,pass).subscribe(res => this.storage.store('loggedindata',res),
 error => this.storage.clear('loggedindata')
);
   if(this.storage.retrieve('loggedindata') != null){
    this.storage.store('loggedin',true);
    this.router.navigate(['list-students']);
   }else{
    this.storage.clear('loggedindata');
     console.log("not logged in");
   }
 
  
}
}
