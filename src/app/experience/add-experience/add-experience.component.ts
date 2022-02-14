import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";
import {ExperienceService} from "../../experience.service";
import {Experience} from "../../experience";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  constructor(private dataService: DataService, private experienceService: ExperienceService, private router: Router) {
  }
  ngOnInit(): void {
  }
  @ViewChild('f') form: NgForm | undefined
  addExperience() {
    let experience = new Experience(this.dataService.user, this.form?.value.title, this.form?.value.companyName,
      this.form?.value.location, this.form?.value.start, this.form?.value.stop, this.form?.value.headline)
    this.experienceService.saveExperienceDetails(experience).subscribe(responseData => {
      let experienceData = responseData
      this.router.navigate(['/profile'])
    });

  }

  back() {
    this.router.navigate(['/profile'])
  }
}
