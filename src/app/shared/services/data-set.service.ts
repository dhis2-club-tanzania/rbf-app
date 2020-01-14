import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
import { DataSets } from '../models/data-set.model';

@Injectable({
  providedIn: 'root',
})
export class DataSetService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getDataSet(
    startDate: string,
    endDate: string,
    orgUnit: string,
    dataSet: string
  ): Observable<any> {
    return this.http.get(
      `dataValueSets.json?dataElementIdScheme=UID&orgUnitIdScheme=UID&includeDeleted=false&children=true&categoryOptionComboIdScheme=UID&startDate=${startDate}&endDate=${endDate}&orgUnit=${orgUnit}&dataSet=${dataSet}`
    );
  }

  checkDataSet(id: string) {
    return this.http.get(`26/dataSets/${id}.json`);
  }

  createDefaultDataSet(dataSet: DataSets): Observable<any> {
    return this.http.post('metadata', dataSet);
  }
}
