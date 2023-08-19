import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  simulator!: FormGroup;
  plazoOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.simulator = this.formBuilder.group({
      valorInmueble: [null, Validators.required],
      plazo: [1, Validators.required]
    });
  }

  onSubmit() {
    if (this.simulator.valid) {
      const formData = this.simulator.value;
      console.log('Formulario enviado:', formData);
    }
  }
}