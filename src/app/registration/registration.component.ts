import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName = '';
  lastName = '';
  headLine = '';
  mailId = '';
  dob = '';
  gender='';
  address = '';
  phoneNo = 0;
  username='';
  password='';
  cPassword='';
  i=0;
  constructor(private rs:RegisterService, private userService:UserServiceService, private router: Router) {
  }


  addUser() {
    let u = new User(this.username,this.password,this.firstName, this.lastName, this.headLine, this.mailId, this.dob,this.gender, this.address, this.phoneNo);

    this.rs.save(u).subscribe(responseData => {
      let user = responseData
        if(user!=null){
          this.router.navigate(['/profile',user.id]);
        }
        else{
          this.i=1;
        }
    });
  }
}
