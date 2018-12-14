import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import "rxjs/add/operator/map";

@Injectable()
export class OrderService{
  private _FCURL  = "/fcroot/order";
  private order:any;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Headers':'X-My-Custom-Header'
    })
  };

  constructor(private _http:HttpClient) {}

  getOrder(id:string){
    let orderURL = `${this._FCURL}/${id}`;
    console.log('Order URL ='+orderURL);
    this.order =this._http.get(orderURL);
    return this.order;
  }

  setOrder(orderDetails:any) {
    let orderURL = `${this._FCURL}/create`;
    return this._http.post(orderURL,orderDetails,this.httpOptions);
  }

  getAllOrders(counterid:string){
    let orderURL = `${this._FCURL}/all/${counterid}`;
    return this._http.get(orderURL);
  }

  updateStatus(counterid:string) {
    let orderURL = `${this._FCURL}/${counterid}`;
    return this._http.put(orderURL,this.httpOptions);
  }
}
