import { TestBed } from '@angular/core/testing';

import { CategoryComboService } from './category-combo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxDhis2HttpClientModule } from '@iapps/ngx-dhis2-http-client';

describe('CategoryComboService', () => {
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
    const service: CategoryComboService = TestBed.get(CategoryComboService);
    expect(service).toBeTruthy();
  });
});
