import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulatorComponent } from './simulator/simulator.component';


const routes: Routes = [
  { path: 'simulador', component: SimulatorComponent },
  // Otras rutas aquí si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
