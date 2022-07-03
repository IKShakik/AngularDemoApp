import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

// Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class AppApiService {
  private baseUri = 'http://localhost:5159/api/';

  // Resolve HTTP using the constructor
  constructor(public _http: HttpClient) { }

  // sayHello(): Observable<any> {
  //   return this._http.get(this.baseUri).map((response: Response) => {
  //     return response.text();
  //   });
  // }

  createClientHeader(): { headers: HttpHeaders } {
    //let currentUser: CurrentUser = this.auth.getCurrentUser();
    let token = '3';
    // if (currentUser != null) {
    //   token = currentUser.Token;
    // }
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
  }

  public httpGet<T>(url: string): Observable<T> {
    return this._http.get<T>(this.baseUri + url, this.createClientHeader())
      .pipe(
        catchError(this.handleClientError)
      );
  }

  public handleClientError(error: HttpErrorResponse) {
    // return Observable.throw(error.message || 'An error has been occurred. Please try again or contact to system administrator');
    return throwError(error.message || 'An error has been occurred. Please try again or contact to system administrator');
  }
}
