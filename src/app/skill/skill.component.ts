import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";
import {Router} from "@angular/router";
import {Skill} from "../model/skill";
import {SkillService} from "../service/skill.service";

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

  editSkill(skill: Skill){
    this.dataService.editSkill=skill;
    this.router.navigate(["/editSkill"]);
  }

  deleteSkill(skill: Skill){
    this.skillService.deleteSkillDetails(skill).subscribe(body=>{
      this.router.navigate(["/profile"])
  })
  }
}


