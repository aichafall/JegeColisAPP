//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Colis } from 'src/app/models/colis';
import { User } from 'src/app/models/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  //base_path = 'http://localhost:3000/colis';
  base_path = 'https://my-json-server.typicode.com/aichafall/colis/colis';
 

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // CREER COLIS PAGE DEMANDE
  createItem(item): Observable<Colis> {
    return this.http
      .post<Colis>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // DETAIL COLIS PAGE TRACKER OU MES LIVRAISONS
  getItem(id): Observable<Colis> {
    return this.http
      .get<Colis>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //PROFIL USER 
  getUser(id): Observable<User> {
    return this.http
      .get<User>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  updateUser(id, item): Observable<User> {
    return this.http
      .put<User>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // PAGE MES LIVRAISONS
  getList(): Observable<Colis> {
    return this.http
      .get<Colis>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // POUR LE LIVREUR UPDATE DES STATUTS
  updateItem(id, item): Observable<Colis> {
    return this.http
      .put<Colis>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Colis>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}