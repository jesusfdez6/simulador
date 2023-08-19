import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorComponent } from './simulator.component';
import { MaterialModule } from '../material/material.module';
import { FormBuilder,FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { SimulatorService } from '../service/simulator.service';
import { of } from 'rxjs';


describe('SimulatorComponent', () => {
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;
  let mockSimulatorService: jasmine.SpyObj<SimulatorService>;


  beforeEach(() => {
    mockSimulatorService = jasmine.createSpyObj(['send']);

    TestBed.configureTestingModule({
      declarations: [SimulatorComponent],
      imports:[
        ReactiveFormsModule,
        MaterialModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should initialize values', () => {

    component.ngOnInit();

    expect(component.simulator).toBeDefined();
    expect(component.simulator.controls['loanTotal'].value).toBeNull();
    expect(component.simulator.controls['termUnit'].value).toBe(1);
  });

  it('on submit values', () => {

    component.simulator = new FormGroup({
      loanTotal: new FormControl(10000, Validators.required),
      termUnit: new FormControl(1, Validators.required)
    });

   component.onSubmit();
    
  });

  it('should call simulatorService.send and set mostrarInformacion to true on valid form submit', () => {
    // Arrange
    const formData = {  };
    mockSimulatorService.send.and.returnValue(of("x"));
    component.simulator.patchValue(formData);

    // Act
    component.onSubmit();

    // Assert
    expect(mockSimulatorService.send).toHaveBeenCalledWith(formData);
    expect(component.mostrarInformacion).toBe(true);
  });*/

});
