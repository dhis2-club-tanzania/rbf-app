import { TestBed } from '@angular/core/testing';

import { DataElementsService } from './data-elements.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

describe('DataElementsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxDhis2HttpClientModule.forRoot({
          namespace: 'iapps',
          version: 1,
          models: {}
        })
      ]
    })
  );

  it('should be created', () => {
    const service: DataElementsService = TestBed.get(DataElementsService);
    expect(service).toBeTruthy();
  });
});
