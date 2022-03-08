import {Component} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";
import {Skill} from "../../model/skill";
import {SkillService} from "../../service/skill.service";
import {FormControl, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {
  addSkillForm: FormGroup
  constructor(private dataService: DataService, private skillService: SkillService, private router: Router) {
    this.addSkillForm=new FormGroup({
      'skill' :new FormControl(null, Validators.required)
    })
  }
  addSkill() {
    let skill = new Skill(this.dataService.user, this.addSkillForm?.value.skill)
    this.skillService.saveSkillDetails(skill).subscribe(responseData => {
      this.router.navigate(['/profile'])
    });
  }
  back() {
    this.router.navigate(['/profile'])
  }
}
