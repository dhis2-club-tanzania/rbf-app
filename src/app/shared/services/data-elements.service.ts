import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataElementsService {
  constructor(private httpService: NgxDhis2HttpClientService) {}

  getDataElements(): Observable<any> {
    return this.httpService.get(
      'dataElements.json?fields=id,name,categoryCombo[id]&paging=false'
    );
  }
}
