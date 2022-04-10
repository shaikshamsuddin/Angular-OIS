import { TestBed } from '@angular/core/testing';

import { InvestmentYieldService } from './investmentyield.service';

describe('InvestmentyieldService', () => {
  let service: InvestmentYieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentYieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
