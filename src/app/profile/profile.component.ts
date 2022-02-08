import { Component, OnInit } from '@angular/core';
import {Profile} from "../profile";
import {ActivatedRoute} from "@angular/router";
import {User} from "../user";
import {UserServiceService} from "../user-service.service";
import {ProfileService} from "../profile.service";

// @ts-ignore
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  p = new Profile("Bajjuri", "Gopi", "student", "gopi@gmail.com", "23/06/2001", "Male", "hjbnjnok", 798);
  //profile: {firstname: string}
  id=0;

  constructor(private route : ActivatedRoute, private us:UserServiceService,private ps:ProfileService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.ps.findByUserId(this.id).subscribe(responseBody=>{
       this.p=responseBody
      console.log(this.p);
    });
  }

}
