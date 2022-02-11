import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl: string;
  constructor(private http: HttpClient) {
    this.registerUrl='http://localhost:8080/register';
  }

  public save(user: User){
      return this.http.post<User>(this.registerUrl,user);
  }


}
