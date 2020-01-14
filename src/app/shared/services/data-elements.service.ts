import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
import { DataElement } from '../models/data-elements.model';

@Injectable({
  providedIn: 'root',
})
export class DataElementsService {
  constructor(private httpService: NgxDhis2HttpClientService) {}

  // sample object
  de = {
    aggregationType: 'SUM',
    domainType: 'AGGREGATE',
    description: 'trial',
    valueType: 'NUMBER',
    formName: 'form name',
    fieldMask: 'mask',
    zeroIsSignificant: true,
    name: 'trial de',
    shortName: 'de',
    categoryCombo: { id: 'bjDvmb4bfuf' },
    legendSets: [],
    aggregationLevels: [2],
  };

  getDataElements(): Observable<any> {
    return this.httpService.get(
      'dataElements.json?fields=id,name,categoryCombo[id]&paging=false'
    );
  }

  createDataElement(dataElement: DataElement): Observable<any> {
    return this.httpService.post('dataElements', this.de);
  }
}
