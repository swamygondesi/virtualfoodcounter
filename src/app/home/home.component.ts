import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {FCDetailService} from '../foodcounter/fcdetail.service';

@Component({
  selector:'home-app',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})

export class HomeComponent {
  title = 'Food Counters';
  foodcounters: any;
  count = Number;

  constructor(private _fcService:FCDetailService, private router:Router){}

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

  getCount() {
    return JSON.stringify(this.getFoodCounters()).length;
  }
}
