import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorentzInputsComponent } from './lorentz-inputs.component';

describe('LorentzInputsComponent', () => {
  let component: LorentzInputsComponent;
  let fixture: ComponentFixture<LorentzInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorentzInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorentzInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
