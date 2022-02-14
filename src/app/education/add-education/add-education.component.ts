import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../data.service";
import {EducationService} from "../../education.service";
import {Router} from "@angular/router";
import {Education} from "../../education";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  constructor(private dataService: DataService, private educationService: EducationService, private router: Router) {
  }
  @ViewChild('f') form: NgForm | undefined;
  ngOnInit(): void {
  }
  addEducation() {
    let education = new Education(this.dataService.user, this.form?.value.school, this.form?.value.degree,
      this.form?.value.fieldOfStudy, this.form?.value.start, this.form?.value.stop,
      this.form?.value.grade, '','')
    this.educationService.saveEducationDetails(education).subscribe(responseData => {
      let educationData = responseData
      this.router.navigate(['/profile'])
    });

  }

  back() {
    this.router.navigate(['/profile'])
  }
}
