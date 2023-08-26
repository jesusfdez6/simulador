import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { simulator } from './simulator-mock';
import { URL } from './enviroments';

let mock = 0;

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {
   
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
 

   }

  send(datos: any) : Observable<any> {
    if(mock==0){
      this.headers.append("Content-Type", "application/json");
      const token = localStorage.getItem('token') || '{}';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      });
      return this.http.post(URL+'/calculate-payment-plan', datos,{headers});
    }else{
      const miObservable: Observable<any> = of(simulator);

      return miObservable;
    }
    
  }
}




