import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

//import "rxjs/add/operator/map";

@Injectable()
export class FCDetailService {

  private _FCURL = "/fcroot";
  private foodCounters: any;
  private foodCounter: any;
  private servicecharge: any;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Headers':'*'
    })
  };

  constructor(private _http:HttpClient) {}

// Get All FoodCounter Details
  getFoodCounters() {
    let fcURL = `${this._FCURL}/foodcounters`;
    this.foodCounters = this._http.get(fcURL);
    console.log('foodCounters = '+JSON.stringify(this.foodCounters));
    return this.foodCounters;
  }

// Get a Food Counter by it's _id
  getFoodCounterById(id:any){
    let FCByIdURL = `${this._FCURL}/foodcounters/${id}`;
    console.log('URL = '+FCByIdURL);
    this.foodCounter = this._http.get(FCByIdURL);
    console.log('FC = '+JSON.stringify(this.foodCounter));
    return this.foodCounter;
  }

  getServiceCharges(id:any) {
    let fcURL = `${this._FCURL}/foodstall/service/${id}`;
    console.log('service URL ='+fcURL);
    this.servicecharge = this._http.get(fcURL);
    console.log('Service charge JSON ='+JSON.stringify(this.servicecharge));
    return this.servicecharge;
  }
}
