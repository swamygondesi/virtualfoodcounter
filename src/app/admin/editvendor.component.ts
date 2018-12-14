import { Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FCDetailService} from '../foodcounter/fcdetail.service';
import {AdminService} from './admin.service';

@Component({
  selector:'edit-vendor',
  templateUrl:'./editvendor.component.html',
  styleUrls:['./editvendor.component.css']
})

export class EditVendorComponent {
  title: string = 'Edit Vendor';
  vendor: any;
  user:any;
  id: any;
  constructor(private _adminService:AdminService,
              private router:Router,
              private route:ActivatedRoute,
              private _fcService:FCDetailService){}

  ngOnInit():void{
    this.route.params.forEach((param:Params) => {
      console.log('param = '+param['id']);
      this.id = param['id'];
    });
    console.log('ID='+this.id);

    this.vendor = this._fcService.getFoodCounterById(this.id).subscribe(
      (vendor:any) => this.vendor = vendor,
      err => console.log(err)
    );
    console.log('vendor = '+this.vendor);
    this.user = this._adminService.getUser(this.id).subscribe(
      (user:any) => {
        this.user =user;
        console.log('user ='+user+ ' name = '+ user.username+ ' pass = '+user.password);
      },
      err => console.log(err)
    );
    console.log('user = '+this.user);
  }

  onSubmit(formValue:any){
    console.log('Form Value ='+JSON.stringify(formValue,null,4));
    let vendor = {
      id: this.id,
      name: formValue.name,
      abstract:formValue.abstract,
      description:formValue.description,
      imagename:formValue.imagename,
      username:formValue.username,
      password:formValue.password,
      role:'vendor'
    }
    console.log('update Vendor='+vendor);
    this._adminService.updateVendor(vendor).subscribe(
      (vendor:any) => this.vendor
    );
    this.router.navigate(['/admin']);
  }

}
