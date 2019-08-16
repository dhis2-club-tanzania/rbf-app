import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { switchMap, catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import * as _ from 'lodash';
import { Configuration } from '../models/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  dataStoreUrl: string;
  constructor(private httpService: NgxDhis2HttpClientService) {
    this.dataStoreUrl = 'dataStore/RBF/config';
  }

  getConfiguration(): Observable<any> {
    return this.httpService.get(this.dataStoreUrl).pipe(
      switchMap(() => this.httpService.get(`${this.dataStoreUrl}`)),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  createDefaultConfig(): Observable<any> {
    const configObject: Configuration = {
      name: 'config',
      assessment: [],
      verification: []
    };

    return this.httpService
      .post(`${this.dataStoreUrl}/`, configObject)
      .pipe(map(() => configObject));
  }

  /**
   *
   * @param configurations updated configuration object
   */
  updateConfiguration(updatedConfigurations: Configuration): Observable<any> {
    return this.httpService.put(`${this.dataStoreUrl}`, updatedConfigurations);
  }

  /**
   *
   * @param configurations configuration object
   */
  createConfiguration(createdConfigurations: Configuration): Observable<any> {
    return this.httpService.post(`${this.dataStoreUrl}`, createdConfigurations);
  }
}
