import { TestBed } from '@angular/core/testing';

import { Dhis2ApiService } from './dhis2-api.service';

describe('Dhis2ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dhis2ApiService = TestBed.get(Dhis2ApiService);
    expect(service).toBeTruthy();
  });
});
