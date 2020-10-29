// authentication.service.ts
import { Injectable } from "@angular/core";
import { URL } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http"
import { User } from 'src/app/models/user';
import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http:HttpClient ) { }
  authState = new BehaviorSubject(false);

  loginUser(user: User): Observable<any> {
    return this.http.post(URL+ '/login', user).pipe();
    this.authState.next(true);
  }

  RegisterUser(user: User): Observable<any> {
    return this.http.post(URL+ '/register', user).pipe();
  }

  userDetails() {
    return this.http.get(URL+ "/login").pipe();
    
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
