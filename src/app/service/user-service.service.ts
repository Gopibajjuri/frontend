import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userUrl: string;
  constructor(private http: HttpClient) {
    this.userUrl ='http://localhost:8080';
  }
  public findByUsernameAndPassword(user: User):Observable<User> {
    return this.http.post<User>(this.userUrl+'/check',user);
  }
  public saveProfile(user: User):Observable<User>{
    return this.http.post<User>(this.userUrl+"/profile/send",user);
  }
  public deleteProfile(user:User){
    return this.http.post(this.userUrl+"/profile/delete",user);
  }
  public updateProfile(user: User):Observable<User>{
    return this.http.post<User>(this.userUrl+"/profile/update",user);
  }
}
