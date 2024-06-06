import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorentzKeycloakComponent } from './lorentz-keycloak.component';

describe('LorentzKeycloakComponent', () => {
  let component: LorentzKeycloakComponent;
  let fixture: ComponentFixture<LorentzKeycloakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorentzKeycloakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorentzKeycloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
