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
    this.dataStoreUrl = 'dataStore/RBF-config';
  }

  /**
   *
   * @param configType type of configurations
   */
  getConfiguration(configType: string): any {
    return this.httpService.get(this.dataStoreUrl).pipe(
      switchMap((configurations: string[]) =>
        this.httpService.get(`${this.dataStoreUrl}/${configType}`)
      ),
      catchError(error => {
        if (error.status !== 404) {
          return throwError(error);
        }

        const configObject: Configuration = {
          configurationType: configType,
          configurations: []
        };

        this.httpService
          .post(
            `${this.dataStoreUrl}/${configObject.configurationType}`,
            configObject
          )
          .pipe(map(() => [configObject]));
      })
    );
  }

  /**
   *
   * @param configType type of configuration
   * @param configurations updated configuration object
   */
  updateConfiguration(
    configType: string,
    updatedConfigurations: Configuration
  ): any {
    return this.httpService.put(
      `${this.dataStoreUrl}/${configType}`,
      updatedConfigurations
    );
  }

  /**
   *
   * @param configType type of configuration
   * @param configurations configuration object
   */
  createConfiguration(
    configType: string,
    createdConfigurations: Configuration
  ): any {
    return this.httpService.post(
      `${this.dataStoreUrl}/${configType}`,
      createdConfigurations
    );
  }
}
