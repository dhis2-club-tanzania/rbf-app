import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfigurationService } from './configuration.service';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

describe('ConfigurationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxDhis2HttpClientModule.forRoot({
          namespace: 'iapps',
          version: 1,
          models: {}
        })
      ],
      providers: [ConfigurationService]
    })
  );

  it('should be created', () => {
    const service: ConfigurationService = TestBed.get(ConfigurationService);
    expect(service).toBeTruthy();
  });
});
