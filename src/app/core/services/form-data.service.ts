import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private dhisHttp: NgxDhis2HttpClientService, private httpClient: HttpClient) { }
}
