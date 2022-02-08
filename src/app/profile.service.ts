import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileUrl: string
  constructor(private http: HttpClient) {
    this.profileUrl='http://localhost:8080/profileDetails';
  }

  public findByUserId(id: number): Observable<Profile>{
    return this.http.post<Profile>(this.profileUrl,id);
  }
}
