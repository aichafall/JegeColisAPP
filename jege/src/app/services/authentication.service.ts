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
  // userid= window.localStorage.getItem('userid');
  // UpdateUser(userid,user: User): Observable<any> {
  //   console.log(userid);
  //   return this.http.put(URL+ '/modifprofil'+ '/' + userid, user).pipe();
  // }
  id= window.localStorage.getItem('userid');
  // UpdateUser(id, item): Observable<User> {
  //   console.log(id);
  //   return this.http.put<User>(URL + '/modifprofil'+ '/' + id, JSON.stringify(item)).pipe()
  // }

  UpdateUser(user: User): Observable<User> {
    console.log(this.id);
    return this.http.put<User>(URL + '/modifprofil'+ '/' + this.id, user)
      .pipe(
        
      );
  }

  userDetails() {
    return this.http.get(URL+ "/login").pipe();
    
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
