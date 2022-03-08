import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup,Validators} from "@angular/forms";
import {DataService} from "../service/data.service";
import {UserServiceService} from "../service/user-service.service";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  notValidCredentials = 0;
  check=this.dataService.logincheck;

  constructor(private userService: UserServiceService, private router: Router, private dataService: DataService) {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  checkDetails() {
    // @ts-ignore
    let tempUser = new User(this.loginForm.value.username, this.loginForm.value.password);
    this.userService.findByUsernameAndPassword(tempUser).subscribe(responseData => {
      let user = responseData
      if (user != null) {
        this.dataService.user = user;
        this.router.navigate(['/profile']);
      } else {
        this.router.navigate(['']);
        this.notValidCredentials = 1;
      }
    });
  }
}
