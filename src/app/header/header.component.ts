import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {DataService} from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dataService: DataService) { }


  ngOnInit(): void {

  }

}
