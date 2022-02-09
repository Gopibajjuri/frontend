import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UserServiceService} from "../user-service.service";
import {UserProfile} from "../user-profile";

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

  constructor(private route : ActivatedRoute, private us:UserServiceService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    let userProfile = new UserProfile(this.id);
    this.us.findById(userProfile).subscribe(responseBody=>{
       this.u=responseBody
      console.log(this.u);
    });
  }

}
