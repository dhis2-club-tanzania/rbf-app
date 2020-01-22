import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
import { FormDataPayload } from '../models/form-data.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  dataSetUrl: string;
  constructor(private dhisHttp: NgxDhis2HttpClientService) {
    this.dataSetUrl = 'dataValueSets';
  }
  sendFormDataValue(payload: FormDataPayload): Observable<any> {
    const params = payload
      ? new HttpParams()
          .set('de', payload.dataElement)
          .set('ds', payload.dataSet)
          .set('pe', payload.period)
          .set('ou', payload.orgUnit)
          .set('value', payload.value)
      : {};
    return this.dhisHttp.post(`dataValues`, params);
  }

  getFormDataValues(payload: any): Observable<any> {
    return this.dhisHttp.get(
      `dhis-web-dataentry/getDataValues.action?periodId=${payload.period}&dataSetId=${payload.dataSet}&organisationUnitId=${payload.orgUnit}`
    );
  }
}
