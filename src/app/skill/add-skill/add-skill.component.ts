import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";
import {Skill} from "../../skill";
import {SkillService} from "../../skill.service";

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor(private dataService: DataService, private skillService: SkillService, private router: Router) {
  }

  skill: string=''
  ngOnInit(): void {
  }
  addSkill() {
    let skill = new Skill(this.dataService.user, this.skill)
    this.skillService.saveSkillDetails(skill).subscribe(responseData => {
      let experienceData = responseData
      this.router.navigate(['/skill'])
    });

  }
}
