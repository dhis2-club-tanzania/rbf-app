import { TestBed } from '@angular/core/testing';

import { FormDataService } from './form-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

describe('FormDataService', () => {
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
    const service: FormDataService = TestBed.get(FormDataService);
    expect(service).toBeTruthy();
  });
});
