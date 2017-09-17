import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
public name: String;
  constructor() {
    this.name = 'abcs';
    
   }

  ngOnInit() {
    
  }
  show(){
console.log(this.name);
  }
  //sole.log(this.person.name);

}
