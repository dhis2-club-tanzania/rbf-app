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
    this.dataStoreUrl = 'dataStore/RBF';
  }

  getConfiguration(configType: string): Observable<any> {
    return this.httpService.get(this.dataStoreUrl).pipe(
      switchMap(() =>
        this.httpService.get(`${this.dataStoreUrl}/${configType}`)
      ),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  createDefaultConfig(configType: string): Observable<any> {
    const configObject = {
      config: []
    };

    return this.httpService
      .post(`${this.dataStoreUrl}/${configType}`, configObject)
      .pipe(map(() => configObject));
  }

  /**
   *
   * @param configurations updated configuration object
   */
  updateConfiguration(
    configType: string,
    updatedConfigurations: Configuration
  ): Observable<any> {
    return this.httpService.put(
      `${this.dataStoreUrl}/${configType}`,
      updatedConfigurations
    );
  }

  /**
   *
   * @param configurations configuration object
   */
  createConfiguration(
    configType: string,
    createdConfigurations: Configuration
  ): Observable<any> {
    return this.httpService.post(
      `${this.dataStoreUrl}/${configType}`,
      createdConfigurations
    );
  }
}
