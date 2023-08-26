import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { KEYS,URL } from './enviroments';




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  auth() : Observable<any> {
    
      return this.http.post(URL+'/oauth2/token',KEYS);
    
  }
}


