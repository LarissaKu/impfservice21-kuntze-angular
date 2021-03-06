import { Injectable } from '@angular/core';
import { Vacdate } from './vacdate';
import { Vacplace } from './vacplace';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class VacRegistrationService {
  private api = 'https://impfservice21.s1810456017.student.kwmhgb.at/api';
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Vacdate>> {
    return this.http
      .get(`${this.api}/vacdates`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingle(id: string): Observable<Vacdate> {
    return this.http
      .get<Vacdate>(`${this.api}/vacdates/${id}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getUser(id : number) : Observable<User> {
    return this.http.get(`${this.api}/user/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(vacdate: Vacdate): Observable<any> {
    return this.http
      .post(`${this.api}/vacdate`, vacdate)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  update(vacdate: Vacdate): Observable<any> {
    return this.http
      .put(`${this.api}/vacdate/${vacdate.id}`, vacdate)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }
  remove(id: string): Observable<any> {
    return this.http
      .delete(`${this.api}/vacdate/${id}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getAllPlaces():Observable<any>{
    return this.http.get(`${this.api}/vacplaces`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}