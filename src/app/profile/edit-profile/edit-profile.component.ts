import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from "../../service/user-service.service";
import {DataService} from "../../service/data.service";
import {User} from "../../model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent{
  profileForm: FormGroup
  user: User = this.dataService.user;
  constructor(private router: Router, private userService: UserServiceService, private dataService: DataService) {
    this.profileForm = new FormGroup({
      'firstName': new FormControl(this.user.firstName, Validators.required),
      'lastName': new FormControl(this.user.lastName, Validators.required),
      'headLine': new FormControl(this.user.headLine, Validators.required),
      'mailId': new FormControl(this.user.mailId, [Validators.required,Validators.email]),
      'dob': new FormControl(this.user.dob, Validators.required),
      'gender': new FormControl(this.user.gender, Validators.required),
      'address':new FormControl(this.user.address,Validators.required),
      'phoneNo': new FormControl(this.user.phoneNo, [Validators.required,Validators.minLength(10)])

    })
  }
  editProfile()
    {
        let tempUser = new User(this.user.username, this.user.password, this.profileForm?.value.firstName,
          this.profileForm?.value.lastName, this.profileForm?.value.headLine, this.profileForm?.value.mailId,
          this.profileForm?.value.dob, this.profileForm?.value.gender, this.profileForm?.value.address,
          this.profileForm?.value.phoneNo);
        tempUser.id=this.user.id;
        this.userService.updateProfile(tempUser).subscribe(responseData => {
          this.dataService.user = responseData
          if (this.dataService.user != null) {
            this.router.navigate(["/profile"]);
          }
        })
    }
  back() {
    this.router.navigate(["/profile"])
  }
}
