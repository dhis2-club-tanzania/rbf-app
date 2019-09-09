import * as _ from 'lodash';
export function getPeriodObject(periodSelectionObject: any) {
  if (periodSelectionObject.type === 'Monthly') {
    return [
      {
        id: periodSelectionObject.id,
        name: periodSelectionObject.name
      }
    ];
  } else {
    const periodObject: any[] = [];
    periodSelectionObject.monthly.forEach(month => {
      periodObject.push({
        id: _.get(month, 'id'),
        name: _.get(month, 'name')
      });
    });
    return periodObject;
  }
}
