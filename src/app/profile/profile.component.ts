import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user";
import {UserServiceService} from "../user-service.service";
import {UserProfile} from "../user-profile";
import {DataService} from "../data.service";

// @ts-ignore
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  // @ts-ignore
  u=new User();

  id=0;
  constructor(private route : ActivatedRoute, private us:UserServiceService, public dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.logincheck=0;
    if(this.dataService.user.username=='username'){
      this.router.navigate(['']);
    }

  }

  editProfile(user:User){
    this.dataService.logincheck=1;
    this.router.navigate(["/editProfile"]);

  }

}
