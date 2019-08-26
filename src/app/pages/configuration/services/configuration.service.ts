import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { switchMap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import * as _ from 'lodash';
import { VerificationConfiguration } from '../models/verification-configuration.model';
import { AssessmentConfiguration } from '../models/assessment-configuration.model';
import { GeneralConfiguration } from '../models/general-configuration.model';
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  dataStoreUrl: string;
  periodTypeUrl = 'periodTypes.json';
  constructor(
    private httpService: NgxDhis2HttpClientService,
    private httpService2: NgxDhis2HttpClientService,
    private httpService3: NgxDhis2HttpClientService
  ) {
    this.dataStoreUrl = 'dataStore';
  }

  /**
   *
   * @param namespace datastore namespace
   * @param createdConfigurations configuration object
   */
  createConfiguration(
    namespace: string,
    createdConfigurations:
      | VerificationConfiguration
      | AssessmentConfiguration
      | GeneralConfiguration
  ): Observable<any> {
    return this.httpService.post(
      `${this.dataStoreUrl}/${namespace}/${createdConfigurations.id}`,
      createdConfigurations
    );
  }

  /**
   *
   * @param namespace datastore namespace
   */
  getAllConfigurations(namespace: string): Observable<string[]> {
    return this.httpService.get(`${this.dataStoreUrl}/${namespace}`);
  }

  /**
   *
   * @param namespace datastore namespace
   * @param key datastore key
   */
  getConfigurations(namespace: string): Observable<any> {
    return this.httpService
      .get(`${this.dataStoreUrl}/${namespace}`)
      .pipe(
        switchMap((configKeys: string[]) =>
          forkJoin(
            _.map(configKeys, (key: string) =>
              this.httpService.get(`${this.dataStoreUrl}/${namespace}/${key}`)
            )
          )
        )
      );
  }

  /**
   *
   * @param namespace datastore namespace
   * @param key datstore key
   * @param updatedConfigurations updated configurationObjec
   */
  updateConfiguration(
    namespace: string,
    key: string,
    updatedConfigurations:
      | VerificationConfiguration
      | AssessmentConfiguration
      | GeneralConfiguration
  ): Observable<any> {
    return this.httpService.put(
      `${this.dataStoreUrl}/${namespace}/${key}`,
      updatedConfigurations
    );
  }

  deleteConfiguration(namespace: string, key: string): Observable<any> {
    return this.httpService.delete(`${this.dataStoreUrl}/${namespace}/${key}`);
  }
  generateRandomId(): Observable<any> {
    return this.httpService
      .get('system/id.json')
      .pipe(switchMap((codes: any[]) => codes[0]));
  }
  getPeriodTypes(): Observable<any> {
    return this.httpService2.get(this.periodTypeUrl);
  }
  getOrgUnitsLevel(): Observable<any> {
    return this.httpService3.get('organisationUnitLevels.json');
  }
}
