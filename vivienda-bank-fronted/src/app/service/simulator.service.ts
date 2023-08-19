import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { simulator } from './simulator-mock';

let mock = 1;

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  constructor(private http: HttpClient) { }

  send(datos: any) : Observable<any> {
    if(mock==0){
      return this.http.post('http://ec2-3-133-136-92.us-east-2.compute.amazonaws.com:6002/api/calculate-payment-plan', datos);
    }else{
      const miObservable: Observable<any> = of(simulator);

      return miObservable;
    }
    
  }
}




