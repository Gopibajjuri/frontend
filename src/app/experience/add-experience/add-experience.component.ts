import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";
import {ExperienceService} from "../../experience.service";
import {Experience} from "../../experience";

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  constructor(private dataService: DataService, private experienceService: ExperienceService, private router: Router) {
  }

  title: string = '';
  companyName: string = '';
  location: string = '';
  start: string = '';
  stop: string = '';
  headline: string='';
  ngOnInit(): void {
  }

  addExperience() {
    let experience = new Experience(this.dataService.user, this.title, this.companyName, this.location,
      this.start, this.stop, this.headline)
    this.experienceService.saveExperienceDetails(experience).subscribe(responseData => {
      let experienceData = responseData
      this.router.navigate(['/experience'])
    });

  }
}
