import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {Experience} from "./experience";
import {Skill} from "./skill";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private url: string

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/skill"
  }

  public getSkillDetails(user: User): Observable<Skill[]> {
    return this.http.post<Skill[]>(this.url + "/fetch", user);
  }

  public saveSkillDetails(skill: Skill) {
    return this.http.post(this.url + "/send", skill);
  }

  public deleteSkillDetails(skill: Skill) {
    return this.http.post(this.url + "/delete", skill);
  }

  public updateSkillDetails(skill: Skill) {
    return this.http.post(this.url + "/update", skill);
  }
}
