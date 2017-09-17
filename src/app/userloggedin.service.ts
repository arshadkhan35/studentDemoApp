import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { Router} from '@angular/router';
import { Http,Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable()
export class UserloggedinService{
public authInfo;
  constructor(private storage:LocalStorageService,private router:Router,private _http: Http) { 
  }
 canActivate(){
   if(!this.storage.retrieve('loggedin')){
  this.router.navigate(['login']);
   }else{
     return true;
   }
   
  // return true;
 }

 loginUser (name,password) {
   console.log(name + ' ' + password);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let _url: string = 'http://localhost/studentDemo/user/login?_format=json';
    let options = new RequestOptions({ headers: header });
    return this._http.post(_url,{"name": name,"pass": password},options)
    .map((res: Response) => res.json());
 }

}
