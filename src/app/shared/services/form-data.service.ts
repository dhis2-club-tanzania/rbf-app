import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
import { FormDataPayload } from '../../core/models/form-data.model';
import { getPayload } from '../../core/helpers/get-form-data-payload.helper';
import { DataSets } from '../../core/models/data-set.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  dataSetUrl: string;
  constructor(private dhisHttp: NgxDhis2HttpClientService) {
    this.dataSetUrl = 'dataValueSets';
  }
  sendFormDataValue(payload: FormDataPayload): Observable<any> {
    return this.dhisHttp.post(`26/${this.dataSetUrl}`, getPayload(payload));
  }

  getFormDataValues(payload: any): Observable<any> {
    return this.dhisHttp.get(
      `26/${this.dataSetUrl}?dataSet=${payload.dataSet}&period=${payload.period}&orgUnit=${payload.orgUnit}`
    );
  }
}
