import {Injectable} from '@angular/core';
import {StorageServiceModule} from 'angular-webstorage-service';

@Injectable()
export class AuthenticateService {

  constructor(){}

  logout(): void {
      localStorage.setItem('isLoggedIn', "false");
      localStorage.removeItem('token');
    } 
}
