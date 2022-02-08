import { Component, OnInit } from '@angular/core';
import {Profile} from "../profile";
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
  firstname = '';
  lastname = '';
  headline = '';
  mail_id = '';
  dob = '';
  gender='';
  address = '';
  phone_no = 0;
  username='';
  password='';
  cPassword='';
  i=0;
  constructor(private rs:RegisterService, private userService:UserServiceService, private router: Router) {
  }


  addUser() {

    let p = new Profile(this.firstname, this.lastname, this.headline, this.mail_id, this.dob,this.gender, this.address, this.phone_no);
    let u = new User(this.username,this.password);

    this.userService.save(u).subscribe(responseData => {
      let user = responseData

      p.user_id = user.id;
      console.log(p,user,u);
      this.rs.save(p).subscribe(responseData => {
        let profile = responseData

        if(profile!=null){
          this.router.navigate(['/profile',profile.user_id]);
        }
        else{
          this.i=1;
        }
      });
    });
  }
}
