import {Component} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";
import {SkillService} from "../../service/skill.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Skill} from "../../model/skill";

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  skill=this.dataService.editSkill;
  editSkillForm: FormGroup
  constructor(private dataService: DataService, private skillService: SkillService, private router: Router) {
    this.editSkillForm=new FormGroup({
      'skill' :new FormControl(this.skill.skill, Validators.required)
    })
  }
  editSkill(){
    let tempSkill = new Skill(this.dataService.user, this.editSkillForm?.value.skill)
    tempSkill.id=this.skill.id
    this.skillService.updateSkillDetails(tempSkill).subscribe(response=>{
      this.router.navigate(['/profile']);
    });
  }


  back() {
    this.router.navigate(['/profile'])
  }

  deleteSkill() {
    this.skillService.deleteSkillDetails(this.skill).subscribe(body=>{
      this.router.navigate(['/profile'])
    })

  }
}
