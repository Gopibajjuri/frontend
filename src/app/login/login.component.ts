import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  i=0;
  @ViewChild('f') form: NgForm | undefined;
  constructor(private userService: UserServiceService , private router: Router, private dataServive: DataService) {}
  l=this.dataServive.logincheck;
  checkDetails() {

    console.log(this.form);
    // @ts-ignore
    let u = new User(this.form.value.username, this.form.value.password);


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
