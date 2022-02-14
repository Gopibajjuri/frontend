import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from "../../user-service.service";
import {DataService} from "../../data.service";
import {User} from "../../user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @ViewChild('f') form: NgForm | undefined;

  constructor(private router: Router, private userService: UserServiceService, private dataService: DataService) {
  }

  user: User = this.dataService.user;

  ngOnInit() {

    console.log(this.user)
  }

  editProfile()
    {


        let u = new User(this.user.username, this.user.password, this.form?.value.firstName, this.form?.value.lastName,
          this.form?.value.headLine, this.form?.value.mailId, this.form?.value.dob, this.form?.value.gender,
          this.form?.value.address, this.form?.value.phoneNo);
        u.id=this.user.id;
        /*let u = new User(this.user.username, this.user.password, this.user.firstName, this.form?.value.lastName,
          this.form?.value.headLine, this.form?.value.mailId, this.form?.value.dob, this.form?.value.gender,
          this.form?.value.address, this.form?.value.phoneNo);*/
        console.log(this.user, u)
        this.userService.updateProfile(u).subscribe(responseData => {
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
