import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormDataPayload } from '../models/form-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  dataSetUrl: string;
  constructor(
    private dhisHttp: NgxDhis2HttpClientService,
    private httpClient: HttpClient
  ) {
    this.dataSetUrl = 'dataValues';
  }
  sendFormDataValue(payload: FormDataPayload): Observable<any> {
    return this.dhisHttp.post(`26/${this.dataSetUrl}?`, payload);
  }

  getFormDataValues(payload: any): Observable<any> {
    return null;
  }
}
