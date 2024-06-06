import { TestBed } from '@angular/core/testing';

import { LorentzKeycloakService } from './lorentz-keycloak.service';

describe('LorentzKeycloakService', () => {
  let service: LorentzKeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LorentzKeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
