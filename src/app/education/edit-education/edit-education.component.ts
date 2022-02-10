import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {DataService} from "../../data.service";
import {Education} from "../../education";
import {EducationService} from "../../education.service";
import {User} from "../../user";

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  edu=this.dataService.editEducation;
  constructor(private dataService: DataService, private r: ActivatedRoute, private router: Router, private educationService: EducationService ) { }
  ngOnInit(): void {
    this.educationService.deleteEducationDetails(this.edu).subscribe();
  }
  editEducation(){
        this.educationService.saveEducationDetails(this.edu).subscribe(response=>{
          console.log(this.edu);
          this.router.navigate(['/education']);
        });

  }
  deleteEducation(){
    this.educationService.deleteEducationDetails(this.edu).subscribe(responseBody=>{
      this.router.navigate(["/education"])
    });
  }

}
