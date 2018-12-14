import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MenuService} from './menu.service';

@Component({
  selector:'add-menu',
  templateUrl:'./addmenu.component.html',
  styleUrls:['./addmenu.component.css']
})

export class AddMenuComponent {
  title: string = 'Add Menu';
  counterid: any;
  index:number;
  menu:any;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private _menuService:MenuService){}

  ngOnInit():void{
    this.route.params.forEach((param:Params) => {
      console.log('param[id] ='+param['id']);
      console.log('param[index] ='+param['index']);
      this.counterid = param['id'];
      console.log('ID='+this.counterid);
      this.index = param['index'];
      console.log('InDex='+this.index);
    });

  }

  onSubmit(formValue:any) {
    console.log('Form Value ='+JSON.stringify(formValue,null,4));
    let menu = {
      counterid:this.counterid,
      index:this.index,
      category:formValue.category,
      itemname:formValue.itemname,
      recipe:formValue.recipe,
      preparetime:formValue.preparetime,
      price:formValue.price
    }

    console.log('Menu = '+menu);
    this._menuService.addMenu(menu).subscribe(
      (menu:any) => this.menu
    );
    this.router.navigate(['/vendor',this.counterid]);
  }

}
