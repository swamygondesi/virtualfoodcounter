import {Routes, RouterModule} from '@angular/router';
import {FCDetailComponent} from './foodcounter/fcdetail.component';
import {OrdersComponent} from './orders/orders.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
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


const appRoutes: Routes = [
{path: 'fcdetail/:id',component: FCDetailComponent},
{path:'orderdetails/:id',component:OrdersComponent},
{path:'admin',component:AdminComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'vendor/:id',component:VendorComponent},
{path:'addvendor',component:AddVendorComponent},
{path:'editvendor/:id',component:EditVendorComponent},
{path:'editmenu/:id/:fcid', component:EditMenuComponent},
{path:'addmenu/:id/:index',component:AddMenuComponent},
{path: '', component:HomeComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactComponent},
{path:'feedback',component:FeedbackComponent},
{path:'thankyou',component:ThankyouComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
