import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationUnitService {
  constructor(private http: NgxDhis2HttpClientService) {}
  getOrganisationUnits(level: number): Observable<any> {
    return this.http.get(
      `26/organisationUnits.json?filter=level:le:${level}&fields=id`
    );
  }
}
