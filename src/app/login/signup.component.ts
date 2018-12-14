import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';


@Component({
  selector:'signup',
  templateUrl:'./signup.component.html',
  styleUrls:['./signup.component.css']
})

export class SignupComponent {
  title: string = 'SignUp';
  user:any;
  constructor(private _loginService:LoginService,private router:Router){}

   onSubmit(formValue:any) {
     console.log('Form Value ='+JSON.stringify(formValue,null,4));
     let newUser:any = {};
     newUser.username = formValue.username;
     newUser.password = formValue.password;
     newUser.role = "enduser";
     newUser.counterid = "";
     this.user = this._loginService.registerUser(newUser).subscribe(
       (user:any) => this.user=user
     );
     console.log('User = '+JSON.stringify(this.user));
   }
}
