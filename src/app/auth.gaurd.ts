import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {UserloggedinService} from './userloggedin.service';
@Injectable()
export class Authgaurd implements CanActivate{
    constructor(private authService:UserloggedinService,private router:Router){

    }
 canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
return this.authService.authInfo
.map(authInfo => authInfo.isUserLoggedIn())
.take(1)
.do(allowed =>{
if(!allowed)
this.router.navigate(['/register']);
}
)
 }

 
}