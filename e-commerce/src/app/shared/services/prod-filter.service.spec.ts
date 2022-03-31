import { TestBed } from '@angular/core/testing';

import { ProdFilterService } from './prod-filter.service';

describe('ProdFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdFilterService = TestBed.get(ProdFilterService);
    expect(service).toBeTruthy();
  });
});
