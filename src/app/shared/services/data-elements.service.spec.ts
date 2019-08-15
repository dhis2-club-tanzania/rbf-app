import { TestBed } from '@angular/core/testing';

import { DataElementsService } from './data-elements.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataElementsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: DataElementsService = TestBed.get(DataElementsService);
    expect(service).toBeTruthy();
  });
});
