import { TestBed } from '@angular/core/testing';

import { LorentzService } from './lorentz.service';

describe('LorentzService', () => {
  let service: LorentzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LorentzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
