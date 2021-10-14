import { TestBed } from '@angular/core/testing';

import { ServiceDivisaService } from './service-divisa.service';

describe('ServiceDivisaService', () => {
  let service: ServiceDivisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDivisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
