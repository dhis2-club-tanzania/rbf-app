import { TestBed } from '@angular/core/testing';

import { IndexDbService } from './index-db.service';

describe('IndexDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexDbService = TestBed.get(IndexDbService);
    expect(service).toBeTruthy();
  });
});
