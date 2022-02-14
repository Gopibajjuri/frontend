import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {UserServiceService} from "../user-service.service";
import {RegisterService} from "../register.service";
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @ViewChild('f') form: NgForm | undefined;
  genders=['male', 'female'];
  p='';
  cP='';
  i=0;
  a: string="p";
  b: string="cP";
  private error: boolean=false;
  constructor(private rs:RegisterService, private userService:UserServiceService, private router: Router, private dataService: DataService) {
  }


  addUser() {
    console.log(this.form?.value)
    let u = new User(this.form?.value.userName, this.form?.value.password, this.form?.value.firstName, this.form?.value.lastName, this.form?.value.headLine, this.form?.value.mailId, this.form?.value.dob, this.form?.value.gender, this.form?.value.address, this.form?.value.phoneNo);

    this.rs.save(u).subscribe(responseData => {
        let user = responseData
        this.error = true;
        if (user != null) {
          this.dataService.user = user;
          this.dataService.logincheck = 1;
          this.router.navigate(['']);
        } else {
          this.i = 1;
        }

      },
      error => {
        this.error = true;
        console.log("Could not register. Account already exists!");
        this.i=1;
      }
    );
  }


  back(){
    this.router.navigate(['']);
  }
}
