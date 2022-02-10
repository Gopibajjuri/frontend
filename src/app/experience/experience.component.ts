import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {ExperienceService} from "../experience.service";
import {Experience} from "../experience";
import {Education} from "../education";

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

}


