
import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../service/data.service";
import {Education} from "../../model/education";
import {EducationService} from "../../service/education.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent{
  editEducationForm: FormGroup
  education=this.dataService.editEducation;
  constructor(private dataService: DataService, private router: Router, private educationService: EducationService ) {
    this.editEducationForm= new FormGroup({
      'school': new FormControl(this.education.school, Validators.required),
      'degree': new FormControl(this.education.degree, Validators.required),
      'fieldOfStudy': new FormControl(this.education.fieldOfStudy, Validators.required),
      'start': new FormControl(this.education.start, Validators.required),
      'stop': new FormControl(this.education.stop, Validators.required),
      'grade': new FormControl(this.education.grade, Validators.required),
    })
  }

  editEducation(){
      let tempEducation=new Education(this.dataService.user, this.editEducationForm?.value.school, this.editEducationForm?.value.degree,
        this.editEducationForm?.value.fieldOfStudy, this.editEducationForm?.value.start, this.editEducationForm?.value.stop,
        this.editEducationForm?.value.grade, '','' );
      tempEducation.id=this.education.id
    this.educationService.updateEducationDetails(tempEducation).subscribe(responseBody=>{
      this.router.navigate(["/profile"])
    })
  }
  deleteEducation(){
    this.educationService.deleteEducationDetails(this.education).subscribe(responseBody=>{
      this.router.navigate(["/profile"])
    });
  }

  back() {
    this.router.navigate(['/profile'])
  }
}
