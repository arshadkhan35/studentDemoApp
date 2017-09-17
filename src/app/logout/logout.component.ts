import { Component, OnInit } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { Router} from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
public loginData : object ;
  constructor(private storage: LocalStorageService,private router: Router) {
    this.loginData = this.storage.retrieve('loggedindata');
   }
                
  ngOnInit() {
  }

}
