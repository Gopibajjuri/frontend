import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='';
  password='';
  i=0;
  constructor(private userService: UserServiceService , private router: Router) {}

  checkDetails() {
    // @ts-ignore
    let u = new User(this.username, this.password);


    this.userService.findByUsernameAndPassword(u).subscribe(responseData => {
      let user = responseData

      if(user!=null){

        this.router.navigate(['/profile',user.id]);
      }
      else{
        this.router.navigate(['']);
      }


    });

  }
}
