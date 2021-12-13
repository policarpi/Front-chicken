import { TestBed } from '@angular/core/testing';

import { FisiologiaService } from './fisiologia.service';

describe('FisiologiaService', () => {
  let service: FisiologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FisiologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
