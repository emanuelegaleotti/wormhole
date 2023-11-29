import { TestBed } from '@angular/core/testing';

import { LorentzEventBusService } from './lorentz-event-bus.service';

describe('LorentzEventBusService', () => {
  let service: LorentzEventBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LorentzEventBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
