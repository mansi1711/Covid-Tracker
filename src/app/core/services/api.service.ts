import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
import { catchError } from 'rxjs/operators'; 

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    private apiURLStatewise = "https://api.covid19india.org/data.json";
    private apiURLDistrictwise = "https://api.covid19india.org/state_district_wise.json";
    private apiURLNews = "api/newsDetails";

    constructor(private http:  HttpClient){}

    getStatewiseData(): Observable<any>{
        return this.http.get<any[]>(this.apiURLStatewise);
      }

    getDistrictwiseData(): Observable<any> {
      return this.http.get<any[]>(this.apiURLDistrictwise);
    } 

    getNewsDetails(): Observable<INewsDetails[]>{
      return this.http.get<INewsDetails[]>(this.apiURLNews);
    }

    addNewsDetails(newsDetail: INewsDetails): Observable<INewsDetails> {
      return this.http.post<INewsDetails>(this.apiURLNews, newsDetail, httpOptions).pipe(
        catchError(this.handleError)
      );
    }

    private handleError(error: HttpErrorResponse) {
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
}