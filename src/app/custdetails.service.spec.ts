import { TestBed } from '@angular/core/testing';

import { CustdetailsService } from './custdetails.service';

describe('CustdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustdetailsService = TestBed.get(CustdetailsService);
    expect(service).toBeTruthy();
  });
});
