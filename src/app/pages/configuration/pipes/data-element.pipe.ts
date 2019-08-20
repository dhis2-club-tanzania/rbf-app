import { Pipe, PipeTransform } from '@angular/core';
import { DataElementList } from '../models/data-element.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
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
  transform(value?: string): any {
    return value;
  }
}
