import { TestBed } from '@angular/core/testing';

import { OrganisationUnitService } from './organisation-unit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

describe('OrganisationUnitService', () => {
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
    const service: OrganisationUnitService = TestBed.get(
      OrganisationUnitService
    );
    expect(service).toBeTruthy();
  });
});
