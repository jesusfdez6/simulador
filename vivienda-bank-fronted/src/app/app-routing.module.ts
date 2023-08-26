import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulatorComponent } from './simulator/simulator.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'simulador', component: SimulatorComponent },
  { path: '**', redirectTo:'landing'  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
