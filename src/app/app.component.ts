import { Component ,OnInit} from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { UserloggedinService } from './userloggedin.service';
import {LoginComponent} from './login/login.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loginflag: Boolean;
 constructor(private user:UserloggedinService,private storage: LocalStorageService,private router: Router) {
 
 //this.loginflag = !this.storage.retrieve('loggedin');

  
 }
 ngOnInit() {
  //this.loginflag = this.storage.retrieve('loggedin');
}
changeOfRoutes(){
  console.log(this.storage.retrieve('loggedin'));
  this.loginflag = !this.storage.retrieve('loggedin');
  
}
logout(){
  if(this.storage.retrieve('loggedin')){
    this.storage.clear('loggedin');
    this.storage.clear('loggedindata');
    this.router.navigate(['login']);  
  }
  //console.log(this.loginData);
}
  
 // window.sessionStorage.setItem("key", "value");

//@SessionStorage() public lastSearchQuery:Object = {};

}
