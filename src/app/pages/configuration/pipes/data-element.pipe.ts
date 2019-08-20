import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import { DataElementList } from '../models/data-element.model';
import { State } from 'src/app/store/reducers';
import { getAllDataElements } from 'src/app/store/selectors';

@Pipe({
  name: 'dataElement'
})
export class DataElementPipe implements PipeTransform {
  dataElements: Observable<DataElementList[]>;
  constructor(private store: Store<State>) {
    this.dataElements = this.store.select(getAllDataElements);
  }
  dataElementList = [];

  transform(value?: string): any {
    this.dataElements.subscribe(data => (this.dataElementList = data));
    const dataElement: DataElementList = _.find(
      this.dataElementList,
      (data: DataElementList) => data.id === value
    );
    return dataElement.name;
  }
}
