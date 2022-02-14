import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../experience.service";
import {NgForm} from "@angular/forms";
import {Experience} from "../../experience";

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  exp=this.dataService.editExperience;
  @ViewChild('f') form: NgForm | undefined
  constructor(private dataService: DataService, private r: ActivatedRoute, private router: Router, private experienceService: ExperienceService ) { }
  ngOnInit(): void {
  }
  editExperience(){
    let e= new Experience(this.dataService.user, this.form?.value.title, this.form?.value.companyName, this.form?.value.location,
      this.form?.value.start, this.form?.value.stop, this.form?.value.headline);
    e.id=this.exp.id
    this.experienceService.updateExperienceDetails(e).subscribe(response => {
      console.log(this.exp);
      this.router.navigate(['/profile']);
    });

  }

  back() {
    this.router.navigate(['/profile']);
  }

  deleteExperience() {
    this.experienceService.deleteExperienceDetails(this.exp).subscribe(body=>{
      this.router.navigate(['/profile'])
    })
  }
}
