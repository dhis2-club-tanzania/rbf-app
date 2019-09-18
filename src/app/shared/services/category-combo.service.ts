import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryComboService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getDefaultCategoryCombo(): Observable<any> {
    const category = 'default';
    return this.http.get(
      `categoryCombos.json?filter=displayName:eq:${category}&fields=id&paging=false`
    );
  }
}
