import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
//import {WebStorageModule, LocalStorageService} from "angular2-localstorage";
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import {Ng2Webstorage} from 'ng2-webstorage';
import { LoginComponent } from './login/login.component';
import { UserloggedinService } from './userloggedin.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StudentlistingComponent } from './studentlisting/studentlisting.component';
import {Authgaurd} from './auth.gaurd';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { Http,HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    RegisterUserComponent,
    StudentlistingComponent,
    LogoutComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    ReactiveFormsModule,
     FormsModule,
      HttpModule,
     
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
        
      },
      {
        path: 'register',
        component: RegisterUserComponent
      },
      {
        path: 'list-students',
        component: StudentlistingComponent,
        canActivate: [UserloggedinService]
      },

    ])
  ],
  providers: [LocalStorageService,UserloggedinService,Authgaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
