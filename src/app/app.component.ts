import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "./user-service.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linkedin';




  constructor(private userService: UserServiceService){

  }


}

