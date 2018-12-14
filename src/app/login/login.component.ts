import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector:'login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent {
  title: string = 'Login';
  role:string;

 constructor(private _loginService:LoginService,private router:Router){}

 onSubmit(formValue:any) {
   console.log('Form Value ='+JSON.stringify(formValue,null,4));
  this.role = this._loginService.loginUser(formValue.username,formValue.password).subscribe(
    (res:any) =>{
      if(res!= null) {
        console.log('res = '+res.role);
        if(res.role == "vendor"){
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', res.username);
          this.router.navigate(['/vendor',res.counterid]);
        } else if(res.role == "admin"){
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', res.username);
          this.router.navigate(['/admin']);
        } else if(res.role == "enduser") {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', res.username);
          this.router.navigate(['']);
       } else {
         this.router.navigate(['/login'],{queryParams:{error:'Invalid credentials'}});
       }
     } else {
       this.router.navigate(['/login'],{queryParams:{error:'Invalid credentials'}});
     }
    },
    err => {
      console.log("Error = >"+err);
     }
    );
 }
}
