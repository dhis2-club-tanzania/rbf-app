import { FormDataValue } from '../models/form-data.model';
import * as _ from 'lodash';

function getDataElementId(id: string): string {
  const ids = id.split('-');
  return ids[0];
}

export function getSanitizedFormData(formData: any): FormDataValue {
  const dataValues = _.assign(
    {},
    {
      id: getDataElementId(formData.id),
      val: formData.val,
      com: formData.com,
    }
  );

  return dataValues;
}
