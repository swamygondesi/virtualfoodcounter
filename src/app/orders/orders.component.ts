import {Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import {FCDetailService} from '../foodcounter/fcdetail.service';
import {DataService} from '../data/data.service';
import {Item} from './item';
import {OrderService} from './order.service';

@Component({
  selector:'orders-app',
  templateUrl:'./orders.component.html',
  styleUrls:['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  show:boolean = false;
  showIn:boolean = false;
  title = 'Order Details';
  orderDetail:any;
  countername: string;
  formValue: string;
  charges: any;
  total: Number;
  progress: boolean = false;
  ordernumber: string;
//  sCharge:Number;
//  gst:Number;
  OrderItems: any;
  //index: number = 1;
  constructor(private data: DataService,
              private _fcService:FCDetailService,
              private _orderService:OrderService,
              private route:ActivatedRoute,
              private router:Router) { }
  toggle(){
    this.show = !this.show;
  }
  toggleIn(){
    this.showIn = !this.showIn;
    // insert
    this._orderService.setOrder(this.OrderItems).subscribe(
      (res:any)=>this.OrderItems = res
    );
    console.log('Order details sent to DB');
  }
  ngOnInit() {
    this.route.params.forEach((param:Params) => {
        console.log('param = '+param['id']);
        this.ordernumber = param['id'];
    });
    console.log('Order number ='+this.ordernumber);
    let counterOrder = {};
    this.data.currentMessage.subscribe(orderDetail => this.orderDetail = orderDetail);
    //this.Items = new Array[50];

    var Items:any[] = new Array();
    var tempid;
    var index= 0;
    console.log('Order details = '+this.orderDetail);
    if(this.orderDetail == 'Initiation') {
      this.OrderItems = this._orderService.getOrder(this.ordernumber).subscribe(
        (res:any) => {
          //console.log('Response = '+JSON.parse(res));
          this.OrderItems = res;
          console.log('Counterid ='+res.counterid);
          tempid = res.counterid;
          console.log('status ='+res.status);
          this.progress = res.status;
          res.order.forEach(function(order){
            console.log('Price = '+order.price);
            index = index+order.price;
          });

          this.total = index;
          console.log('Total ='+this.total+' tempid ='+tempid);
           this.charges = this._fcService.getServiceCharges(tempid).subscribe(
             (charges:any) => this.charges = charges, err => console.log("Error ="+err));
           console.log('Charges = '+this.charges);
        },
        err=>{
          console.log("Error = >"+err);
        }
      );
      this.show = !this.show;
      this.showIn = !this.showIn;
    } else {
    JSON.parse(this.orderDetail , function (key,value){

    if(key != null && key == "ordernumber"){
      counterOrder['ordernumber'] = value;
    }
    //counterid
    if(key != null && key == "counterimage") {
      counterOrder['counterimage'] =value;
    }
    if(key != null && key == "counterid") {
      counterOrder['counterid'] =value;
      tempid = value;
    }
    if(key != null && key == "countername") {
        //this.orderItems.countername = value;
      //  console.log('1 = '+value);
        this.countername = value;
        counterOrder['countername'] =value;
        //console.log('C Name = '+this.countername);
      }
      if(key != null && key == "formvalue") {
      //  console.log('2 = '+value);
        var formvalue = value;
        this.formValue = value;
      //  console.log('formValue = '+this.formValue);
      //  this.evaluate(this.formValue);
      //  Number index = 1;
       let order:any = {};
        var tempindex;
        var currentindex = 1;

        JSON.parse(this.formValue, function(k,v){
        //  console.log(k+' = '+v);

          if(k != null) {
            tempindex = k.substr(k.length-1);
            //console.log('tempindex = '+tempindex);
            if(tempindex != currentindex ){
              //console.log('order ='+JSON.stringify(order));
              //console.log('test = '+index+1);
            //  console.log('Order price ='+order.price);
              if(order.price != null) {
                index = index+order.price;
              Items.push(order);
              }
              //index++;
              order = {};
              currentindex = tempindex;
            }
            if(k.indexOf("itemname") > -1) {
              order['itemname'] = v;
            }
            if(k.indexOf("quantity") > -1) {
              order['quantity'] = v;
            }
            if(k.indexOf("price") > -1) {
              order['price'] = v;
            }
          }
        });
        console.log('Items = '+JSON.stringify(Items));
        counterOrder['order'] = Items;
        console.log('counterOrder = '+JSON.stringify(counterOrder));
      }
    });

    this.OrderItems = counterOrder;
    console.log("order details = "+this.OrderItems);
    console.log(this.OrderItems.countername);
    this.total = index;
    console.log('Total ='+this.total+' tempid ='+tempid);
     this.charges = this._fcService.getServiceCharges(tempid).subscribe(
       (charges:any) => this.charges = charges, err => console.log("Error ="+err));
     console.log('Charges = '+this.charges);
   }



    // this.sCharge = this.total*this.charges.servicecharge/100;
    // this.gst = this.total*this.charges.gst/100;
    // this.total = this.total+ () + ;
  }

}
