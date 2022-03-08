import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";
import {EducationService} from "../service/education.service";
import {Education} from "../model/education";
import { Router} from "@angular/router";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  EducationList: Education[] = [];
  constructor(public dataService: DataService, private educationService: EducationService, private router: Router) { }
  ngOnInit(): void {
    this.educationService.getEducationDetails(this.dataService.user).subscribe(responseBody => {
      let List = responseBody
      for (let i = 0; i < List.length; i++) {
        let education = List[i];
        this.EducationList[i] = education;
      }
    });
  }
  addEducation() {
    this.router.navigate(['/addEducation'])
  }
  editEducation(education: Education){
    this.dataService.editEducation=education;
    this.router.navigate(["/editEducation"]);
  }
}
