import {Component} from '@angular/core';
import {User} from "../model/user";
import {Router} from "@angular/router";
import {RegisterService} from "../service/register.service";
import {DataService} from "../service/data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signupForm: FormGroup
  userExists=0;
  private error: boolean=false;
  constructor(private registerService:RegisterService, private router: Router, private dataService: DataService) {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'headLine': new FormControl(null, Validators.required),
      'mailId': new FormControl(null, [Validators.required,Validators.email]),
      'dob': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'phoneNo': new FormControl(null, [Validators.required,Validators.minLength(10)]),
      'address':new FormControl(null,Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required,Validators.minLength(8)]),
      'confirmPassword': new FormControl(null, Validators.required),
    })
  }
  addUser() {
    let tempUser = new User(this.signupForm?.value.username, this.signupForm?.value.password,
      this.signupForm?.value.firstName, this.signupForm?.value.lastName, this.signupForm?.value.headLine,
      this.signupForm?.value.mailId, this.signupForm?.value.dob, this.signupForm?.value.gender,
      this.signupForm?.value.address, this.signupForm?.value.phoneNo);

    this.registerService.save(tempUser).subscribe(responseData => {
        let user = responseData
        if (user != null) {
          this.dataService.user = user;
          this.dataService.logincheck = 1;
          this.router.navigate(['']);
        } else {
          this.userExists = 1;
        }
      },
      error => {
        this.error = true;
        this.userExists=1;
      }
    );
  }
  back(){
    this.router.navigate(['']);
  }
}
