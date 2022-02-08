import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "./profile";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl: string;
  constructor(private http: HttpClient) {
    this.registerUrl='http://localhost:8080/register';
  }

  public save(profile: Profile){
      return this.http.post<Profile>(this.registerUrl,profile);
  }

}
