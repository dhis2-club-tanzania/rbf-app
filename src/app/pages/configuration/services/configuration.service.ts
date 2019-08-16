import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { switchMap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
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

  getConfiguration(): any {
    return this.httpService.get(this.dataStoreUrl).pipe(
      switchMap((configurations: string[]) =>
        this.httpService.get(`${this.dataStoreUrl}`)
      ),
      catchError(error => {
        if (error.status !== 404) {
          return throwError(error);
        }

        const configObject: Configuration = {
          name: 'config',
          assessment: [],
          verification: []
        };

        this.httpService
          .post(`${this.dataStoreUrl}/`, configObject)
          .pipe(map(() => configObject));
      })
    );
  }

  /**
   *
   * @param configurations updated configuration object
   */
  updateConfiguration(updatedConfigurations: Configuration): any {
    return this.httpService.put(`${this.dataStoreUrl}`, updatedConfigurations);
  }

  /**
   *
   * @param configurations configuration object
   */
  createConfiguration(createdConfigurations: Configuration): any {
    return this.httpService.post(`${this.dataStoreUrl}`, createdConfigurations);
  }
}
