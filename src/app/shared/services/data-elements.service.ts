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
      'dataElements.json?fields=id,name,categoryCombo[id]&paging=false&filter=valueType:eq:NUMBER'
    );
  }

  getDataElementById(id: string): Observable<any> {
    return this.httpService.get(`dataElements/${id}`);
  }

  createDataElement(dataElement: DataElement): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService.post('dataElements', dataElement).subscribe(
        data => {
          resolve(data['response']);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  deleteDataElement(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService.delete(`dataElements/${id}`).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  updateDataElement(id: string, dataElement: DataElement): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService
        .put(`dataElements/${id}?mergeMode=REPLACE`, dataElement)
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
