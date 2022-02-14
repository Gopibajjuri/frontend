
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {DataService} from "../../data.service";
import {Education} from "../../education";
import {EducationService} from "../../education.service";
import {User} from "../../user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  @ViewChild('f') form: NgForm | undefined;
  edu=this.dataService.editEducation;
  constructor(private dataService: DataService, private r: ActivatedRoute, private router: Router, private educationService: EducationService ) { }
  ngOnInit(): void {

  }
  editEducation(){
      let e=new Education(this.dataService.user, this.form?.value.school, this.form?.value.degree,
        this.form?.value.fieldOfStudy, this.form?.value.start, this.form?.value.stop, this.form?.value.grade, '','' );
      e.id=this.dataService.editEducation.id
    this.educationService.updateEducationDetails(e).subscribe(responseBody=>{
      this.router.navigate(["/profile"])
    })
  }
  deleteEducation(){
    this.educationService.deleteEducationDetails(this.edu).subscribe(responseBody=>{
      this.router.navigate(["/profile"])
    });
  }

  back() {
    this.router.navigate(['/profile'])
  }
}
