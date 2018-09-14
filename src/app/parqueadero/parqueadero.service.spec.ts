import { TestBed } from '@angular/core/testing';

import { ParqueaderoService } from './parqueadero.service';

describe('ParqueaderoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParqueaderoService = TestBed.get(ParqueaderoService);
    expect(service).toBeTruthy();
  });
});
