import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
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
  constructor(private httpService: NgxDhis2HttpClientService) {
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
  getConfigurationKeysByNameSpace(namespace: string) {
    return new Promise((resolve, reject) => {
      this.httpService.get(`${this.dataStoreUrl}/${namespace}`).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /**
   *
   * @param namespace data store namespace
   * @param key data store key
   */
  gatConfigurationValuesByNameSpaceAndKey(namespace: string, key: string) {
    return new Promise((resolve, reject) => {
      this.httpService
        .get(`${this.dataStoreUrl}/${namespace}/${key}`)
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  /**
   *
   * @param namespace datastore namespace
   */
  async getNameSpaceWithConfigurations(namespace: string) {
    const data = [];
    const keys: any = await this.getConfigurationKeysByNameSpace(namespace);
    for (const key of keys) {
      const value = await this.gatConfigurationValuesByNameSpaceAndKey(
        namespace,
        key
      );
      data.push(value);
    }
    return data;
  }

  /**
   *
   * @param namespace datastore namespace
   */
  getConfigurations(namespace: string): Observable<any> {
    return new Observable(observer => {
      this.getNameSpaceWithConfigurations(namespace)
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
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

  /**
   *
   * @param namespace datat store namespace
   * @param key data store key
   */
  deleteConfiguration(namespace: string, key: string): Observable<any> {
    return this.httpService.delete(`${this.dataStoreUrl}/${namespace}/${key}`);
  }

  /**
   *
   * @param namespace data store namespace
   */
  addDefaultGeneralConfiguration(namespace: string): Observable<any> {
    const date = new Date();
    const defaultConfig = {
      id: 'default',
      user: null,
      created: date,
      errorRate: 10,
      lastUpdate: date,
      periodType: 'Quarterly',
      organisationUnitLevel: {
        id: 'm9lBJogzE95',
        level: 4,
        displayName: 'Facility'
      }
    };

    return this.httpService.post(
      `${this.dataStoreUrl}/${namespace}/${defaultConfig.id}`,
      defaultConfig
    );
  }

  getGeneralConfigurations(namespace): Observable<any> {
    return this.httpService.get(`${this.dataStoreUrl}/${namespace}/default`);
  }

  getPeriodTypes(): Observable<any> {
    return this.httpService.get(this.periodTypeUrl);
  }

  getOrgUnitsLevel(): Observable<any> {
    return this.httpService.get(
      'organisationUnitLevels.json?fields=level,displayName,id'
    );
  }
}
