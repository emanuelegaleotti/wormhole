import { TestBed } from '@angular/core/testing';

import { LorentzInputsService } from './lorentz-inputs.service';

describe('LorentzInputsService', () => {
  let service: LorentzInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LorentzInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
