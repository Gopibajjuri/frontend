import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillService} from "../../skill.service";

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  s=this.dataService.editSkill;
  constructor(private dataService: DataService, private r: ActivatedRoute, private router: Router, private skillService: SkillService ) { }
  ngOnInit(): void {
    this.skillService.deleteSkillDetails(this.s).subscribe();
  }
  editSkill(){
    this.skillService.saveSkillDetails(this.s).subscribe(response=>{
      console.log(this.s);
      this.router.navigate(['/skill']);
    });
  }
  deleteSkill(){
    this.skillService.deleteSkillDetails(this.s).subscribe(responseBody=>{
      this.router.navigate(["/skill"])
    });
  }

}
