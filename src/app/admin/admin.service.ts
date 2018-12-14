import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

//import "rxjs/add/operator/map";

@Injectable()
export class AdminService {
  private vendor: any;
  private _FCURL = "/fcroot";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Headers':'X-My-Custom-Header'
    })
  };

  constructor(private _http:HttpClient) {}

  addVendor(newVendor:any) {
    let addVendorURL = `${this._FCURL}/admin/vendor`;
    return this._http.post(addVendorURL,newVendor,this.httpOptions);
  }

  updateVendor(updateVendor:any) {
    let id = updateVendor.id;
    let updateVendorURL = `${this._FCURL}/admin/vendor/${id}`;
    return this._http.put(updateVendorURL,updateVendor,this.httpOptions);
  }

  getUser(id){
    let userURL = `${this._FCURL}/login/user/${id}`;
    return this._http.get(userURL,this.httpOptions);
  }
  
  deleteVendor(id){
    let deleteVendorURL = `${this._FCURL}/admin/vendor/${id}`;
    return this._http.delete(deleteVendorURL);
  }
}
