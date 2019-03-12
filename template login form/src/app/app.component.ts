import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temp';
  num = '+91';
  
  onSubmit(fm:NgForm){
    console.log(fm);
    let arr =[];
    arr.push({name:fm.value.username},{email:fm.value.email},{employee_id:fm.value.emp},{phone_no:fm.value.pno},{address:fm.value.address},{pincode:fm.value.pincode});
    console.log(arr);
  }
}
