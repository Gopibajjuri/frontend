import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";
import {Router} from "@angular/router";
import {ExperienceService} from "../service/experience.service";
import {Experience} from "../model/experience";
import {Education} from "../model/education";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ExperienceList: Experience[] = [];

  constructor(public dataService: DataService, private experienceService: ExperienceService, private router: Router) {
  }

  ngOnInit(): void {
    this.experienceService.getExperienceDetails(this.dataService.user).subscribe(responseBody => {
      let List = responseBody
      for (let i = 0; i < List.length; i++) {
        let exp = List[i];
        this.ExperienceList[i] = exp;
      }
    });

  }

  addExperience() {
    this.router.navigate(['/addExperience'])
  }

  editDetails(experience: Experience){
    this.dataService.editExperience=experience;
    this.router.navigate(["/editExperience"]);
  }

  deleteExperience(experience: Experience) {
    this.experienceService.deleteExperienceDetails(experience).subscribe(responseBody=> {
      this.router.navigate(["/profile"])
    })
  }


}


