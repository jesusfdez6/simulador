import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  constructor(private authService: AuthService){


  }

  ngOnInit(): void {
    this.authService.auth().subscribe(
      {
        next: (response) => {

          localStorage.setItem('token',response.access_token);

      },
    
        error: (err: any) => { },
        complete: () => { }
      })

      
    };
  }





