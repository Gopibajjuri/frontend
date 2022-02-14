import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";
import {EducationService} from "../education.service";
import {Education} from "../education";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  EducationList: Education[] = [];

  constructor(public dataService: DataService, private educationService: EducationService, private router: Router) {
  }

  ngOnInit(): void {
    this.educationService.getEducationDetails(this.dataService.user).subscribe(responseBody => {
      let List = responseBody
      console.log(List);
      for (let i = 0; i < List.length; i++) {
        let edu = List[i];
        this.EducationList[i] = edu;
      }
    });

  }

  addEducation() {
    this.router.navigate(['/addEducation'])
  }

  editDetails(education: Education){
    this.dataService.editEducation=education;
    this.router.navigate(["/editEducation"]);
  }

  deleteEducation(education: Education){
    this.educationService.deleteEducationDetails(education).subscribe(responseBody=>{
      this.router.navigate(["/profile"])
    });
  }
}
