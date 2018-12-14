import { Component, OnInit,HTMLElement} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FCDetailService} from '../foodcounter/fcdetail.service';
import {MenuService} from './menu.service';
import {OrderService} from '../orders/order.service';

@Component({
  selector:'vendor-root',
  templateUrl:'./vendor.component.html',
  styleUrls:['./vendor.component.css']
})

export class VendorComponent {
  title= 'Menu Items';
  foodcounter: any;
  id: any;
  ismenu: boolean;
  orders: any;
  ready: boolean = false;
  element:HTMLElement;

  constructor(private _fcService:FCDetailService,
              private _menuService:MenuService,
              private _orderService:OrderService,
              private route:ActivatedRoute,
              private router:Router){}

  ngOnInit():void {
  //  console.log('Route params = '+this.route.params.map(p=>p.id));
    this.route.params.forEach((param:Params) => {
        console.log('param = '+param['id']);
        this.id = param['id'];
    });
    console.log('Food Counter Id='+this.id);
    this.foodcounter = this._fcService.getFoodCounterById(this.id).subscribe((foodcounter:any) => this.foodcounter = foodcounter, err =>console.log("Error = "+err));
    //console.log('Food Counter Detail = '+JSON.stringify(this.foodcounter));
    //this.menu = this.foodcounter.menu;
    console.log('Menu = '+this.foodcounter.menu);
    this.orders = this._orderService.getAllOrders(this.id).subscribe(
      (orders:any)=> this.orders = orders,
      err => console.log('Error ='+err);
    );
  }

  deleteIssue(menuId) {
    this._menuService.deleteMenu(this.id,menuId).subscribe(
      (foodcounter:any) => this.foodcounter = foodcounter
    );
    this.ngOnInit();
  }

  status(ordernumber:string){
    this._orderService.updateStatus(ordernumber).subscribe(
      (res:any)=>console.log('updated Status'+res),
      err => console.log('Error ='+err);
    );
    this.element = document.getElementById(ordernumber) as HTMLElement;
    this.element.disabled = true;
    //this.ready= true;
  }
}
