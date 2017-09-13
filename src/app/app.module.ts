import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import {LocalStorageService} from 'angular2-localstorage/LocalStorageEmitter';
import {Ng2Webstorage} from 'ng2-webstorage';
import { LoginComponent } from './login/login.component';
import { UserloggedinService } from './userloggedin.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StudentlistingComponent } from './studentlisting/studentlisting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    StudentlistingComponent
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterUserComponent
      },

    ])
  ],
  providers: [LocalStorageService,UserloggedinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
