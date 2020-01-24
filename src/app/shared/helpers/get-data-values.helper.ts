import * as _ from 'lodash';
import { FormDataValue } from '../models/form-data.model';

export function getDavaValues(
  dataElement: string,
  formDataValues: FormDataValue[]
): number {
  const value = _.find(
    formDataValues,
    (dataValue: FormDataValue) => dataElement === dataValue.id
  );
  // return value ? value : 0;
  return 0;
}
