import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {Education} from "./education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private url: string
  constructor(private http: HttpClient) {
    this.url="http://localhost:8080/education"
  }

  public getEducationDetails(user: User): Observable<Education[]> {
    return this.http.post<Education[]>(this.url+"/fetch", user);
  }

  public saveEducationDetails(education: Education){
    return this.http.post(this.url+"/send", education);
  }
  public deleteEducationDetails(education: Education){
    return this.http.post(this.url+"/delete",education);
  }
  public updateEducationDetails(education: Education){
    return this.http.post(this.url+"/update", education);
  }
}
