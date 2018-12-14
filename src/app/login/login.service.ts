import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import "rxjs/add/operator/map";

@Injectable()
export class LoginService {

  private _FCURL  = "/fcroot/login";
  private role:any;
  private userReg:any;
  private userdetails:any;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Headers':'X-My-Custom-Header'
    })
  };

  constructor(private _http:HttpClient) {}

  loginUser(username:string,password:string){
    let loginURL = `${this._FCURL}/user/${username}/${password}`;
    console.log('URL = '+loginURL);
    this.role = this._http.get(loginURL);
  //  console.log('Role =>'+JSON.stringify(this.role));
    return this.role;
  }

  registerUser(user:any){
    let registerURL = `${this._FCURL}/register`;
    this.userReg = this._http.post(registerURL,user,this.httpOptions);
    return this.userReg;
  }

  isUserName(userName:string){
    let usernameURL = `${this._FCURL}/username/${userName}`;
    this.userdetails = this._http.get(usernameURL);
    return this.userdetails;
  }


}
