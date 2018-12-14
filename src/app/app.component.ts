import { Component, OnInit } from '@angular/core';
import {FCDetailService} from './foodcounter/fcdetail.service';
import {Router} from '@angular/router';
import {AuthenticateService} from './authentication/authenticate.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username : string;
  isLoggedIn : boolean= false;

  constructor(private router: Router,public authService: AuthenticateService) {

  }
  ngOnInit() {
    this.username = localStorage.getItem('token');
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')|| 'false');
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
