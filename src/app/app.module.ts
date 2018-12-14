import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import {AuthenticateService} from './authentication/authenticate.service';
import {OrderService} from './orders/order.service';


import { AppComponent } from './app.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {OrdersComponent} from './orders/orders.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FCDetailService} from './foodcounter/fcdetail.service';
import {FCDetailComponent} from './foodcounter/fcdetail.component';
import {DataService} from './data/data.service';
import {LoginService} from './login/login.service';
import {AdminService} from './admin/admin.service';
import {MenuService} from './vendor/menu.service';
import {AddVendorComponent} from './admin/addvendor.component';
import {EditVendorComponent} from './admin/editvendor.component';
import {EditMenuComponent} from './vendor/editmenu.component';
import {AddMenuComponent} from './vendor/addmenu.component';
import {LoginComponent} from './login/login.component';
import {VendorComponent} from './vendor/vendor.component';
import {SignupComponent} from './login/signup.component';
import {ThankyouComponent} from './support/thankyou.component';
import {FeedbackComponent} from './support/feedback.component';
import {ContactComponent} from './support/contact.component';
import {AboutusComponent} from './support/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,AdminComponent,FileSelectDirective,EditMenuComponent,AddMenuComponent,
    AddVendorComponent,VendorComponent,LoginComponent,EditVendorComponent,FooterComponent,FCDetailComponent,
    HomeComponent,OrdersComponent,SignupComponent,
    ThankyouComponent,FeedbackComponent,ContactComponent,AboutusComponent
  ],
  imports: [
    BrowserModule, routing,HttpModule,
    HttpClientModule,FormsModule
  ],
  providers: [LoginService,MenuService,
    AuthenticateService,FCDetailService,DataService,
    AdminService,OrderService],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
