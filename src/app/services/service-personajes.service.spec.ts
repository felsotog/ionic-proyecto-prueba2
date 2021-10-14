import { TestBed } from '@angular/core/testing';

import { ServicePersonajesService } from './service-personajes.service';

describe('ServicePersonajesService', () => {
  let service: ServicePersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
