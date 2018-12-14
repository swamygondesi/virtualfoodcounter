import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MenuService} from './menu.service';
import {FCDetailService} from '../foodcounter/fcdetail.service';

@Component({
  selector:'edit-menu',
  templateUrl:'./editmenu.component.html',
  styleUrls:['./editmenu.component.css']
})

export class EditMenuComponent {
  title: string  = 'Edit Menu';
  counterid: any;
  menuid: any;
  menu: any;
  foodcounter: any;
  index:number;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private _menuService:MenuService,
              private _fcService:FCDetailService){}

  ngOnInit():void{
    this.route.params.forEach((param:Params) => {
      this.menuid = param['id'];
      this.counterid = param['fcid'];
    });
    console.log('ID='+this.counterid);
    console.log('Menu ID='+this.menuid);
    this.foodcounter = this._fcService.getFoodCounterById(this.counterid).subscribe((foodcounter:any) => this.foodcounter = foodcounter, err =>console.log("Error = "+err));
    console.log('Food Counter Detail = '+this.foodcounter);

  }

  onSubmit(formValue:any,index:Number) {
    console.log('Form Value ='+JSON.stringify(formValue,null,4));
    console.log('Index = '+index);
    let menu = {
      counterid:this.counterid,
      menuid: this.menuid,
      index:index,
      category:formValue.category,
      itemname:formValue.itemname,
      recipe:formValue.recipe,
      preparetime:formValue.preparetime,
      price:formValue.price
    }
    console.log('Edit Menu = '+menu);
    this._menuService.updateMenu(menu).subscribe(
      (menu:any) => this.menu
    );
    this.router.navigate(['/vendor',this.counterid]);
  }
}
