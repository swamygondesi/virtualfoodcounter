import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FCDetailService} from '../foodcounter/fcdetail.service';
import {DataService} from '../data/data.service';

@Component({
  selector: 'fc-detail',
  templateUrl: './fcdetail.component.html',
  styleUrls:['./fcdetail.component.css']
})

export class FCDetailComponent implements OnInit {
  title = 'Food Counter Details';
  foodcounter: any;
  categories: any;
  id: any;
  quantity: any =[];
  orderDetail: any;
  constructor(private _fcService:FCDetailService, private route:ActivatedRoute,private router:Router,private data: DataService){}

  ngOnInit():void {
  //  console.log('Route params = '+this.route.params.map(p=>p.id));
    this.route.params.forEach((param:Params) => {
        console.log('param = '+param['id']);
        this.id = param['id'];
    });
    console.log('Food Counter Id='+this.id);
    this.foodcounter = this._fcService.getFoodCounterById(this.id).subscribe((foodcounter:any) => this.foodcounter = foodcounter, err =>console.log("Error = "+err));
    console.log('Food Counter Detail = '+this.foodcounter);
    this.data.currentMessage.subscribe(orderDetail=>this.orderDetail);
  }

  onSubmit(formValue: any) {
    console.log("Form Value = "+JSON.stringify(formValue,null,4));
    console.log("item ="+formValue.itemname1);
    console.log("Length = "+this.foodcounter.menu.length);
    let orderDetail = {
      ordernumber:Math.floor(Math.random() * (999999 - 100000)) + 100000,
      counterid:this.foodcounter._id,
      countername: this.foodcounter.name,
      counterimage: this.foodcounter.imagename,
      formvalue: JSON.stringify(formValue,null,4)
    };
    console.log('Order Details = '+JSON.stringify(orderDetail));
    this.data.changeMessage(JSON.stringify(orderDetail));
    this.router.navigate(['/orderdetails',orderDetail.ordernumber]);
  }
  // increment(index):void {
  //   console.log('index = '+index);
  //   this.quantity[index] = this.quantity[index]+1;
  //   console.log('quantity value = '+this.quantity[index]);
  // }
  //
  // decrement(index):void {
  //   console.log('index = '+index);
  //   this.quantity[index] =this.quantity[index]-1;
  //   console.log('quantity value = '+this.quantity[index]);
  // }
}
