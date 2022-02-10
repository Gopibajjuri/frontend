import { Injectable } from '@angular/core';
import {User} from "./user";
import {Education} from "./education";
import {Experience} from "./experience";
import {Skill} from "./skill";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public user=new User("username","password","f","l","hl","m","23","m","asd",123)
  public EducationList=[];
  public editEducation=new Education(this.user,'','','','','',0,'','');


  public ExperienceList=[]
  public editExperience=new Experience(this.user,'','','','','',"");

  public SkillList=[]
  public editSkill=new Skill(this.user, '');
  constructor() { }
}
