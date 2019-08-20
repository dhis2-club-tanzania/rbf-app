 import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { switchMap, catchError, map } from 'rxjs/operators';
import { throwError, Observable, forkJoin } from 'rxjs';
import * as _ from 'lodash';
import { VerificationConfiguration } from '../models/verification-configuration.model';
import { AssessmentConfiguration } from '../models/assessment-configuration.model';
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  dataStoreUrl: string;
  periodTypeUrl = 'periodTypes.json';
  constructor(private httpService: NgxDhis2HttpClientService, private httpService2: NgxDhis2HttpClientService) {
    this.dataStoreUrl = 'dataStore';
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
  getConfigurations(namespace: string) {
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
    // const configObs: Observable<any>[] = [];
    // this.getAllConfigurations(namespace).subscribe(key => {
    //   const value = new Observable(observer => {
    //     this.httpService
    //       .get(`${this.dataStoreUrl}/${namespace}/${key}`)
    //       .subscribe(
    //         configData => observer.next(configData),
    //         error => observer.error(error),
    //         () => observer.complete()
    //       );
    //   });
    //   configObs.push(value);
    // });
    // return this.httpService.get(`${this.dataStoreUrl}/${namespace}/${key}`);
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

  deleteConfiguration(namespace: string, key: string): Observable<any> {
    return this.httpService.delete(`${this.dataStoreUrl}/${namespace}/${key}`);
  }
  generateRandoId(): Observable<any> {
    return this.httpService
      .get('system/id.json')
      .pipe(switchMap((codes: any[]) => codes[0]));
  }
  getPeriodTypes(): Observable<any> {
    return this.httpService2.get(this.periodTypeUrl);
  }
}
