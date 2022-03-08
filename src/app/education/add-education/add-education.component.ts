import {Component} from '@angular/core';
import {DataService} from "../../service/data.service";
import {EducationService} from "../../service/education.service";
import {Router} from "@angular/router";
import {Education} from "../../model/education";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent{
  addEducationForm: FormGroup
  constructor(private dataService: DataService, private educationService: EducationService, private router: Router) {
    this.addEducationForm= new FormGroup({
      'school': new FormControl(null, Validators.required),
      'degree': new FormControl(null, Validators.required),
      'fieldOfStudy': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'stop': new FormControl(null, Validators.required),
      'grade': new FormControl(null, Validators.required),
      })
  }
  addEducation() {
    let education = new Education(this.dataService.user, this.addEducationForm?.value.school,
      this.addEducationForm?.value.degree, this.addEducationForm?.value.fieldOfStudy,
      this.addEducationForm?.value.start, this.addEducationForm?.value.stop,
      this.addEducationForm?.value.grade, '','')
    this.educationService.saveEducationDetails(education).subscribe(data=> {
      this.router.navigate(['/profile'])
    });
  }
  back() {
    this.router.navigate(['/profile'])
  }
}
