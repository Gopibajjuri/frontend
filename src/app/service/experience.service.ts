import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {Education} from "../model/education";
import {Experience} from "../model/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private url: string
  constructor(private http: HttpClient) {
    this.url="http://localhost:8080/experience"
  }

  public getExperienceDetails(user: User): Observable<Experience[]> {
    return this.http.post<Experience[]>(this.url+"/fetch", user);
  }

  public saveExperienceDetails(experience: Experience){
    return this.http.post(this.url+"/send", experience);
  }
  public deleteExperienceDetails(experience: Experience){
    return this.http.post(this.url+"/delete",experience);
  }

  public updateExperienceDetails(experience: Experience) {
    return this.http.post(this.url+"/update", experience);
  }
}
