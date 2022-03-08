import {Component} from '@angular/core';
import {DataService} from "../../service/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../service/experience.service";
import {Experience} from "../../model/experience";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent{
  experience=this.dataService.editExperience;
  editExperienceForm: FormGroup
  constructor(private dataService: DataService, private r: ActivatedRoute, private router: Router, private experienceService: ExperienceService ) {
    this.editExperienceForm= new FormGroup({
      'title': new FormControl(this.experience.title, Validators.required),
      'companyName': new FormControl(this.experience.companyName, Validators.required),
      'location': new FormControl(this.experience.location, Validators.required),
      'start': new FormControl(this.experience.start, Validators.required),
      'stop': new FormControl(this.experience.stop, Validators.required),
      'headline': new FormControl(this.experience.headline, Validators.required),
    })
  }

  editExperience(){
    let tempExperience= new Experience(this.dataService.user, this.editExperienceForm?.value.title,
      this.editExperienceForm?.value.companyName, this.editExperienceForm?.value.location,
      this.editExperienceForm?.value.start, this.editExperienceForm?.value.stop,
      this.editExperienceForm?.value.headline);
    tempExperience.id=this.experience.id
    this.experienceService.updateExperienceDetails(tempExperience).subscribe(response => {
      console.log(this.experience);
      this.router.navigate(['/profile']);
    });

  }

  back() {
    this.router.navigate(['/profile']);
  }

  deleteExperience() {
    this.experienceService.deleteExperienceDetails(this.experience).subscribe(body=>{
      this.router.navigate(['/profile'])
    })
  }
}
