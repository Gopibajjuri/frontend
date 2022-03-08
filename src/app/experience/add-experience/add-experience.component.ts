import {Component} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";
import {ExperienceService} from "../../service/experience.service";
import {Experience} from "../../model/experience";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent{
  addExperienceForm: FormGroup
  constructor(private dataService: DataService, private experienceService: ExperienceService, private router: Router) {
    this.addExperienceForm= new FormGroup({
      'title': new FormControl(null, Validators.required),
      'companyName': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'stop': new FormControl(null, Validators.required),
      'headline': new FormControl(null, Validators.required),
    })
  }
  addExperience() {
    let experience = new Experience(this.dataService.user, this.addExperienceForm?.value.title,
      this.addExperienceForm?.value.companyName, this.addExperienceForm?.value.location,
      this.addExperienceForm?.value.start, this.addExperienceForm?.value.stop,
      this.addExperienceForm?.value.headline)
    this.experienceService.saveExperienceDetails(experience).subscribe(responseData => {
      this.router.navigate(['/profile'])
    });
  }
  back() {
    this.router.navigate(['/profile'])
  }
}
