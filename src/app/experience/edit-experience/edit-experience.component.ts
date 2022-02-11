import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../experience.service";

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  exp=this.dataService.editExperience;
  constructor(private dataService: DataService, private r: ActivatedRoute, private router: Router, private experienceService: ExperienceService ) { }
  ngOnInit(): void {
    this.experienceService.deleteExperienceDetails(this.exp).subscribe();
  }
  editExperience(){
    this.experienceService.saveExperienceDetails(this.exp).subscribe(response=>{
      console.log(this.exp);
      this.router.navigate(['/experience']);
    });
  }
  deleteExperience(){
    this.experienceService.deleteExperienceDetails(this.exp).subscribe(responseBody=>{
      this.router.navigate(["/experience"])
    });
  }


}
