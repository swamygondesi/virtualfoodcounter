import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class MenuService {
  private menu:any;
  private _FCURL = "/fcroot";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Headers':'X-My-Custom-Header'
    })
  };

  constructor(private _http:HttpClient) {}

  addMenu(newMenu:any) {
    let id = newMenu.counterid;
    let addMenuURL = `${this._FCURL}/menu/${id}`;
    return this._http.post(addMenuURL,newMenu,this.httpOptions);
  }

  updateMenu(updateMenu:any){
    let id = updateMenu.counterid;
    let updateMenuURL = `${this._FCURL}/menu/${id}`;
    return this._http.put(updateMenuURL,updateMenu,this.httpOptions);
  }

  deleteMenu(vid,menuid) {
    let deleteMenuURL = `${this._FCURL}/menu/${menuid}/${vid}`;
    return this._http.delete(deleteMenuURL);
  }
}
