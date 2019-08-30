import * as _ from 'lodash';
import { DataElement } from '@iapps/ngx-dhis2-data-filter';

export function getSanitizedDataElementsLits(
  dataElementListObject
): DataElement[] {
  if (!dataElementListObject.dataElements) {
    return null;
  }

  return _.map(dataElementListObject.dataElements, dataElement => {
    return {
      ...dataElement,
      categoryCombo: dataElement.categoryCombo.id
    };
  });
}
