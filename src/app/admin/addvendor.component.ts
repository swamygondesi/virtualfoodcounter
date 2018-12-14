import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FCDetailService} from '../foodcounter/fcdetail.service';
import {AdminService} from './admin.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = '/fcroot/upload/image';
@Component({
  selector:'add-vendor',
  templateUrl:'./addvendor.component.html',
  styleUrls:['./addvendor.component.css']
})

export class AddVendorComponent {
  title: string = 'Add Vendor';
  counter:any;
  vendor: any;
  imagename:any;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private _adminService:AdminService,
              private router:Router){}

    ngOnInit() {
      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
           console.log('ImageUpload:uploaded:', item, status, response);
           console.log('File uploaded successfully'+item.file.name);
           this.imagename = item.file.name;
       };
   }

  onSubmit(formValue:any){
    console.log('Form Value ='+JSON.stringify(formValue,null,4));
    let vendor = {
      name: formValue.name,
      abstract:formValue.abstract,
      description:formValue.description,
      imagename:this.imagename,
      username:formValue.username,
      password:formValue.password,
      role:'vendor'
    }

    this._adminService.addVendor(vendor).subscribe(
      (vendor:any) => this.vendor
    );
    this.router.navigate(['/admin']);
  }

}
