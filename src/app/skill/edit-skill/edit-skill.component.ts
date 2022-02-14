import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillService} from "../../skill.service";
import {NgForm} from "@angular/forms";
import {Skill} from "../../skill";

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  @ViewChild('f') form: NgForm | undefined
  s=this.dataService.editSkill;
  constructor(private dataService: DataService, private r: ActivatedRoute, private router: Router, private skillService: SkillService ) { }
  ngOnInit(): void {
  }
  editSkill(){
    let skill = new Skill(this.dataService.user, this.form?.value.skill)
    skill.id=this.dataService.editSkill.id
    this.skillService.updateSkillDetails(skill).subscribe(response=>{
      console.log(this.s);
      this.router.navigate(['/profile']);
    });
  }


  back() {
    this.router.navigate(['/profile'])
  }

  deleteSkill() {
    this.skillService.deleteSkillDetails(this.s).subscribe(body=>{
      this.router.navigate(['/profile'])
    })

  }
}
