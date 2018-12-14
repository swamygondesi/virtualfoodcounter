import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FCDetailService} from '../foodcounter/fcdetail.service';
import {AdminService} from './admin.service';

@Component({
  selector:'admin-root',
  templateUrl:'./admin.component.html',
  styleUrls:['./admin.component.css']
})

export class AdminComponent {
  title: string = 'Adminstration';
  foodcounters: any;

  constructor(private _fcService:FCDetailService,
              private router:Router,
              private _adminService:AdminService){}

  ngOnInit(){
    this.foodcounters = this.getFoodCounters();
    console.log('On load food counters ='+this.foodcounters);
  //  this.count = JSON.stringify(this.foodcounters).length;
  //  console.log('FC count = '+this.count);
  }

  getFoodCounters(){
    this._fcService.getFoodCounters().subscribe(
      (foodcounters:any)=> this.foodcounters = foodcounters,
      err => console.log(err)
    );
  }

  deleteIssue(foodcounterid:any) {
    this._adminService.deleteVendor(foodcounterid).subscribe(
      (foodcounters:any) => this.foodcounters = foodcounters,
      err => console.log(err)
    );
    this.ngOnInit();
  }
}
