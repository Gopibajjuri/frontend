import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userUrl: string;
  constructor(private http: HttpClient) {
    this.userUrl ='http://localhost:8080';
  }

  public save(user: User): Observable<User>{
    return this.http.post<User>(this.userUrl+'/create',user);
  }

  public findByUsernameAndPassword(user: User):Observable<User> {
    return this.http.post<User>(this.userUrl+'/welcome',user);
  }

  public  findById(id :number): Observable<User>{
     return this.http.post<User>(this.userUrl+"/profileUser",id);
  }
}
