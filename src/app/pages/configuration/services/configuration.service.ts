import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { switchMap, catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import * as _ from 'lodash';
import { VerificationConfiguration } from '../models/verification-configuration.model';
import { AssessmentConfiguration } from '../models/assessment-configuration.model';
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  dataStoreUrl: string;
  constructor(private httpService: NgxDhis2HttpClientService) {
    this.dataStoreUrl = 'dataStore/RBF';
  }

  /**
   *
   * @param namespace datastore namespace
   * @param createdConfigurations configuration object
   */
  createConfiguration(
    namespace: string,
    createdConfigurations: any
  ): Observable<any> {
    return this.httpService.post(
      `${this.dataStoreUrl}/${namespace}`,
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
  getConfiguration(namespace: string, key: string): Observable<any> {
    return this.httpService.get(`${this.dataStoreUrl}/${namespace}`);
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
    updatedConfigurations: VerificationConfiguration | AssessmentConfiguration
  ): Observable<any> {
    return this.httpService.put(
      `${this.dataStoreUrl}/${namespace}/${key}`,
      updatedConfigurations
    );
  }

  generateRandoId(): Observable<any> {
    return this.httpService
      .get('system/id.json')
      .pipe(switchMap((codes: any[]) => codes[0]));
  }
}
