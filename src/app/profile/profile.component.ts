import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  constructor(public dataService: DataService, private router: Router) { }
  editProfile(){
    this.router.navigate(["/editProfile"]);
  }
}
