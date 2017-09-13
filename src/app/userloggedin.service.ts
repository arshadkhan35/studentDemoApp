import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

@Injectable()
export class UserloggedinService{

  constructor(private storage:LocalStorageService) { 
     this.storage.store('name','arshad');
  }
 
isUserLoggedIn(){
  return true;
}
}
