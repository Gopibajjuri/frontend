import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {Skill} from "../skill";
import {SkillService} from "../skill.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  SkillList: Skill[] = [];

  constructor(public dataService: DataService, private skillService: SkillService, private router: Router) {
  }
  ngOnInit(): void {
    this.skillService.getSkillDetails(this.dataService.user).subscribe(responseBody => {
      let List = responseBody
      for (let i = 0; i < List.length; i++) {
        let s = List[i];
        this.SkillList[i] = s;
      }
    });
  }
  addSkill() {
    this.router.navigate(['/addSkill'])
  }

  editDetails(skill: Skill){
    this.dataService.editSkill=skill;
    this.router.navigate(["/editSkill"]);
  }

}


