import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='';
  password='';
  i=0;

  constructor(private userService: UserServiceService , private router: Router, private dataServive: DataService) {}
  l=this.dataServive.logincheck;
  checkDetails() {
    // @ts-ignore
    let u = new User(this.username, this.password);


    this.userService.findByUsernameAndPassword(u).subscribe(responseData => {
      let user = responseData
      console.log(user);

      if(user!=null){
        this.dataServive.user=user;
        this.router.navigate(['/profile']);
      }
      else{
        this.router.navigate(['']);
        this.i=1;
      }


    });

  }
}
