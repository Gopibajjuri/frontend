import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from "../../user-service.service";
import {DataService} from "../../data.service";
import {User} from "../../user";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router : Router, private userService: UserServiceService, private dataService: DataService) { }
  user: User=this.dataService.user;

  ngOnInit() {
    this.userService.deleteProfile(this.user).subscribe()
  }

  editProfile(){
    this.userService.saveProfile(this.user).subscribe(responseData=>{
      this.user=responseData
      if(this.user!=null){
        this.router.navigate([""]);
      }
    })
  }

}
