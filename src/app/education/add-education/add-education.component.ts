import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {EducationService} from "../../education.service";
import {Router} from "@angular/router";
import {Education} from "../../education";

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  constructor(private dataService: DataService, private educationService: EducationService, private router: Router) {
  }

  school: string = '';
  degree: string = '';
  fieldOfStudy: string = '';
  start: string = '';
  stop: string = '';
  grade: number = 0;
  activities: string = "";
  description: string = "";

  ngOnInit(): void {
  }

  addEducation() {
    let education = new Education(this.dataService.user, this.school, this.degree, this.fieldOfStudy,
      this.start, this.stop, this.grade, this.activities, this.description)
    this.educationService.saveEducationDetails(education).subscribe(responseData => {
      let educationData = responseData
      this.router.navigate(['/education'])
    });

  }
}
