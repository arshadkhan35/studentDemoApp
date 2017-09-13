import { Component } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { UserloggedinService } from './userloggedin.service';
import {LoginComponent} from './login/login.component';
import {RegisterUserComponent} from './register-user/register-user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public myName = '';
  flag;
 constructor(private user:UserloggedinService) {
  //this.flag = user.isUserLoggedIn();
 }
  title = 'app';
 if(flag){
   console.log(flag);
 }
 // window.sessionStorage.setItem("key", "value");

//@SessionStorage() public lastSearchQuery:Object = {};

}
