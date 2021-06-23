import { Injectable } from '@angular/core';
import { User, Vacdate } from './vacdate';
import { Vacplace } from './vacplace';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class VacServiceService {
  private api = 'https://impfservice21.s1810456017.student.kwmhgb.at/api';

  /*vacdates: Vacdate[];
constructor() {
  this.vacdates = [
    new Vacdate("1", new Date(2021,8,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3"), 
    [],
    ),
    new Vacdate("2", new Date(2021,8,21), "12:40", "12:50", 2, "Pfizer", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3"), 
    [],
    )];
}*/

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Vacdate>> {
    return this.http
      .get(`${this.api}/vacdates`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getAllPlaces(): Observable<Array<Vacplace>> {
    return this.http
      .get(`${this.api}/vacplaces`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSingle(id: number): Observable<Vacdate> {
    console.log(id);
    return this.http
      .get<Vacdate>(`${this.api}/vacdates/${id}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  getSinglePlace(id: number): Observable<Vacplace> {
    return this.http
      .get<Vacplace>(`${this.api}/vacplaces/${id}`)
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

  check(id:number): Observable<Boolean>{
    return this.http.get<Boolean>(`${this.api}/vacdates/checkId/${id}`).pipe(retry(3))
    .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}

/*getAll(){
return this.vacdates;
}

getSingle(id :
  string) :
  Vacdate {
  return this.vacdates.find(vacdate => vacdate.id === id);
  }
}*/
