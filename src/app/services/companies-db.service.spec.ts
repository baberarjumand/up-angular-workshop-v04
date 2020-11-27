import { TestBed } from '@angular/core/testing';

import { CompaniesDbService } from './companies-db.service';

describe('CompaniesDbService', () => {
  let service: CompaniesDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
