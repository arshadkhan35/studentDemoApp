import { Component, OnInit } from '@angular/core';
import { UserloggedinService } from '../userloggedin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
flag;
  constructor(private user: UserloggedinService) { }
ngOnInit(){
this.flag = this.user.isUserLoggedIn();
}
 
loggin(){
  alert("logged in" + this.flag);
}
}
