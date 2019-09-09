import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
import { FormDataPayload } from '../models/form-data.model';
import { getPayload } from '../helpers/get-form-data-payload.helper';

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
    return null;
  }
}
