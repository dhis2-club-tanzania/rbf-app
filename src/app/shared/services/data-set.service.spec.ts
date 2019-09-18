import { TestBed } from '@angular/core/testing';

import { DataSetService } from './data-set.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

describe('DataSetService', () => {
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
    const service: DataSetService = TestBed.get(DataSetService);
    expect(service).toBeTruthy();
  });
});
