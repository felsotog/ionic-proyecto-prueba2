import { TestBed } from '@angular/core/testing';

import { ServiceTiempoService } from './service-tiempo.service';

describe('ServiceTiempoService', () => {
  let service: ServiceTiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
